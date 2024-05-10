"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Check, CircleOff, PartyPopper, Frown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { weiToXdai } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/spinner";
import { getBuiltGraphSDK } from "@/.graphclient";
import { Separator } from "@/components/ui/separator";
import { useInfiniteQuery } from "@tanstack/react-query";

const sdk = getBuiltGraphSDK();

function Feed({id, jan2024, today}: {id: string, jan2024: number, today: number}) {
  const creator = String(id).toLowerCase();
  // const [tradesPerPage] = React.useState(10);


  const market_status = function (market: any) {
    const utcOpeningTimestamp = new Date(
      market.fpmm.openingTimestamp * 1000
    ).getTime();
    const utcFinalizedTimestamp = new Date(
      market.fpmm.answerFinalizedTimestamp * 1000
    ).getTime();
    try {
      if (market.fpmm.currentAnswer == null && today >= utcOpeningTimestamp) {
        return "Pending";
      } else if (market.fpmm.currentAnswer == null) {
        return "Open";
      } else if (market.fpmm.isPendingArbitration) {
        return "Arbitrating";
      } else if (today < utcFinalizedTimestamp) {
        return "Finalizing";
      } else {
        return "Closed";
      }
    } catch (error) {
      console.error(error);
      return "Exception";
    }
  };

  const fetchTrades = async ({ pageParam = 0 }) => {
    const result = await sdk.Trades({
      creator: creator,
      fromTimestamp: BigInt(Math.floor(jan2024 / 1000)).toString(),
      toTimestamp: BigInt(Math.floor(today / 1000)).toString(),
      first: 10,
      skip: pageParam,
    });
    return result;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["trades"],
    queryFn: ({ pageParam }) => fetchTrades({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      return lastPage.fpmmTrades.length === 10
        ? allPages.length * 10
        : undefined;
    },
  });

  const trades = data?.pages.flatMap((page) => page.fpmmTrades) || [];

  return status === "pending" ? (
    <div className="h-screen -mt-[80px] w-full items-center place-content-center flex">
      <div>
        <LoadingSpinner className="w-8 h-8 text-center text-muted-foreground" />
      </div>
    </div>
  ) : status === "error" ? (
    <p>Error</p>
  ) : (
    <>
      {data && (
        <div>
          <div className="flex flex-col gap-3">
            {trades.map((trade, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="font-medium leading-6">
                    <div>
                      {market_status(trade) == "Closed" ? (
                        <div className="mb-1.5">
                          {trade.fpmm.outcomes ? (
                            trade.fpmm.outcomes[
                              parseInt(trade.fpmm.currentAnswer!, 16)
                            ] === trade.fpmm.outcomes[trade.outcomeIndex] ? (
                              <div className="text-green-500  flex items-end text-sm gap-2">
                                <PartyPopper className="w-5 h-5" />
                                <span className="font-normal">
                                  {weiToXdai(trade.outcomeTokensTraded)} earned
                                </span>
                              </div>
                            ) : (
                              <div className="text-red-500 flex items-end text-sm gap-2">
                                <Frown className="w-5 h-5" />
                                <span className="font-normal">Bet lost</span>
                              </div>
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                      <div>{trade.title}</div>
                      <div className="!text-sm mt-1 !font-normal text-muted-foreground flex items-center gap-2">
                        <span className="text-sm !font-normal text-muted-foreground">
                          {new Date(
                            trade.creationTimestamp * 1000
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span>·</span>
                        <span>
                          Bought {weiToXdai(trade.collateralAmount)} for{" "}
                          {weiToXdai(trade.outcomeTokensTraded)}{" "}
                          {trade.fpmm.outcomes
                            ? trade.fpmm.outcomes[trade.outcomeIndex]
                            : "unknown"}{" "}
                          tokens
                        </span>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <Separator />
                <CardContent className="flex flex-col md:flex-row items-center pt-4 justify-between">
                  <div className="flex items-center gap-10 ">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        {trade.fpmm.outcomes &&
                        trade.fpmm.outcomes[trade.outcomeIndex] == "Yes" ? (
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="">Yes</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <CircleOff className="w-4 h-4 text-red-500" />
                            <span className="">No</span>
                          </div>
                        )}
                        {/* <span className='font-bold'>{trade.fpmm.outcomes ? trade.fpmm.outcomes[trade.outcomeIndex] : 'unknown'}</span> */}
                      </div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        Agent prevision
                      </span>
                    </div>
                    {market_status(trade) == "Closed" ? (
                      <div className="flex flex-col gap-1">
                        <div>
                          {trade.fpmm.outcomes && (
                            <Badge variant={"outline"}>
                              {
                                trade.fpmm.outcomes[
                                  parseInt(trade.fpmm.currentAnswer!, 16)
                                ]
                              }
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          Final result
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1">
                        {market_status(trade) === "Open" ? (
                          <div>
                            <Badge
                              className="inline-flex items-center gap-2"
                              variant="outline"
                            >
                              <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                              </span>
                              {market_status(trade)}
                            </Badge>
                          </div>
                        ) : market_status(trade) === "Pending" ? (
                          <div>
                            <Badge
                              className="inline-flex items-center gap-2"
                              variant="outline"
                            >
                              <LoadingSpinner className="w-3 h-3" />
                              {market_status(trade)}
                            </Badge>
                          </div>
                        ) : (
                          <div>
                            <Badge className="inline" variant="outline">
                              {market_status(trade)}
                            </Badge>
                          </div>
                        )}

                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          Market status
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col gap-1">
                      <div>
                        <Badge className="inline" variant="outline">
                          {Math.round(trade.outcomeTokenMarginalPrice * 100)}%
                        </Badge>
                      </div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        Probability
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 w-full md:w-auto">
                    <a
                      className={buttonVariants({ variant: "outline" })}
                      target="blank"
                      href={`https://aiomen.eth.limo/#/${trade.fpmm.id}`}
                    >
                      View Market
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {hasNextPage && (
              <Button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? "Loading more..."
                  : hasNextPage
                    ? "Load More"
                    : "Nothing more to load"}
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Feed;
