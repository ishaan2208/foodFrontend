import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Loader from "../components/Loader";

export default function Menu() {
  const [search, setSearch] = useState();

  const [food, setFood] = useState(true);
  const [beverage, setBeverage] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://foodbackend1.onrender.com/api/v1/products")
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
        console.log(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const unfilteredData = data.filter((item) => {
      if (food && beverage) return true;
      if (food && !beverage) return item.category === "food";
      if (!food && beverage) return item.category === "beverages";
      return false;
    });

    const filteredData = unfilteredData.filter((item) => {
      if (!search) return true;
      return item.name.toLowerCase().includes(search?.trim().toLowerCase());
    });

    setFilteredData(filteredData);
  }, [search, food, beverage, data]);

  return loading ? (
    <>
      <Loader />
    </>
  ) : (
    <div className=" min-h-screen bg-gradient-to-r from-slate-950 to-slate-800">
      <div id="searchbar" className=" flex justify-center w-full pt-24 pb-6 ">
        <div className=" w-1/3 min-w-72 bg-slate-700 rounded-xl flex items-center p-1">
          <div className=" py-2 px-4">
            <FaSearch className=" text-white" />
          </div>

          <input
            type="text"
            className=" w-full  rounded-lg text-white py-2 px-4 bg-gray-700 outline-none "
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* <button className=" bg-blue-700 flex justify-center items-center p-3 rounded-l rounded-lg text-whiteborder-4 hover:bg-blue-800 text-white duration-300 font-semibold">
          Search
        </button> */}
      </div>
      <div className=" flex justify-center w-f\">
        <div className=" w-1/3  min-w-72 py-2 flex justify-center items-center border-[1px] border-white rounded-xl">
          {" "}
          <h1 className=" text-white text-xl hidden lg:block">
            Select Category
          </h1>
          <div className=" px-6 flex items-center ">
            <label htmlFor="f" className=" text-white mr-4">
              Food
            </label>{" "}
            <input
              id="f"
              type="checkbox"
              className=" p-4 size-4"
              checked={food}
              onChange={() => {
                setFood(!food);
              }}
            />
          </div>
          <div className=" px-6 flex items-center ">
            <label htmlFor="b" className=" text-white mr-4">
              Beverage
            </label>{" "}
            <input
              id="b"
              type="checkbox"
              className=" p-4 size-4"
              checked={beverage}
              onChange={() => {
                setBeverage(!beverage);
              }}
            />
          </div>
        </div>
      </div>
      <div
        id="menuItems"
        className=" flex flex-wrap px-2 lg:px-12 py-6 items-center justify-center w-full"
      >
        {filteredData.map((item, index) => (
          <Card obj={item} key={index} />
        ))}
      </div>
    </div>
  );
}
