import React, { useState } from "react";
import { FaArrowsAltV } from "react-icons/fa";

const State = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <div className="m-5">
        <h1 className="font-semibold text-xl">
          {state ? "Mat Jao!" : "Bahar Jao!!"}
        </h1>
        <button
          onClick={() => setState(!state)}
          className="p-2 px-4 mt-5 bg-sky-500 rounded-full"
        >
          Change
        </button>
      </div>
      <div className="m-5 relative w-60">
        <div className="bg-zinc-300 h-40 w-60 overflow-hidden rounded-md">
            <img className={`${state ? "-translate-y-[0%]" :" -translate-y-[100%]"} ease-in-out transition-transform duration-500`} src="https://images.pexels.com/photos/20539973/pexels-photo-20539973/free-photo-of-center-of-attention.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
            <img className={`${state ? "-translate-y-[0%]" :" -translate-y-[100%]"} ease-in-out transition-transform duration-500`} src="https://images.pexels.com/photos/20540478/pexels-photo-20540478/free-photo-of-the-sydney-harbour-bridge-is-lit-up-in-rainbow-colors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        </div>
        <div className="absolute bg-zinc-300 h-10 w-10 rounded-full opacity-[.7]  top-[65%] left-[35%] flex justify-center items-center" >
        <FaArrowsAltV onClick={() => setState(!state)}  className="text-xl cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default State;
// nothing done here