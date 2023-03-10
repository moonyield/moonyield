import React from "react";
import Matic from "../assets/MATIC.png";
import Avax from "../assets/AVAX.png";
import Ftm from "../assets/FTM.png";
import Arb from "../assets/ARB.png";
import Bnb from "../assets/BNB.png";
// import { Tooltip } from "@chakra-ui/react";
export default function HeroSection() {
  return (
    <div className="flex flex-col">
      <div className="text-gray-800 m-6 mt-28 font-bold text-4xl text-center">
        Deposit USDC from 5+ chains to earn yield on Moonbeam
      </div>
      <div className="flex flex-row justify-center gap-3 p-3">
        <div className="hover:bg-gray-100 drop-shadow-sm border hover:drop-shadow-md bg-gray-100/80 p-1.5 rounded-lg">
          <img alt="avax" src={Avax} className="h-8 w-8" />
        </div>
        {/* <Tooltip label="Coming Soon!"> */}
        <div className="hover:bg-gray-100 drop-shadow-sm border hover:drop-shadow-md bg-gray-100/80 p-1.5 rounded-lg">
          <img alt="matic" src={Matic} className="h-8 w-8" />
        </div>
        {/* </Tooltip> */}
        {/* <Tooltip label="Coming Soon!"> */}
        <div className="hover:bg-gray-100 drop-shadow-sm border hover:drop-shadow-md bg-gray-100/80 p-1.5 rounded-lg">
          <img alt="ftm" src={Ftm} className="h-8 w-8" />
        </div>
        {/* </Tooltip> */}
        {/* <Tooltip label="Coming Soon!"> */}
        <div className="hover:bg-gray-100 drop-shadow-sm border hover:drop-shadow-md bg-gray-100/80 p-1.5 rounded-lg">
          <img alt="arb" src={Arb} className="h-8 w-8" />
        </div>
        {/* </Tooltip> */}

        {/* <Tooltip label="Coming Soon!"> */}
        <div className="hover:bg-gray-100 drop-shadow-sm border hover:drop-shadow-md bg-gray-100/80 p-1.5 rounded-lg">
          <img alt="bnb" src={Bnb} className="h-8 w-8" />
        </div>
        {/* </Tooltip> */}
      </div>
    </div>
  );
}
