import React from "react";
import { ConnectKitButton } from "connectkit";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <div>
      <div className="bg-transparent flex text-gray-200 relative m-4">
        <div>
          <div className="grow">
            <img alt="avax" src={Logo} className="h-10" />
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <ConnectKitButton.Custom>
              {({ isConnected, show, address, ensName }) => {
                return (
                  <button
                    onClick={show}
                    className="absolute bg-transparent hover:drop-shadow-md hover:bg-slate-100/10 right-0 top-0 border border-slate-200 p-2 px-3 rounded-lg"
                  >
                    {isConnected
                      ? ensName ??
                        address.slice(0, 6) + "..." + address.slice(38, 42)
                      : "Connect Wallet"}
                  </button>
                );
              }}
            </ConnectKitButton.Custom>
          </div>
        </div>
      </div>
    </div>
  );
}
