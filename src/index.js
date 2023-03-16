import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import { WagmiConfig, createClient } from "wagmi";

import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { avalanche, moonbeam, polygon, arbitrum } from "wagmi/chains";

// const chains = [avalanche, polygon, arbitrum, fantom, moonbeam];
const chains = [avalanche, moonbeam, polygon, arbitrum];
const client = createClient(
  getDefaultClient({
    appName: "moonyield",
    chains,
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <WagmiConfig client={client}>
      <ConnectKitProvider
        theme="midnight"
        customTheme={{
          "--ck-font-family": '"sans", "Space Grotesk", "light"',
        }}
      >
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </ChakraProvider>
);
