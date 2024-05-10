'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query'
import { getBuiltGraphSDK } from '@/.graphclient'
import { useMemo, useRef, useEffect } from 'react'
import { getTradeStatistics, getTradeMetrics, weiToXdai } from '@/lib/utils'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { formatAddress } from 'ens-tools';
import {Chart, DoughnutController, ArcElement, Legend} from 'chart.js'
import { Copy } from "lucide-react"
import { useBalance } from 'wagmi'
import { useToast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
// import StakingBox from "./staking_box"

export function SkeletonCard() {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <Skeleton className="flex-1 h-[350px] rounded-md" />
      <Skeleton className="flex-1 h-[350px] rounded-md" />
    </div>
  )
}

Chart.register(
  DoughnutController,
  ArcElement,
  Legend
);

interface StatsProps {
  id: string;
  jan2024: number;
  today: number;
}

interface TradeStatistics {
  total: number;
  open: number;
  pending: number;
  finalizing: number;
  arbitriting: number;
  closed: number;
  unknown: number;
}

const sdk = getBuiltGraphSDK()

export function Stats({ id, jan2024, today }: StatsProps) {
  const address = formatAddress(id);
  

  const result = useBalance({
    address: id as `0x${string}`,
  })

  const chartRef = useRef<HTMLCanvasElement>(null)
  
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['allTrades'],
    queryFn: () => sdk.AllTrades({ creator: id.toLowerCase() }),
    enabled: !!id
  });

  const tradeStatistics = useMemo(() => {
    if (data?.fpmmTrades) {
      return getTradeStatistics(data.fpmmTrades);
    }
    return {
      total: 0,
      open: 0,
      pending: 0,
      finalizing: 0,
      arbitriting: 0,
      closed: 0,
      unknown: 0
    };
  }, [data]);
 
  const tradeMetrics = useMemo(() => {
    if (data?.fpmmTrades) {
      return getTradeMetrics(data.fpmmTrades);
    }
    return {
      winnerTradesPercentage: 0,
      netEarningAmount: 0,
      winnerTrades: 0,
      totalEarnings: 0,
      totalRedemptions: 0,
      totalInvestment: 0,
      totalFees: 0,
      roi: 0,
    };
  }, [data]);
  
  useEffect(() => {
    // convert the trademetrics object into array
    const tradeStatisticsArray = Object.entries(tradeStatistics)
      .filter(([key, _]) => key !== 'total')
      .map(([key, value]) => ({
        metric: value + " " + key,
        value
      }));
    if (chartRef.current) {


      const chartInstance = new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: tradeStatisticsArray.map(row => row.metric),
          datasets: [{
            label: 'Trades status',
            data: tradeStatisticsArray.map(row => row.value),
            backgroundColor: ['rgba(76, 175, 80, 0.8)', 'rgba(255, 152, 0, 0.8)', 'rgba(33, 150, 243, 0.8)', 'rgba(244, 67, 54, 0.8)', 'rgba(158, 158, 158, 0.8)', 'rgba(156, 39, 176, 0.8)' ],
            hoverOffset: 4
          }]
        },
        options: {
          plugins: {
            legend: {
              position: 'bottom',
            }
          }
        }
      });

      // Cleanup function to destroy chart instance on component unmount
      return () => {
        chartInstance.destroy();
      };
    }
  }, [data]);
  

  if (isLoading) return <SkeletonCard />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    
    <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
      {/* <StakingBox id={id} /> */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Trader Agent details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 divide-y divide-border">
            <div className="flex flex-row pt-3 items-center justify-between gap-0">
              <span className="uppercase text-sm text-muted-foreground">
                Safe Balance
              </span>
              <span className="font-light text-lg">{result.data ? parseFloat(result.data.formatted).toFixed(2) : '0.00'} xDAI</span>{" "}
            </div>
            <div className="flex flex-row pt-3 items-center justify-between gap-0">
              <span className="uppercase text-sm text-muted-foreground">
                Earnings
              </span>
              <span className="font-light text-lg">{weiToXdai(BigInt(tradeMetrics.totalEarnings))}</span>{" "}
            </div>
            <div className="flex flex-row pt-3 items-center justify-between gap-0">
              <span className="uppercase text-sm text-muted-foreground">
                Invested
              </span>
              <span className="font-light text-lg">{weiToXdai(BigInt(tradeMetrics.totalInvestment))}</span>{" "}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle><div>
            <div>Trades Status</div>
            <div className="mt-2 text-muted-foreground font-normal">{tradeStatistics.total} Total trades - {tradeMetrics.winnerTrades} Trades won ({Math.floor(tradeMetrics.winnerTradesPercentage)}%)</div>
            </div></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="">
            <canvas ref={chartRef} id="acquisitions"></canvas>
          </div>
        </CardContent>
      </Card>
          {/* <div className="flex flex-col gap-2">



          
     
            <div className="flex items-center justify-between space-x-4">
            <h4 className="text-sm font-semibold">
            {tradeStatistics.total} Total trades : {tradeMetrics.winnerTrades} Trades won ({Math.floor(tradeMetrics.winnerTradesPercentage)}%)
            </h4>
            
          </div> */}


          {/* <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.open}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Open
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.pending}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Pending
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.finalizing}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Finalizing
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.arbitriting}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Arbitriting
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.closed}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Closed
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <span className="font-bold">{tradeStatistics.unknown}</span>{" "}
              <span className="uppercase text-xs text-muted-foreground">
                Unknown
              </span>
            </div>
            
          </div> */}
          
      {/* <Card className="p-4">
        <Collapsible open={isMetricOpen}
          onOpenChange={setIsMetricOpen}
          className=" space-y-2">
            <div className="flex items-center justify-between space-x-4">
            <h4 className="text-sm font-semibold">
            Trades Metrics
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent>

          <div className="flex justify-between gap-3">
          <div className="flex flex-col gap-0">
            <span className="font-bold">{tradeMetrics.winnerTrades}  ({Math.floor(tradeMetrics.winnerTradesPercentage)}%)</span>{" "}
            <span className="uppercase text-xs text-muted-foreground">
              Trades won
            </span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="font-bold">{weiToXdai(BigInt(tradeMetrics.totalEarnings))}</span>{" "}
            <span className="uppercase text-xs text-muted-foreground">
              Total Earnings
            </span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="font-bold">{weiToXdai(BigInt(tradeMetrics.netEarningAmount))}</span>{" "}
            <span className="uppercase text-xs text-muted-foreground">
              Net Earnings
            </span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="font-bold">{weiToXdai(BigInt(tradeMetrics.totalInvestment))}</span>{" "}
            <span className="uppercase text-xs text-muted-foreground">
              Total Investment
            </span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="font-bold">{weiToXdai(BigInt(tradeMetrics.totalFees))}</span>{" "}
            <span className="uppercase text-xs text-muted-foreground">
              Fees
            </span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="font-bold">{0}</span>{" "}
            <span className="uppercase text-xs text-muted-foreground">
              ROI
            </span>
          </div>
          </div>
          </CollapsibleContent>
        </Collapsible>
      </Card> */}
          


      
      {/* </div>*/}
    </div> 
  );
}
