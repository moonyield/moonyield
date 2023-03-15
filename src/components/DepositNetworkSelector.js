import React, { useState, useEffect, useRef } from "react";

const NetworkSelector = ({ selectedNetwork, setSelectedNetwork, networks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // remove event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref} className="relative inline-block text-left z-40">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md ring-1 ring-slate-500 px-3 py-2.5 bg-gray-800/40 hover:bg-gray-800/80 text-l leading-5 font-medium text-gray-300 outline-none transition duration-150 ease-in-out"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex flex-row ml-2 mr-2">
              <p>{selectedNetwork.name}</p>
            </div>
          </button>
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg animate-in fade-in animate-out fade-out duration-500 ">
          <div className="rounded-md bg-gray-800 ">
            <div className="py-0 rounded-md">
              {networks.map((network) => (
                <button
                  type="button"
                  className="block w-full text-center px-4 py-2 text-sm leading-5 rounded-md text-gray-200 hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                  onClick={() =>
                    setSelectedNetwork(network) || setIsOpen(false)
                  }
                >
                  {network.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetworkSelector;
