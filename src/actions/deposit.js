import { Contract, BigNumber, utils } from "ethers";
import IERC20 from "../abi/erc20.json";
import RemoteDispatchABI from "../abi/remote-dispatch";

const contracts = {
  axlUSDC: "0xfab550568c688d5d8a52c7d794cb93edc26ec0ec",
  remoteDispatch: "0x2d1e57cd409Bd69F22fbEC690CE53739b39ff1E4",
};

async function depositOnRemote(signer, amount, toaster) {
  console.log("depositing");
  const user = signer._address;
  const axlUSDC = new Contract(contracts.axlUSDC, IERC20, signer);
  const RemoteDispatch = new Contract(
    contracts.remoteDispatch,
    RemoteDispatchABI,
    signer
  );

  const amountToDeposit = utils.parseUnits(String(amount), 6);

  const usdcBalance = await axlUSDC.balanceOf(user);
  if (usdcBalance.lt(amountToDeposit)) {
    toaster(
      `Not enough axlUSDC balance. You have ${usdcBalance
        .div(1e6)
        .toString()} axlUSDC.`
    );
    throw Error("NOT ENOUGH axlUSDC");
  }

  await axlUSDC
    .approve(RemoteDispatch.address, amountToDeposit)
    .then((tx) => tx.wait());
  console.log("approved.");

  console.log("depositing...");
  const tx = await RemoteDispatch.deposit(amountToDeposit, {
    value: utils.parseEther("0.05"),
  });

  console.log("deposited");
  console.log(tx);

  return tx.hash;
}

export default depositOnRemote;
