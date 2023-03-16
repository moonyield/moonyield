import { useState, useEffect } from "react";
import NetworkSelector from "./DepositNetworkSelector";
import WithdrawSelector from "./WithdrawNetworkSelector";
import { useSigner, useNetwork, useSwitchNetwork } from "wagmi";
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
import approveOnRemote from "../actions/approve";
import BannerToast from "./ToastBanner";

const contracts = {
  vault: "0x9961CDF83F4Aa5805E933b94872ecD6f4a3CeCa7",
};

export default function FormWithdraw() {
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const [depositNetwork, setDepositNetwork] = useState(
    chain == avalanche ? avalanche : chain == polygon ? polygon : avalanche
  );
  const [withdrawNetwork, setWithdrawNetwork] = useState(avalanche);

  const [depositInProcess, setDepositInProcess] = useState(false);
  const [depositHash, setDepositHash] = useState("");

  const [approvalInProcess, setApprovalInProcess] = useState(false);
  const [approvalHash, setApprovalHash] = useState("");
  const [approved, setApproved] = useState(false);

  const [withdrawInProcess, setWithdrawInProcess] = useState(false);
  const [withdrawHash, setWithdrawHash] = useState("");

  const [toDeposit, setToDeposit] = useState(5);

  const [state, newBanner] = BannerToast();

  useEffect(() => {
    if (chain == undefined) {
      return;
    }
    if (chain?.id !== depositNetwork?.id) {
      console.log("deposit", depositNetwork);
      console.log("chain", chain);
      switchNetwork?.(depositNetwork.id);
    }
  }, [depositNetwork]);

  // const user = signer._address;
  // const Vault = new Contract(contracts.vault, IERC20, signer);
  // const vaultBalance = Vault.balanceOf(user);
  // console.log(vaultBalance);

  async function handleDeposit(e) {
    e.preventDefault();
    if (chain.id !== depositNetwork.id) {
      // makeErrorToast(`Switch to ${depositNetwork.name} to continue.`);
      newBanner({
        message: `Switch to ${depositNetwork.name} to continue.`,
        type: "error",
      });
      return;
    }
    setDepositInProcess(true);
    try {
      const hash = await depositOnRemote(
        signer,
        toDeposit,
        newBanner,
        depositNetwork.id
      );
      console.log(hash);
      setDepositHash(hash);
    } catch {
      setDepositInProcess(false);
    }
  }

  async function handleApprove(e) {
    e.preventDefault();
    if (chain.id !== depositNetwork.id) {
      // makeErrorToast(`Switch to ${depositNetwork.name} to continue.`);
      newBanner({
        message: `Switch to ${depositNetwork.name} to continue.`,
        type: "error",
      });
      return;
    }
    setApprovalInProcess(true);
    try {
      const appHash = await approveOnRemote(
        signer,
        toDeposit,
        newBanner,
        depositNetwork.id
      );
      console.log(approvalHash);
      setApprovalHash(appHash);
      setApproved(true);
    } catch {
      setApprovalInProcess(false);
    }
  }

  async function withdrawLogic() {
    setWithdrawInProcess(true);
    try {
      const hash = await withdrawFromMoonbeam(
        signer,
        withdrawNetwork.name,
        newBanner
      );
      console.log(hash);
      setWithdrawHash(hash);
    } catch {
      setWithdrawInProcess(false);
    }
  }

  async function handleWithdraw() {
    if (chain.id !== 1284) {
      newBanner({
        message: `Switch to Moonbeam network to continue.`,
        type: "error",
      });
      return;
    }
    withdrawLogic();
  }

  return (
    <div className="flex justify-center font-space ">
      <div className="flex flex-row rounded-md ring-1 w-2xl ring-gray-100/10 bg-gray-500/10 px-8 py-6 justify-center relative">
        <div className="flex flex-col divide-y-2 divide-dashed divide-gray-500/60 divide gap-2 pt-1 justify-center">
          <div className="flex justify-center mb-8 flex-col gap-3">
            <span className="text-gray-200">
              Select the network to deposit from into Moonbeam network
            </span>
            <NetworkSelector
              selectedNetwork={depositNetwork}
              setSelectedNetwork={setDepositNetwork}
              networks={[avalanche, polygon]}
            />
            <div className="flex gap-3 flex-col">
              <div className="relative ">
                <input
                  type="number"
                  placeholder="amount"
                  className="rounded-md w-full bg-gray-800/40 hover:bg-gray-800/80 focus:bg-gray-800/80 text-gray-300 outline-none ring-[1.5px] ring-slate-500  px-3 py-2.5"
                  value={toDeposit}
                  onChange={(e) => setToDeposit(e.target.value)}
                />
                <div className="absolute mr-0.5 right-1 text-sm top-1/2 transform -translate-y-1/2 bg-slate-600 text-slate-200 font-bold px-1.5 py-1.5 rounded-md">
                  axlUSDC
                </div>
              </div>
              {!signer ? (
                <button
                  id="approve-deposit"
                  type="submit"
                  className="rounded-md disabled cursor-not-allowed  focus:text-slate-100 bg-slate-800/40 hover:bg-slate-800/80 focus:bg-800/80 text-gray-300 outline-none ring-[1.25px] ring-slate-500 px-3 py-2.5"
                >
                  Approve
                </button>
              ) : (
                <div>
                  {!approved ? (
                    <button
                      id="approve-deposit"
                      onClick={handleApprove}
                      type="submit"
                      className="rounded-md w-full focus:text-slate-100 bg-slate-800/40 hover:bg-slate-800/80 focus:bg-800/80 text-gray-300 outline-none ring-[1.5px] ring-slate-500 px-3 py-2.5"
                    >
                      {approvalInProcess ? (
                        <div>
                          <span className="loader"></span>
                        </div>
                      ) : (
                        <div>Approve</div>
                      )}
                    </button>
                  ) : (
                    <button
                      id="approve-deposit"
                      onClick={handleDeposit}
                      type="submit"
                      className="rounded-md w-full focus:text-slate-100 bg-slate-800/40 hover:bg-slate-800/80 focus:bg-800/80 text-gray-300 outline-none ring-[1.25px] ring-slate-500 px-3 py-2.5"
                    >
                      Deposit
                    </button>
                  )}
                </div>
              )}

              {depositInProcess ? (
                <div className="text-white font-space rounded-t-2xl ease-in-out duration-200 rounded-b-md border-t-2 border-purple-800 absolute bg-black ring-1 ring-black left-0 bottom-0 w-full h-44 z-50">
                  {depositHash ? (
                    <div className="flex pt-6 px-2 ml-2  justify-start items-start">
                      <div className="text-start text-md">
                        <div className="flex flex-row gap-32">
                          <div>
                            Your cross-chain <b>deposit</b> has been sent
                          </div>
                          <button
                            className="rounded-md hover:text-slate-100  bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 text-gray-200 outline-none ring-1 ring-slate-600 px-1 py-1 text-sm"
                            onClick={() => setDepositInProcess(false)}
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
                            href={`https://axelarscan.io/gmp/${depositHash}`}
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
                      <div>Your deposit is in process </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-start flex-col gap-3 pt-8">
            <span className="text-gray-200">
              Select the network to withdraw in from Moonbeam network
            </span>
            <WithdrawSelector
              selectedNetwork={withdrawNetwork}
              setSelectedNetwork={setWithdrawNetwork}
              networks={[avalanche, moonbeam, polygon, fantom, arbitrum, bsc]}
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
                          rel="noreferrer"
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
