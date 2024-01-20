import React, { useEffect, useState } from "react";
import Input from "../Input";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth.slice";
import axios from "axios";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDataSubmit = (data) => {
    const data1 = {
      email: getValues("email"),
      password: getValues("password"),
      name: getValues("name"),
    };
    axios
      .post("/api/v1/users/signup", data1)
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        navigate("/auth/login");
      });
    // dispatch(login(data1));
    // localStorage.setItem("auth", JSON.stringify(data1));
    // navigate("/");
  };
  return (
    <>
      <form
        action=""
        className=" w-2/3 lg:w-3/4 my-24 lg:border-slate-100/10 lg:border-[1px]  py-5 rounded-xl lg:bg-slate-600/10 lg:px-12 xl:px-24"
        onSubmit={handleSubmit(onDataSubmit)}
      >
        <Input
          type="text"
          label="Name"
          className=" border-b-[1px] border-slate-800 w-full  py-1 px-2 text-start"
          {...register("name", { required: true })}
        />

        <Input
          type="email"
          label="Email"
          className=" border-b-[1px] border-slate-800 w-full  py-1 px-2 text-start"
          error={errors.email}
          {...register("email", { required: true })}
        />
        <Input
          type="password"
          label="Password"
          className=" border-b-[1px] border-slate-800 w-full  py-1 px-2 text-start"
          error={errors.password}
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        <Input
          type="password"
          label="Confirm Password"
          className=" border-b-[1px] border-slate-800 w-full  py-1 px-2 text-start"
          error={errors.confirmPassword}
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === getValues("password") || "The passwords do not match",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        <button
          className=" bg-slate-700/70 text-white rounded-xl py-2 px-6 mt-2 hover:bg-slate-600 duration-200"
          type="submit"
        >
          Sign Up
        </button>
        <div className=" mt-6 text-slate-400">
          <p>Already have an account?</p>
          <NavLink to={"/auth/login"}>
            {" "}
            <p className=" text-slate-300">Log In</p>
          </NavLink>
        </div>
      </form>
    </>
  );
}
