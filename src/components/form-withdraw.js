import { useState, useEffect } from "react";

import NetworkSelector from "./DepositNetworkSelector";
import WithdrawSelector from "./WithdrawNetworkSelector";
import { useSigner, useNetwork, useSwitchNetwork } from "wagmi";
import { avalanche, moonbeam } from "wagmi/chains";
import depositOnRemote from "../actions/deposit";
import withdrawFromMoonbeam from "../actions/withdraw";

import toast, { Toaster } from "react-hot-toast";

export default function FormWithdraw() {
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  // const { chains, error, isLoading, pendingChainId, switchNetwork } =
  //   useSwitchNetwork({
  //     onSuccess: withdrawLogic,
  //     onError: () => {
  //       setWithdrawInProcess(false);
  //     },
  //   });
  // console.log(chain, error, isLoading, pendingChainId);
  const [depositNetwork, setDepositNetwork] = useState(avalanche);
  const [withdrawNetwork, setWithdrawNetwork] = useState(avalanche);

  const [depositInProcess, setDepositInProcess] = useState(false);
  const [depositHash, setDepositHash] = useState("");

  const [withdrawInProcess, setWithdrawInProcess] = useState(false);
  const [withdrawHash, setWithdrawHash] = useState("");

  const [toDeposit, setToDeposit] = useState(5);

  async function handleDeposit(e) {
    e.preventDefault();
    setDepositInProcess(true);
    try {
      const hash = await depositOnRemote(signer, toDeposit);
      console.log(hash);
      setDepositHash(hash);
    } catch {
      setDepositInProcess(false);
    }
  }

  async function withdrawLogic() {
    setWithdrawInProcess(true);
    try {
      const hash = await withdrawFromMoonbeam(signer, withdrawNetwork.name);
      console.log(hash);
      setWithdrawHash(hash);
    } catch {
      setWithdrawInProcess(false);
    }
  }

  async function handleWithdraw() {
    if (chain.id !== 1284) {
      toast.error("Switch to Moonbeam to withdraw.");
      return;
    }
    withdrawLogic();
  }

  return (
    <div>
      <Toaster />
      <div className="flex flex-row rounded-md border-2 border-slate-400 mt-20 bg-slate-100 p-8 lg:ml-96 lg:mr-96 justify-center relative">
        <div className="flex gap-12 justify-center">
          <div className="flex justify-center flex-col gap-3">
            <span>
              Select the network to deposit from into Moonbeam network
            </span>
            <NetworkSelector
              selectedNetwork={depositNetwork}
              setSelectedNetwork={setDepositNetwork}
              networks={[avalanche]}
            />
            <form className="flex gap-3 flex-col" onSubmit={handleDeposit}>
              <div className="relative">
                <input
                  type="number"
                  placeholder="amount"
                  className="rounded-md w-full bg-slate-300 placeholder-gray-500 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
                  value={toDeposit}
                  onChange={(e) => setToDeposit(e.target.value)}
                />
                <div className="absolute right-1 text-sm top-1/2 transform -translate-y-1/2 bg-slate-500 text-slate-200 font-bold px-1 py-2 rounded-md">
                  axlUSDC
                </div>
              </div>
              <button
                type="submit"
                className="rounded-md hover:text-slate-100 focus:text-slate-100  bg-slate-300 hover:bg-slate-400 focus:bg-slate-400 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
              >
                deposit
              </button>
              {depositInProcess ? (
                <div className="text-white absolute bg-slate-800 bg-opacity-90 left-0 top-0 w-full h-full z-40">
                  {depositHash ? (
                    <div className="flex w-full h-full justify-center items-center">
                      <div className="text-center text-lg">
                        <p>
                          Your cross-chain <b>deposit</b> has been sent
                        </p>
                        <p>
                          Track transaction status{" "}
                          <a
                            href={`https://axelarscan.io/gmp/${depositHash}`}
                            target={"_blank"}
                            className="text-blue-200 font-bold underline inline-block"
                          >
                            here
                          </a>
                        </p>
                        <button
                          className="rounded-md hover:text-slate-100 focus:text-slate-100  bg-slate-300 hover:bg-slate-400 focus:bg-slate-400 text-gray-800 outline-none border-2 border-slate-500 px-2 py-1.5 mt-3 text-sm"
                          onClick={() => setDepositInProcess(false)}
                        >
                          Go back
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full h-full justify-center items-center text-xl font-bold">
                      Your deposit is in process...
                    </div>
                  )}
                </div>
              ) : null}
            </form>
          </div>
          <div className="flex justify-start flex-col gap-3">
            <span>Select the network to withdraw in from Moonbeam network</span>
            <WithdrawSelector
              selectedNetwork={withdrawNetwork}
              setSelectedNetwork={setWithdrawNetwork}
              networks={[avalanche]}
            />

            <button
              onClick={() => handleWithdraw()}
              className="rounded-md bg-slate-300 hover:text-slate-100 hover:bg-slate-400 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
            >
              withdraw all
            </button>
            {withdrawInProcess ? (
              <div className="text-white absolute bg-slate-800 bg-opacity-90 left-0 top-0 w-full h-full z-40">
                {withdrawHash ? (
                  <div className="flex w-full h-full justify-center items-center">
                    <div className="text-center text-lg">
                      <p>
                        Your cross-chain <b>withdrawal</b> has been sent
                      </p>
                      <p>
                        Track transaction status{" "}
                        <a
                          href={`https://axelarscan.io/transfer/${withdrawHash}`}
                          target={"_blank"}
                          className="text-blue-200 font-bold underline inline-block"
                        >
                          here
                        </a>
                      </p>
                      <button
                        className="rounded-md hover:text-slate-100 focus:text-slate-100  bg-slate-300 hover:bg-slate-400 focus:bg-slate-400 text-gray-800 outline-none border-2 border-slate-500 px-2 py-1.5 mt-3 text-sm"
                        onClick={() => setWithdrawInProcess(false)}
                      >
                        Go back
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex w-full h-full justify-center items-center text-xl font-bold">
                    Your withdrawal is in process...
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
