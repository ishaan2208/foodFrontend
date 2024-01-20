import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, emptyCart, removeItem } from "../store/cart.slice";
import toast from "react-hot-toast";
import pic from "../assets/pic4.png";
import axios from "axios";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const auth = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.user.token);
  console.log(auth);
  let userId = "";
  if (auth) {
    userId = useSelector((state) => state.auth.user._id);
  }
  // console.log(cart);
  // console.log(userId);
  const dispatch = useDispatch();
  const handleadd = (item) => {
    dispatch(
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
      })
    );
    // toast.success("Item Added to Cart");
  };

  const handleminus = (item) => {
    dispatch(removeItem(item.id));
    // toast.success("Item Removed from Cart");
  };

  const checkout = () => {
    if (cart.length === 0) {
      toast.error("Cart is Empty");
      return;
    }
    if (!auth) {
      toast.error("Please Login to Continue");
      return;
    }
    axios
      .post("/api/v1/orders", {
        productsArray: cart,
        token,
      })
      .then((res) => {
        console.log(res.data.data);
        toast.success("Order Placed Successfully");
        dispatch(emptyCart());
      });
  };

  return (
    <div className=" min-h-screen bg-gradient-to-tr from-black to-slate-900 flex justify-evenly items-center pt-12">
      <div className=" hidden lg:inline-block">
        <img src={pic} alt="" className=" size-72" />
      </div>
      {cart.length === 0 ? (
        <>
          {" "}
          <h1 className=" text-4xl text-white mb-12">Cart is Empty</h1>
        </>
      ) : (
        <>
          <div className=" min-h-96 flex flex-col justify-between bg-slate-800/30 p-6 rounded-xl border-2 border-slate-700/50 mb-10">
            {" "}
            <table className=" text-white">
              <thead className=" mt-12 border-b-[1px] border-slate-700/70 mb-10">
                <tr className=" pt-10">
                  <th className=" px-2 md:px-10 py-5">Item</th>
                  <th className=" px-2 md:px-10 ">Quantity</th>
                  <th className=" px-2 md:px-10">Price</th>
                  <th className="px-4 md:px-10">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className=" ">
                    <td className=" text-center pt-6">{item.name}</td>
                    <td className=" text-center flex justify-around items-center pt-6">
                      <button
                        className=" bg-red-500 size-8 m-2 rounded-lg hover:bg-red-600 duration-100"
                        onClick={() => handleminus(item)}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className=" bg-green-500 size-8 m-2 rounded-lg hover:bg-green-600 duration-100"
                        onClick={() => handleadd(item)}
                      >
                        +
                      </button>
                    </td>
                    <td className=" text-center text-slate-200 pt-6">
                      ₹ {item.price}
                    </td>
                    <td className=" text-center pt-6 font-bold">
                      ₹ {item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=" my-10 flex justify-between text-white border-t-[1px] border-slate-400/50  border-b-[1px] py-4">
              <h1 className=" pl-6 text-xl font-extrabold">Total:</h1>
              <h1 className=" pr-6 text-xl font-extrabold ">
                ₹{" "}
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </h1>
            </div>
            <div className=" flex justify-center items-baseline">
              <button
                className=" bg-indigo-500 px-6 py-3 rounded-lg text-white font-semibolds hover:bg-indigo-700 duration-200"
                onClick={checkout}
              >
                Proceed To Payment
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
