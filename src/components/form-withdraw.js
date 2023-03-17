import { useState } from "react";

import NetworkSelector from "./DepositNetworkSelector";
import WithdrawSelector from "./WithdrawNetworkSelector";
import { useSigner, useNetwork } from "wagmi";
import {
  avalanche,
  moonbeam,
  polygon,
  fantom,
  arbitrum,
  bsc,
} from "wagmi/chains";
import depositOnRemote from "../actions/deposit";
import withdrawFromMoonbeam from "../actions/withdraw";
<<<<<<< Updated upstream

import toast, { Toaster } from "react-hot-toast";
=======
import approveOnRemote from "../actions/approve";
import BannerToast from "./ToastBanner";
import useVaultBalance from "../actions/use-vault-balance";

const depositChains = [avalanche, polygon, arbitrum];
>>>>>>> Stashed changes

export default function FormWithdraw() {
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const [depositNetwork, setDepositNetwork] = useState(avalanche);
  const [withdrawNetwork, setWithdrawNetwork] = useState(avalanche);

  const [depositInProcess, setDepositInProcess] = useState(false);
  const [depositHash, setDepositHash] = useState("");

  const [withdrawInProcess, setWithdrawInProcess] = useState(false);
  const [withdrawHash, setWithdrawHash] = useState("");

  const [toDeposit, setToDeposit] = useState(5);

  const makeErrorToast = (msg) => toast.error(msg);

  async function handleDeposit(e) {
    e.preventDefault();
    if (chain.id !== depositNetwork.id) {
      makeErrorToast(`Switch to ${depositNetwork.name} to continue.`);
      return;
    }
    setDepositInProcess(true);
    try {
      const hash = await depositOnRemote(signer, toDeposit, makeErrorToast);
      console.log(hash);
      setDepositHash(hash);
    } catch {
      setDepositInProcess(false);
    }
  }

  async function withdrawLogic() {
    setWithdrawInProcess(true);
    try {
      const hash = await withdrawFromMoonbeam(
        signer,
        withdrawNetwork.name,
        makeErrorToast
      );
      console.log(hash);
      setWithdrawHash(hash);
    } catch {
      setWithdrawInProcess(false);
    }
  }

  async function handleWithdraw() {
    if (chain.id !== 1284) {
      makeErrorToast("Switch to Moonbeam to withdraw.");
      return;
    }
    withdrawLogic();
  }

  return (
<<<<<<< Updated upstream
    <div>
      <Toaster />
      <div className="flex flex-row rounded-md border-2 border-slate-400 mt-20 bg-slate-100 p-8 lg:ml-72 lg:mr-72 justify-center relative">
        <div className="flex gap-12 justify-center">
          <div className="flex justify-center flex-col gap-3">
            <span>
=======
    <div className="flex justify-center font-space ">
      <div className="flex flex-row rounded-md ring-1 w-2xl ring-gray-100/10 bg-gray-500/10 px-8 py-6 justify-center relative">
        <div className="flex flex-col divide-y-2 divide-dashed divide-gray-500/60 divide gap-2 pt-1 justify-center">
          <div className="flex justify-center mb-4 flex-col gap-3">
            <span className="text-gray-200">
>>>>>>> Stashed changes
              Select the network to deposit from into Moonbeam network
            </span>
            <NetworkSelector
              selectedNetwork={depositNetwork}
              setSelectedNetwork={setDepositNetwork}
              networks={[avalanche]}
            />
            <form className="flex gap-3 flex-col" onSubmit={handleDeposit}>
              <div className="relative ">
                <input
                  type="number"
                  placeholder="amount"
                  className="rounded-md w-full hover:text-gray-800 focus:text-slate-800  bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
                  value={toDeposit}
                  onChange={(e) => setToDeposit(e.target.value)}
                />
                <div className="absolute mr-0.5 right-1 text-sm top-1/2 transform -translate-y-1/2 bg-slate-500 text-slate-200 font-bold px-1.5 py-2 rounded-md">
                  axlUSDC
                </div>
              </div>
              <button
                type="submit"
                className="rounded-md hover:text-gray-800 focus:text-slate-100  bg-slate-200 hover:bg-slate-300 focus:bg-slate-400 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
              >
                deposit
              </button>
              {depositInProcess ? (
<<<<<<< Updated upstream
                <div className="text-white absolute bg-slate-800 bg-opacity-90 left-0 top-0 w-full h-full z-50">
=======
                <div className="text-white font-space rounded-t-2xl ease-in-out duration-200 rounded-b-md border-t-4 border-purple-800 absolute bg-[#101010] ring-1 ring-gray-100/10 left-0 bottom-0 w-full h-56 z-50">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <div className="flex justify-start flex-col gap-3">
            <span>Select the network to withdraw in from Moonbeam network</span>
            <WithdrawSelector
              selectedNetwork={withdrawNetwork}
              setSelectedNetwork={setWithdrawNetwork}
              networks={[avalanche, moonbeam, polygon, fantom, arbitrum, bsc]}
            />

            <button
              onClick={() => handleWithdraw()}
              className="rounded-md hover:text-gray-800 focus:text-slate-100  bg-slate-200 hover:bg-slate-300 focus:bg-slate-400 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
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
=======
          {signer ? (
            <div>
              {vaultBalance > 0 ? (
                <div className="flex justify-start flex-col gap-3 pt-4">
                  {vaultBalance > 0 ? (
                    <span className="inline-flex gap-2 items-center rounded-md bg-gradient-to-r from-pink-400/30 to-violet-400/30 px-4 py-2 text-lg font-medium text-indigo-100">
                      <div className="text-center gap-2 flex text-gray-300">
                        Total $USDC Deposited:<b> ${vaultBalance.toFixed(2)}</b>
                      </div>
                    </span>
                  ) : null}
                  <span className="text-gray-200">
                    Select the network to withdraw in from Moonbeam network
                  </span>
                  <WithdrawSelector
                    selectedNetwork={withdrawNetwork}
                    setSelectedNetwork={setWithdrawNetwork}
                    networks={[
                      avalanche,
                      moonbeam,
                      polygon,
                      fantom,
                      arbitrum,
                      bsc,
                    ]}
                  />
                  {!signer ? (
                    <button
                      onClick={() => handleWithdraw()}
                      className="rounded-md disabled cursor-not-allowed  focus:text-slate-100 bg-slate-800/40 hover:bg-slate-800/80 focus:bg-800/80 text-gray-300 outline-none ring-1 ring-slate-500 px-3 py-2.5"
                    >
                      withdraw all
                    </button>
                  ) : (
                    <button
                      onClick={() => handleWithdraw()}
                      className="rounded-md  focus:text-slate-100 bg-slate-800/40 hover:bg-slate-800/80 focus:bg-800/80 text-gray-300 outline-none ring-[1.5px] ring-slate-500 px-3 py-2.5"
                    >
                      withdraw all
                    </button>
                  )}

                  {withdrawInProcess ? (
                    <div className="text-white font-space rounded-t-2xl ease-in-out duration-200 rounded-b-md border-t-4 border-purple-800 absolute bg-[#101010] ring-1 ring-gray-100/10 left-0 bottom-0 w-full h-56 z-50">
                      {withdrawHash ? (
                        <div className="flex pt-6 px-2 ml-2  justify-start items-start">
                          <div className="text-start text-md">
                            <div className="flex flex-row gap-32">
                              <div>
                                Your cross-chain <b>withdrawal</b> has been sent
                              </div>
                              <button
                                className="rounded-md hover:text-slate-100  bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 text-gray-200 outline-none ring-1 ring-slate-600 px-1 py-1 text-sm"
                                onClick={() => setWithdrawInProcess(false)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-5 h-5"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>

                            <p>
                              Track transaction status{" "}
                              <a
                                href={`https://axelarscan.io/gmp/${withdrawHash}`}
                                target={"_blank"}
                                rel="noreferrer"
                                className="text-blue-200 font-bold underline inline-block"
                              >
                                here
                              </a>
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-4 w-full h-full justify-center items-center text-xl font-bold">
                          <div>
                            <span className="loader mx-3"></span>
                          </div>
                          <div>Your withdrawal is in process </div>
                        </div>
                      )}
>>>>>>> Stashed changes
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="pt-4 text-gray-400">
                  <span>
                    Uh oh! Looks like you haven't deposited anything to
                    Moonyield !
                  </span>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
