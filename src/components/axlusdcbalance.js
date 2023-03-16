import { Contract, utils } from "ethers";
import IERC20 from "../abi/erc20.json";
import { useState, useEffect } from "react";
import { useSigner } from "wagmi";

const contracts = {
  axlUSDC: "0xfab550568c688d5d8a52c7d794cb93edc26ec0ec",
};

const UsdcBalance = () => {
  const { data: signer } = useSigner();
  const [axlUSDCBalance, setAxlUSDCBalance] = useState("");

  const user = signer._address;

  return (
    <div className="text-gray-200">
      <h1>UsdcBalance</h1>
    </div>
  );
};

export default UsdcBalance;
