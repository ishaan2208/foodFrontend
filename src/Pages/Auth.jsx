import React from "react";
import Logo from "../assets/pic5.png";

export default function Auth({ type = "Login", children }) {
  return (
    <div className=" text-center text-white min-h-screen bg-gradient-to-tl from-black to-slate-900">
      {/* <h1 className=" text-wrap text-2xl pt-12">
        You just {type}. Ad let us handle rest of work
      </h1> */}
      {/* Parent Container */}
      <div className=" flex justify-between items-center">
        <div className=" w-full lg:w-1/2 flex items-start justify-center">
          {children}
        </div>
        <div
          className={`hidden lg:flex flex-col lg:w-1/2 
          justify-center items-center 
          `}
        >
          <img src={Logo} alt="" className="p-36" />
        </div>
      </div>
    </div>
  );
}
