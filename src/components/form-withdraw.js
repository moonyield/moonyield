import { useState } from "react";
import NetworkSelector from "./NetworkSelector";
import { useConnect, usePrepareContractWrite, useContractWrite } from "wagmi";
import { avalanche, moonbeam } from "wagmi/chains";

export default function FormWithdraw() {
  // const { data } = useConnect();
  const [selectedNetwork, setSelectedNetwork] = useState(avalanche);

  return (
    <div>
      <div className="flex flex-row rounded-md border-2 border-slate-400 mt-20 bg-slate-100 p-8 lg:ml-96 lg:mr-96 justify-center">
        <div className="flex gap-12 justify-center">
          <div className="flex justify-center flex-col gap-3">
            <span>
              Select the network to deposit from into Moonbeam network
            </span>
            <NetworkSelector
              selectedNetwork={selectedNetwork}
              setSelectedNetwork={setSelectedNetwork}
              networks={[avalanche]}
            />
            <form className="flex gap-3 flex-col">
              <div className="relative">
                <input
                  type="number"
                  placeholder="amount"
                  className="rounded-md w-full bg-slate-300 placeholder-gray-500 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
                />
                <div className="absolute right-1 text-sm top-1/2 transform -translate-y-1/2 bg-slate-500 text-slate-200 font-bold px-1 py-2 rounded-md">
                  axlUSDC
                </div>
              </div>
              <button
                type="submit"
                className="rounded-md hover:text-slate-100 bg-slate-300 hover:bg-slate-400 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
              >
                deposit
              </button>
            </form>
          </div>
          {/* <div className="flex justify-center flex-col gap-3">
            <span>Select the network to withdraw in from Moonbeam network</span>
            <NetworkSelector
              selectedNetwork={selectedNetwork}
              setSelectedNetwork={setSelectedNetwork}
            />
            <form className="flex gap-3 flex-col">
              <input
                type="text"
                placeholder="amount"
                className="rounded-md bg-slate-300 placeholder-gray-500 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
              />
              <button
                type="submit"
                className="rounded-md bg-slate-300 hover:text-slate-100 hover:bg-slate-400 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
              >
                withdraw
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}
