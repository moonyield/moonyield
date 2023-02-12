import React from "react";
import { ConnectKitButton } from "connectkit";
export default function Header() {
  return (
    <div>
      <div className="relative m-4">
        <div className="text-xl font- p-2">Moonyield</div>
        <ConnectKitButton.Custom>
          {({ isConnected, show, address, ensName }) => {
            return (
              <button
                onClick={show}
                className="absolute bg-white hover:drop-shadow-md hover:bg-slate-200 right-0 top-0 border border-black p-2 rounded-lg"
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
  );
}
