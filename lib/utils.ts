import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

enum MarketState {
  OPEN = 1,
  PENDING = 2,
  FINALIZING = 3,
  ARBITRATING = 4,
  CLOSED = 5,
  UNKNOWN = 6,
}
const INVALID_ANSWER = BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const weiToXdai = (wei: bigint): string => {
  const xdai = Number(wei) / 1e18; // Convert wei to xDAI
  return `${xdai.toFixed(2)} xDAI`;
}

function getMarketState(trade: any): any {
  try {
    const now = new Date();
    const { fpmm } = trade;

    if (fpmm.currentAnswer === null && now >= new Date(Number(fpmm.openingTimestamp) * 1000)) {
      return MarketState.PENDING;
    } else if (fpmm.currentAnswer === null) {
      return MarketState.OPEN;
    } else if (fpmm.isPendingArbitration) {
      return MarketState.ARBITRATING;
    } else if (now < new Date(Number(fpmm.answerFinalizedTimestamp) * 1000)) {
      return MarketState.FINALIZING;
    } else {
      return MarketState.CLOSED;
    }
  } catch (error) {
    return MarketState.UNKNOWN;
  }
}


export function getTradeStatistics(trades: any[]): { total: number; [key: string]: number } {
  const tradeStatistics: { total: number; [key: string]: number } = {
    total: trades.length,
    open: 0,
    pending: 0,
    finalizing: 0,
    arbitriting: 0,
    closed: 0,
    unknown: 0,
  };

  for (const trade of trades) {
    const marketState = getMarketState(trade);
    tradeStatistics[MarketState[marketState].toLowerCase()]++;
  }

  return tradeStatistics;
}



interface TradeMetrics {
  winnerTradesPercentage: number;
  totalRedemptions: number;
  totalEarnings: number;
  totalEarningAmount: number;
  netEarningAmount: number;
  winnerTrades: number;
  totalInvestment: number;
  totalFees: number;
  roi: number;
}

function is_redeemed(user_json: any, fpmmTrade: any): boolean {
  const redemptions = user_json.data.redeems;
  const collateralToken = fpmmTrade.collateralToken;
  const feeAmount = BigInt(fpmmTrade.feeAmount);
  const collateralAmount = BigInt(fpmmTrade.collateralAmount);
  const outcomeTokensTraded = BigInt(fpmmTrade.outcomeTokensTraded);

  for (const redemption of redemptions) {
    if (
      redemption.collateralToken === collateralToken &&
      BigInt(redemption.feeAmount) === feeAmount &&
      BigInt(redemption.collateralAmount) === collateralAmount &&
      BigInt(redemption.payoutAmount) === outcomeTokensTraded
    ) {
      return true;
    }
  }

  return false;
}

export function getTradeMetrics(trades: any[]): TradeMetrics {
  const tradeMetrics: TradeMetrics = {
    winnerTradesPercentage: 0,
    winnerTrades: 0,
    totalEarnings: 0,
    totalRedemptions: 0,
    totalInvestment: 0,
    totalFees: 0,
    roi: 0,
    totalEarningAmount: 0,
    netEarningAmount: 0,
  };

  let winnerTrades = 0;
  let totalTrades = 0;

  for (const trade of trades) {
    const marketState = getMarketState(trade);

    if (marketState === MarketState.FINALIZING) {
            totalTrades++;
            
            const currentAnswer = parseInt(trade.fpmm.currentAnswer!, 16);
            const isInvalid = currentAnswer === Number(INVALID_ANSWER);
            
            if (isInvalid) {
              tradeMetrics.totalEarnings += parseInt(trade.collateralAmount);
            } else if (Number(trade.outcomeIndex) === Number(currentAnswer)) {
        winnerTrades++;
        tradeMetrics.totalEarnings += parseInt(trade.outcomeTokensTraded);
      } else {
        tradeMetrics.totalEarnings += 0
      }
    }
    if (marketState === MarketState.CLOSED) {
      totalTrades++;
      const currentAnswer = parseInt(trade.fpmm.currentAnswer!, 16);
      const isInvalid = currentAnswer === Number(INVALID_ANSWER);
      if (isInvalid) {
        tradeMetrics.totalEarnings += parseInt(trade.collateralAmount);
      } else if (!isInvalid && Number(trade.outcomeIndex) === Number(currentAnswer)) {
        winnerTrades++;
        const redemption = parseInt(trade.outcomeTokensTraded);
        tradeMetrics.totalRedemptions += redemption;
        tradeMetrics.totalEarnings += redemption;

        // tradeMetrics.totalEarningAmount += parseFloat(trade.collateralAmountUSD);
      // } else {
      //   const investment = parseInt(trade.collateralAmount);
      //   tradeMetrics.totalEarnings -= investment;
      // }
      }
    }
    tradeMetrics.totalFees += parseInt(trade.feeAmount);
    tradeMetrics.totalInvestment += parseInt(trade.collateralAmount);
    
  }
  tradeMetrics.winnerTrades = winnerTrades;
  tradeMetrics.winnerTradesPercentage = totalTrades !== 0 ? (winnerTrades / totalTrades * 100) : 0;
  tradeMetrics.totalInvestment -= tradeMetrics.totalFees;
  tradeMetrics.roi =
  tradeMetrics.totalInvestment !== 0
  ? ((tradeMetrics.totalEarnings - tradeMetrics.totalInvestment) / tradeMetrics.totalInvestment) * 100
  : 0;
  
  tradeMetrics.netEarningAmount = tradeMetrics.totalEarningAmount - (tradeMetrics.totalInvestment + tradeMetrics.totalFees)  ;
  
  return tradeMetrics;
}


export const copyToClipboard = async (id: string, toast: any) => {
  try {
    await navigator.clipboard.writeText(id);
    toast({
      title: "Address copied"
    })
    // Optionally, you can add a notification to inform the user that the address has been copied.
  } catch (err) {
    toast({
      title: "Failed to copy address"
    })
    // Handle errors here, such as displaying a notification to the user.
  }
};