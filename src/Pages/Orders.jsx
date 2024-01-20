import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard";
import { TiTimes } from "react-icons/ti";
import { useSelector } from "react-redux";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const auth = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.user.token);

  useEffect(() => {
    if (auth) {
      axios
        .post("https://foodbackend1.onrender.com/api/v1/orders/all", {
          token,
        })
        .then((res) => {
          console.log(res.data);
          setOrders(res.data.data);
        });
    }
  }, []);

  return auth ? (
    <div
      className=" min-h-screen bg-gradient-to-tr from-black to-slate-900 text-white flex 
     flex-col items-center h-full w-auto"
    >
      <h1 className=" my-10 text-4xl"> Order History</h1>
      <div className="flex flex-col min-w-72 w-2/5 mb-24">
        {[...orders].reverse().map((order) => {
          return <OrderCard order={order} key={order._id} />;
        })}
      </div>
    </div>
  ) : (
    <>
      <div
        className=" min-h-screen  bg-gradient-to-tr from-black to-slate-900 text-white flex 
     flex-col items-center "
      >
        <h1 className=" text-2xl my-36"> Login to View Order Details</h1>
      </div>
    </>
  );
};

export default Orders;
