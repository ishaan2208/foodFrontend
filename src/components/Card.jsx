import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cart.slice";
import toast from "react-hot-toast";

export default function Card({ obj }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const cartItem = useSelector((state) => state.cart.cartItems);
  const index = cart.findIndex((item) => item.id === obj._id);
  // console.log(cart);
  // console.log(index);

  const handleAddSubmit = () => {
    dispatch(
      addItem({
        id: obj._id,
        name: obj.name,
        price: obj.price,
        quantity: 1,
      })
    );

    toast.success("Item Added to Cart");
  };

  const handleSubSubmit = () => {
    console.log(obj._id);
    dispatch(removeItem(obj._id));
    toast.error("Item Removed from Cart");
  };

  return (
    <div className=" m-10">
      <div className=" rounded-lg bg-slate-400  border-slate-500/20  border-[0.5px] cursor-pointer hover:scale-[1.03] hover:shadow-black shadow-slate-950 hover:shadow-xl bg-opacity-10 duration-300 shadow-lg">
        <img
          src={obj.imageUrl}
          alt=""
          className=" w-60 h-48 rounded-lg rounded-b"
        />
        <div className=" px-4 pt-12 pb-8">
          <h1 className=" text-white text-md text-wrap">Name : {obj.name}</h1>
          <h1 className=" text-white text-lg mb-6">Price: ₹{obj.price}</h1>
          <div className=" w-full flex items-center justify-center">
            {cartItem.includes(obj.name) ? (
              <>
                <div className=" flex justify-center items-center mt-3">
                  <button
                    className=" bg-red-500 size-8 rounded-lg text-2xl text-white m-2 hover:bg-red-700 duration-300"
                    onClick={handleSubSubmit}
                  >
                    -
                  </button>
                  <h1 className=" text-white font-bold mx-2">
                    {cart[index]["quantity"]}
                  </h1>
                  <button
                    className=" bg-green-500 size-8 rounded-lg text-2xl text-white m-2
                     hover:bg-green-700 duration-300"
                    onClick={handleAddSubmit}
                  >
                    +
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  className=" px-3 py-2 bg-blue-600 rounded-lg mt-6 text-center text-white hover:bg-blue-800 duration-300"
                  onClick={handleAddSubmit}
                >
                  Add to Cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
