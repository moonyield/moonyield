import { Contract, utils } from "ethers";
import IERC20 from "../abi/erc20.json";
import RemoteDispatchABI from "../abi/remote-dispatch";

const contracts = {
  43114: {
    axlUSDC: "0xfab550568c688d5d8a52c7d794cb93edc26ec0ec",
    remoteDispatch: "0x2d1e57cd409Bd69F22fbEC690CE53739b39ff1E4",
  },
  137: {
    axlUSDC: "0x750e4C4984a9e0f12978eA6742Bc1c5D248f40ed",
    remoteDispatch: "0x84de1D32667d05833fb135535C8f8e79aF859549",
  },
  42161: {
    axlUSDC: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
    remoteDispatch: "0x87A10BF4620667a985AD60261260082e8dD948E5",
  },
};

async function depositOnRemote(signer, amount, newBanner, chainID) {
  console.log("depositing on", chainID);
  const user = signer._address;
  const axlUSDC = new Contract(contracts[chainID].axlUSDC, IERC20, signer);
  const RemoteDispatch = new Contract(
    contracts[chainID].remoteDispatch,
    RemoteDispatchABI,
    signer
  );

  const amountToDeposit = utils.parseUnits(String(amount), 6);

  const usdcBalance = await axlUSDC.balanceOf(user);
  if (usdcBalance.lt(amountToDeposit)) {
    newBanner({
      message: `Not enough axlUSDC balance. You have ${usdcBalance
        .div(1e6)
        .toString()} axlUSDC.`,
      status: "error",
    });
    throw Error("NOT ENOUGH axlUSDC");
  }

  // await axlUSDC
  //   .approve(RemoteDispatch.address, amountToDeposit)
  //   .then((tx) => tx.wait());
  // console.log("approved.");

  const gasToPay = {
    43114: "0.05",
    137: "0.3",
    42161: "0.00015",
  };

  console.log("depositing...");
  const tx = await RemoteDispatch.deposit(amountToDeposit, {
    value: utils.parseEther(gasToPay[chainID]),
  });

  console.log("deposited");
  console.log(tx);

  return tx.hash;
}

export default depositOnRemote;
