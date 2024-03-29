import React, { useState } from "react";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import Main from "./components/main";
import { useRef } from "react";
import Banner from "./components/Banner";

const App = () => {
  const scrollToRef = useRef();
  const [showApp, setShowApp] = useState(false);

  const handleEnterApp = () => {
    setShowApp(true);
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="font-space flex flex-col relative w-[100%] isolate bg-black">
      <Banner />
      <svg
        className="absolute -inset-1 -z-10 h-full w-full stroke-gray-200/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>

      <div
        style={{ border: "1px solid red" }}
        className="absolute inset-x-0 top-[25vh] -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.3759rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E935C1" />
              <stop offset={1} stopColor="#9089FC" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="h-[100vh]">
        <Header />
        <div>
          <HeroSection onEnterApp={handleEnterApp} />
        </div>
      </div>
      <div
        ref={scrollToRef}
        className="flex relative isolate overflow-hidden h-[100vh] justify-center items-center"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="absolute blur-3xl opacity-40 top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={450}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.55"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <Main id="main-section" />
      </div>
    </div>
  );
};

export default App;
