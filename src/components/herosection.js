import React from "react";
import Matic from "../assets/MATIC.png";
import Avax from "../assets/AVAX.png";
import Ftm from "../assets/FTM.png";
import Arb from "../assets/ARB.png";
import Bnb from "../assets/BNB.png";

export default function HeroSection({ onEnterApp }) {
  return (
    <div className="flex h-[92vh] flex-col font-syne text-gray-200 justify-center">
      <div className="flex flex-row justify-center gap-3 ">
        <div className="hover:bg-gray-100/20 drop-shadow-sm border border-gray-100/20 hover:drop-shadow-md bg-gray-100/10 p-1.5 rounded-lg">
          <img
            alt="avax"
            src={Avax}
            className="h-11 w-11 pointer-events-none "
          />
        </div>
        <div className="hover:bg-gray-100/20 drop-shadow-sm border border-gray-100/20 hover:drop-shadow-md bg-gray-100/10 p-1.5 rounded-lg">
          <img
            alt="matic"
            src={Matic}
            className="h-11 w-11  pointer-events-none "
          />
        </div>
        <div className="hover:bg-gray-100/20 drop-shadow-sm border border-gray-100/20 hover:drop-shadow-md bg-gray-100/10 p-1.5 rounded-lg">
          <img
            alt="arb"
            src={Arb}
            className="h-11 w-11  pointer-events-none "
          />
        </div>
        <div className="hover:bg-gray-100/20 drop-shadow-sm border border-gray-100/20 hover:drop-shadow-md bg-gray-100/10 p-1.5 rounded-lg">
          <img
            alt="ftm"
            src={Ftm}
            className="h-11 w-11  pointer-events-none "
          />
        </div>
        <div className="hover:bg-gray-100/20 drop-shadow-sm border border-gray-100/20 hover:drop-shadow-md bg-gray-100/10 p-1.5 rounded-lg">
          <img
            alt="bnb"
            src={Bnb}
            className="h-11 w-11  pointer-events-none "
          />
        </div>
      </div>
      <div className="text-gray-300 m-8 mt-2 mb-2  font-extrabold text-[46px] text-center">
        Deposit USDC from 5+ chains to earn juicy yield on{" "}
        <p className=" text-[52px] font-syne bg-gradient-to-r from-pink-600 to-violet-700 bg-clip-text text-transparent ">
          Mooonbeam
        </p>
      </div>

      <div className="flex mt-4 font-space font-medium justify-center">
        <button
          onClick={onEnterApp}
          className="bg-gradient-to-r from-pink-500 to-pink-600 p-3 px-5 rounded-lg text-xl"
        >
          Launch App
        </button>
      </div>
    </div>
  );
}
