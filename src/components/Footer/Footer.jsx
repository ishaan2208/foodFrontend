import React from "react";

export default function Footer() {
  return (
    <div className=" bg-slate-900 flex flex-col items-center text-white px-12  shadow-black">
      <div className=" inline-block my-5 border-b-[1px] border-slate-800 w-full text-center pb-4 ">
        <h1 className=" text-xl font-extrabold py-6">&copy; Zwigato 2024 </h1>
      </div>
      <div className=" flex justify-evenly mb-5 w-full py-6">
        <div className=" hidden lg:flex flex-col items-center">
          <h1>About Zwigato</h1>
          <div className=" text-slate-400 mt-6">
            <p>Who we Are</p>
            <p>Work with Us</p>
            <p>Investor Relation</p>
            <p>Blog</p>
            <p>Press Kit</p>
          </div>
        </div>
        <div className=" hidden lg:flex flex-col items-center">
          <h1>Zwigato-Verse</h1>
          <div className=" text-slate-400 mt-6">
            <p>Zwig-Land</p>
            <p>Feeding India</p>
          </div>
        </div>
        <div className=" ">
          <h1>Learn More</h1>
          <div className=" text-slate-400 mt-6">
            <p>About</p>
            <p>Contact</p>
            <p>Copyright</p>
            <p>Privacy</p>
          </div>
        </div>
        <div>
          <h1>Social Links</h1>
          <div className=" text-slate-400 mt-6 cursor-pointer">
            <p>Instagram</p>
            <p>facebook</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
}
