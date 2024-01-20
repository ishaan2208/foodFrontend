import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./LandingPage.css";
import "../components/Header/Header.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function LandingPage({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://foodbackend1.onrender.com/api/v1/products")
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <div className=" flex flex-col md:flex-row justify-evenly min-h-[50vh] text-white items-center fade-out ">
        <div className="flex flex-col min-h-full md:w-1/2 items-center justify-center h-full w-auto">
          <h1 className=" text-wrap p-10 text-3xl text-center">
            "Savor the Moment, Delivered to Your Doorstep "
          </h1>
          <p className=" text-sm pb-12 px-24 hidden lg:inline-block">
            Welcome to Zwigato, where convenience meets culinary delight!
            Elevate your dining experience with our seamless food delivery
            service. Browse through a diverse array of cuisines, from local
            favorites to global gems, and have your favorite dishes delivered
            right to your doorstep.
          </p>
          <button className=" border-white border-2 px-6 py-3 rounded-3xl hover:scale-125 duration-500">
            <NavLink to="/menu">Order Now</NavLink>
          </button>
        </div>
        <div className=" min-h-full md:w-1/2">
          <img src="src/assets/pic1.png" alt="" className=" animate-spin-2 " />
        </div>
      </div>
      <div className=" w-full min-h-screen xl:flex flex-col items-center text-white justify-center bg-gradient-to-b from-black to-slate-900 hidden ">
        <h1 className=" text-3xl text-center my-24 px-12">
          Quell Your Hunger Pangs from a wide range of options available
        </h1>
        <div className=" flex flex-wrap items-center justify-center px-6  ">
          {products.slice(5, 10).map((item, index) => (
            <div
              className=" bg-slate-700 h-12 lg:h-36 w-24 lg:w-48 px-6 py-4 rounded-lg lg:rounded-xl bg-opacity-50 border-slate-600 border-[1px] m-8 flex flex-col justify-center items-center move-left"
              key={index}
            >
              <div className=" size-12 mb-6">
                <img
                  src={item.imageUrl}
                  alt=""
                  className=" h-12 w-12  rounded-[100%]"
                />
              </div>
              <h1 className=" lg:font-bold lg:text-md text-nowrap text-center">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
        <div className=" flex flex-wrap items-center justify-center px-6  ">
          {products.slice(0, 5).map((item, index) => (
            <div
              className=" bg-slate-700 h-12 lg:h-36 w-24 lg:w-48 px-6 py-4 rounded-lg lg:rounded-xl bg-opacity-50 border-slate-600 border-[1px] m-8 flex flex-col justify-center items-center move-right"
              key={index}
            >
              <div className=" size-12 mb-6">
                <img
                  src={item.imageUrl}
                  alt=""
                  className=" h-12 w-12  rounded-[100%]"
                />
              </div>
              <h1 className=" lg:font-bold lg:text-md text-nowrap text-center">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full min-h-screen flex flex-col items-center text-white justify-center bg-gradient-to-b from-black to-slate-900 xl:hidden fade-in ">
        <h1 className=" text-3xl text-center mt-24 px-12 mb-48">
          Quell Your Hunger Pangs from a wide range of options available
        </h1>
        <div className=" flex flex-wrap items-center justify-center px-6  ">
          {products.slice(0, 3).map((item, index) => (
            <div
              className=" bg-slate-700 h-24 px-6 py-4  w-48 rounded-lg lg:rounded-xl bg-opacity-50 border-slate-600 border-[1px] m-8 flex flex-col justify-center items-center"
              key={index}
            >
              <div className=" size-8 mb-4 ">
                <img
                  src={item.imageUrl}
                  alt=""
                  className=" h-7 w-7  rounded-[100%]"
                />
              </div>
              <h1 className=" lg:font-bold lg:text-md text-nowrap text-center">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
        <div className=" flex flex-wrap items-center justify-center px-6  ">
          {products.slice(3, 6).map((item, index) => (
            <div
              className=" bg-slate-700 h-24 px-6 py-4  w-48 rounded-lg lg:rounded-xl bg-opacity-50 border-slate-600 border-[1px] m-8 flex flex-col justify-center items-center"
              key={index}
            >
              <div className=" size-8 ">
                <img
                  src={item.imageUrl}
                  alt=""
                  className=" h-6 w-6  rounded-[100%]"
                />
              </div>
              <h1 className=" lg:font-bold lg:text-md text-nowrap text-center">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className=" min-h-screen bg-gradient-to-b from-slate-900 to-black rounded">
        <div className=" fade-in flex flex-col lg:flex-row justify-center items-center ">
          <div className=" text-white">
            <h1 className=" text-center text-3xl text-wrap px-24">
              Order now to get hot and Delicious food delivered to your doorstep
            </h1>
          </div>
          <div className="">
            <img src="src/assets/pic2.png" alt="" className=" px-12" />
          </div>
        </div>
      </div>
    </>
  );
}
