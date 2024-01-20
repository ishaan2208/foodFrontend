import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth.slice";
import axios from "axios";
import Sidebar from "../Sidebar";

export default function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    axios
      .post("https://foodbackend1.onrender.com/api/v1/users/logout")
      .then((res) => {
        console.log(res.data);
        localStorage.clear();
        dispatch(logout());
      });
  };

  const navItems1 = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Menu",
      path: "menu",
    },
    {
      name: "Cart",
      path: "cart",
    },

    {
      name: "Contact",
      path: "contact",
    },
    {
      name: "Orders",
      path: "orders",
    },
  ];

  const navItems2 = [
    {
      name: "Sign Up",
      path: "auth/signup",
    },
    {
      name: "Log In",
      path: "auth/login",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, [auth.auth]);
  return (
    <div className="flex flex-col  text-white bg-gradient-to-bl from-slate-900 to-black max-w-full">
      <nav className="h-1/4  md:inline-block border-b-[1px] border-slate-900/40 shadow-slate-900 shadow-sm">
        <div className="flex justify-between items-center h-full py-8 px-8 ">
          <div className="md:flex items-center justify-start w-1/2 h-full hidden ">
            <Link to="/">
              <h1 className="text-white text-2xl font-extrabold italic">
                Zwigato
              </h1>
            </Link>
            <ul className="flex text-white ml-12 h-full text-sm font-bold">
              {navItems1.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " scale-125 text-blue-300 font-semibold duration-300"
                        : ""
                    } h-full`
                  }
                >
                  <li
                    key={index}
                    className="mx-2 px-4 py-2 rounded-xl  cursor-pointer"
                  >
                    {item.name}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className=" flex md:hidden">
            <Sidebar navItems={navItems1} />
          </div>
          <div className="flex items-center">
            {auth.auth ? (
              <>
                <button
                  className="mx-2 hover:bg-slate-200 px-4 py-2 rounded-xl hover:text-black  cursor-pointer duration-200 border-white border-[1px] "
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </>
            ) : (
              <ul className="flex text-white">
                {navItems2.map((item, index) => (
                  <NavLink to={item.path} key={index}>
                    <li
                      key={index}
                      className="mx-2 hover:bg-slate-200 px-4 py-2 rounded-xl hover:text-black  cursor-pointer duration-200 border-white border-[1px]"
                    >
                      {item.name}
                    </li>
                  </NavLink>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
      {/* <nav className="h-1/4 md:hidden my-10 pl-4 flex justify-between">
        <div className=" flex items-center justify-start">
          <Link to="/">
            <h1 className="text-white text-lg font-extrabold italic">
              Zwigato
            </h1>
          </Link>
          <NavLink to={"menu"} className="ml-2 text-sm">
            Menu
          </NavLink>
          <NavLink to={"cart"} className="ml-2 text-sm">
            Cart
          </NavLink>
          <NavLink to={"orders"} className="ml-2 text-sm">
            Orders
          </NavLink>
        </div>

        <div className="flex items-center">
          {auth.auth ? (
            <>
              <button
                className="mx-2 hover:bg-slate-200 px-4 py-2 rounded-xl hover:text-black  cursor-pointer duration-200 border-white border-2"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          ) : (
            <ul className="flex text-white">
              {navItems2.map((item, index) => (
                <NavLink to={item.path} key={index}>
                  <li
                    key={index}
                    className="mx-2 hover:bg-slate-200 px-2 py-1 rounded-xl hover:text-black  cursor-pointer duration-200 border-white border-2 text-sm"
                  >
                    {item.name}
                  </li>
                </NavLink>
              ))}
            </ul>
          )}
        </div>
      </nav> */}
    </div>
  );
}
