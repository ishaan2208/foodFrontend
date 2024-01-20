import React from "react";
import pic from "../assets/pic3.png";

export default function Contact() {
  return (
    <div className=" min-h-screen bg-gradient-to-tr from-black to-slate-900 flex flex-col justify-start items-center pt-12">
      <img src={pic} alt="" className=" size-96" />
      <h1 className=" text-center text-white text-2xl">Working on this page</h1>
    </div>
  );
}
