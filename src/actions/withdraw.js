import { Contract } from "ethers";
import IERC20 from "../abi/erc20.json";
import HubABI from "../abi/cross-yield-hub.json";

const contracts = {
  vault: "0x9961CDF83F4Aa5805E933b94872ecD6f4a3CeCa7",
  hub: "0xfDd41d5C2f63787101027196b1eCFC6DA2aaB964",
};

async function withdrawFromMoonbeam(signer, destination, toaster) {
  const Vault = new Contract(contracts.vault, IERC20, signer);
  const Hub = new Contract(contracts.hub, HubABI, signer);

  const user = signer._address;

  console.log(destination);
  console.log("fetching shares...");
  const sharesToWithdraw = await Vault.balanceOf(user);
  console.log(`shares: ${sharesToWithdraw}`);
  if (sharesToWithdraw.eq(0)) {
    toaster("No balance found to withdraw");
    throw Error("ZERO_SHARES");
  }

  console.log("approving...");
  await Vault.approve(Hub.address, sharesToWithdraw).then((tx) => tx.wait());
  console.log("approved");

  console.log("withdrawing...");
  const tx = await Hub.exitPosition(destination, sharesToWithdraw);
  console.log("withdrawn");
  await tx.wait();
  console.log(tx);

  return tx.hash;
}

export default withdrawFromMoonbeam;
