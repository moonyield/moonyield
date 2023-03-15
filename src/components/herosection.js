import React from "react";
// import Matic from "../assets/MATIC.png";
// import Avax from "../assets/AVAX.png";
// import Ftm from "../assets/FTM.png";
// import Arb from "../assets/ARB.png";
// import Bnb from "../assets/BNB.png";
export default function HeroSection() {
  return (
    <div className="flex flex-col font-space text-gray-200">
      <div className="text-gray-300 m-8 mt-16 font-extrabold text-[46px] text-center">
        Deposit USDC from 5+ chains to earn yield on{" "}
        <p className="inline-block italic bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent ">
          Mooonbeam
        </p>
      </div>
      {/* <div className="flex flex-row justify-center gap-3">
        <div className="hover:bg-gray-800/80 drop-shadow-sm opacity-50 ring-1 ring-slate-100/30 hover:drop-shadow-md bg-gray-800/40 p-1.5 rounded-lg">
          <img alt="avax" src={Avax} className="h-8 w-8 " />
        </div>

        <div className="hover:bg-gray-800/80 drop-shadow-sm opacity-50 ring-1 ring-slate-100/30 hover:drop-shadow-md bg-gray-800/40 p-1.5 rounded-lg">
          <img alt="matic" src={Matic} className="h-8 w-8 " />
        </div>

        <div className="hover:bg-gray-800/80 drop-shadow-sm opacity-50 ring-1 ring-slate-100/30 hover:drop-shadow-md bg-gray-800/40 p-1.5 rounded-lg">
          <img alt="ftm" src={Ftm} className="h-8 w-8 " />
        </div>

        <div className="hover:bg-gray-800/80 drop-shadow-sm opacity-50 ring-1 ring-slate-100/30 hover:drop-shadow-md bg-gray-800/40 p-1.5 rounded-lg">
          <img alt="arb" src={Arb} className="h-8 w-8 " />
        </div>

        <div className="hover:bg-gray-800/80 drop-shadow-sm opacity-50 ring-1 ring-slate-100/30 hover:drop-shadow-md bg-gray-800/40 p-1.5 rounded-lg">
          <img alt="bnb" src={Bnb} className="h-8 w-8 " />
        </div>
      </div> */}
    </div>
  );
}
