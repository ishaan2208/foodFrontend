import React from "react";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

const OrderCard = ({ order }) => {
  return (
    <div className=" rounded-lg bg-slate-500  border-slate-400/30  border-[0.7px] cursor-pointer hover:scale-[1.02] hover:shadow-black hover:shadow-lg bg-opacity-10 duration-300 my-2 flex flex-col px-2 py-2 ">
      <div className=" flex flex-col lg:flex-row justify-between h-full w-full p-4 ">
        <div>
          <h3 className="  text-slate-400 font-extraligh">Date</h3>
          <h2 className=" mb-4 font-bold ">
            {format(order.createdAt, "do MMM yyyy K:mm aaa")}
          </h2>
        </div>

        <div>
          {" "}
          <h3 className=" font-extralight text-slate-400  ">Order Id :</h3>
          <h2 className=" font-bold mb-4">{order._id}</h2>
        </div>
      </div>

      <div className=" p-4 border-b-[1px] border-slate-400/20 h-full">
        {" "}
        <h3 className="  text-slate-400 font-extralight">Order Details</h3>
        <div className=" h-full">
          {order.productsArray.map((prod, index) => {
            return (
              <span className=" pr-2 py-1  font-bold" key={prod.id}>
                {""}
                {prod.name} x {prod.quantity}
                {order.productsArray.length > index + 1 ? "," : ""}
              </span>
            );
          })}
        </div>
      </div>

      <div className=" p-4 flex justify-between items-center">
        <h1 className=" text-xl font-extrabold">Total</h1>
        <h1 className=" text-xl font-extrabold">
          ₹{" "}
          {order.productsArray.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </h1>
      </div>
    </div>
  );
};

export default OrderCard;
