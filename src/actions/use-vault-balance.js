import { useState, useEffect } from "react";
import { moonbeam } from "wagmi/chains";
import { getDefaultProvider, Contract, BigNumber } from "ethers";
import VaultABI from "../abi/vault.json";

const VAULT = "0x9961CDF83F4Aa5805E933b94872ecD6f4a3CeCa7";
const provider = getDefaultProvider(moonbeam.rpcUrls.default.http[0]);
const vault = new Contract(VAULT, VaultABI, provider);

function useVaultBalance(address) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchBalance() {
      const userBalance = await vault.balanceOf(address);
      const pricePerShare = await vault.getPricePerFullShare();
      const final = userBalance
        .mul(pricePerShare)
        .div(BigNumber.from(10).pow(18));
      setBalance(final.toNumber() / 1e6);
    }

    fetchBalance();
  }, [address]);

  return balance;
}

export default useVaultBalance;
