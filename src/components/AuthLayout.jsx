import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/auth.slice";
import Loader from "./Loader";
import axios from "axios";

export default function AuthLayout({ authstatus = false, children }) {
  const auth = localStorage.getItem("auth");
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://foodbackend1.onrender.com/api/v1/users/me")
      .then((res) => {
        console.log(res.data.data);
        dispatch(
          login({
            email: res.data.data.email,
            name: res.data.data.name,
            _id: res.data.data._id,
          })
        );
      });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return loader ? <Loader /> : <div>{children}</div>;
}
