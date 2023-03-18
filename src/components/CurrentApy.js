import React, { useState, useEffect } from "react";
import axios from "axios";

const subgraphURL =
  "https://api.thegraph.com/subgraphs/name/moonwell-fi/moonwell-moonbeam";
const query = `
  query MyQuery {
    market(id: "0x744b1756e7651c6d57f5311767eafe5e931d615b") {
      id
      name
      supplyRate
      supplyRewardNative
      supplyRewardProtocol
    }
  }
`;

export default function CurrentApy() {
  const [market, setMarket] = useState({});
  const [apy, setApy] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchResults() {
      setIsLoading(true);
      try {
        const result = await axios.post(subgraphURL, { query });
        setMarket(result.data.data.market);
        const apyValue =
          parseFloat(result.data.data.market.supplyRate) +
          parseFloat(result.data.data.market.supplyRewardNative) +
          parseFloat(result.data.data.market.supplyRewardProtocol);
        // console.log(apyValue);
        setApy(apyValue.toFixed(2));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    const intervalId = setInterval(fetchResults, 900000);

    fetchResults();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center mt-2 ml-64 ">
      <div className="justify-end flex flex-row gap-2 rounded-md p-3">
        {isLoading ? (
          <span className="inline-flex gap-2 items-center rounded-full bg-gradient-to-r from-pink-400/30 to-violet-400/30 px-3 py-1 text-md font-medium text-indigo-100">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
            <div className="text-center gap-2 flex text-gray-300">
              Current Supply APY <span className="loader"></span>
            </div>
          </span>
        ) : (
          <span className="inline-flex gap-2 items-center rounded-full bg-gradient-to-r from-pink-400/30 to-violet-400/30 px-3 py-1 text-md font-medium text-indigo-100">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
            <div className="text-center gap-2 flex text-gray-300 ">
              Current Supply APY
              <a
                className="underline"
                href="https://moonwell.fi/artemis/USDC.wh"
                target={"_blank"}
                rel="noreferrer"
              >
                {apy} %
              </a>
            </div>
          </span>
        )}
      </div>
    </div>
  );
}
