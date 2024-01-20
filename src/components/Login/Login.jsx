import React, { useEffect } from "react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../store/auth.slice";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDataSubmit = (data) => {
    console.log(data);

    axios
      .post("/api/v1/users/login", data)
      .then((res) => {
        axios
          .get("/api/v1/users/me")
          .then((res) => {
            console.log(res.data.data);
            console.log(res.data);
            if (res.data.data) {
              dispatch(
                login({
                  email: res.data.data.email,
                  name: res.data.data.name,
                  _id: res.data.data._id,
                })
              );
              navigate("/");
            }
          })
          .catch((errors) => {
            console.log("heres");
            console.log(errors);
          });
      })
      .catch((err) => {
        setError("email", {
          type: "manual",
          message: "Invalid email or password",
        });
      });
    // // dispatch(login(data));
    // navigate("/");
    // localStorage.setItem("auth", JSON.stringify(data));
  };

  return (
    <form
      className=" w-2/3 lg:w-3/4 my-24 lg:border-slate-100/10 lg:border-[1px]  py-24 rounded-xl lg:bg-slate-600/10 lg:px-12 xl:px-24"
      onSubmit={handleSubmit(onDataSubmit)}
    >
      <Input
        type="email"
        label="Email"
        className=" border-b-[1px] border-slate-800 w-full  py-1 px-2 text-start"
        error={errors.email}
        {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        })}
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
      <button
        className=" bg-slate-700/70 text-white rounded-xl py-2 px-6 mt-2 hover:bg-slate-600 duration-200"
        type="submit"
      >
        Log In
      </button>
      <div className=" mt-4 text-slate-400">
        <p>Don't have an account?</p>
        <NavLink to={"/auth/signup"}>
          {" "}
          <p className=" text-slate-300">Sign Up</p>
        </NavLink>
      </div>
    </form>
  );
}
