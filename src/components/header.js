import React from "react";
import { ConnectKitButton } from "connectkit";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 left-0 w-full z-50 bg-transparent">
      <div className="bg-transparent flex text-gray-200 relative m-4">
        <div>
          <div className="grow">
            <img alt="avax" src={Logo} className="h-12" />
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
                    {isConnected ? (
                      ensName ??
                      address.slice(0, 6) + "..." + address.slice(38, 42)
                    ) : (
                      <div className="flex flex-row gap-3">
                        <span>Connect Wallet</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5 mt-0.5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                          />
                        </svg>
                      </div>
                    )}
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
