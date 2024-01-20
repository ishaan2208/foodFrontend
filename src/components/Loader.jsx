import React from "react";
import gif from "../assets/gif2.gif";

export default function Loader() {
  return (
    <div className=" min-h-screen flex justify-center items-center bg-black">
      <img src={gif} alt="" className=" size-96" />
    </div>
  );
}
