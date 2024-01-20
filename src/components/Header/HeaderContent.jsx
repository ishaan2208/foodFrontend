import React from 'react'

export default function HeaderContent() {
  return (
    <div className=" flex flex-col md:flex-row justify-evenly min-h-[50vh] text-white items-center">
      <div className="flex flex-col min-h-full md:w-1/2 items-center justify-center h-full w-auto">
        <h1 className=" text-wrap p-10 text-3xl text-center">
          "Savor the Moment, Delivered to Your Doorstep "
        </h1>
        <p className=" text-sm pb-12 px-24 hidden lg:inline-block">
          Welcome to Zwigato, where convenience meets culinary delight! Elevate
          your dining experience with our seamless food delivery service. Browse
          through a diverse array of cuisines, from local favorites to global
          gems, and have your favorite dishes delivered right to your doorstep.
        </p>
        <button className=" border-white border-2 px-12 py-6 rounded-3xl">
          Order Now
        </button>
      </div>
      <div className=" min-h-full md:w-1/2">
        <img src="src/assets/pic1.png" alt="" />
      </div>
    </div>
  );
}
