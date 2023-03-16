import React from "react";

export default function HeroSection({ onEnterApp }) {
  return (
    <div className="flex h-[92vh] flex-col font-syne text-gray-200 justify-center">
      <div className="text-gray-300 m-8 mb-2  font-extrabold text-[46px] text-center">
        Deposit USDC from 5+ chains to earn juicy yield on{" "}
        <p className=" text-[52px] font-syne bg-gradient-to-r from-pink-600 to-violet-700 bg-clip-text text-transparent ">
          Mooonbeam
        </p>
      </div>

      <div className="flex mt-8 font-space font-medium justify-center">
        <button
          onClick={onEnterApp}
          className=" bg-purple-600 p-3 px-5 rounded-lg text-xl"
        >
          Enter App
        </button>
      </div>
    </div>
  );
}