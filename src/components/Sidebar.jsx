import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { LuMenuSquare } from "react-icons/lu";

const Sidebar = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className="py-2 px-4 bg-transparent text-white rounded hover:scale-105 focus:outline-none"
      >
        <LuMenuSquare size={24} />
      </button>
      <div
        className={`transform top-0 left-0 w-64 bg-gradient-to-tl from-black to-slate-900 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-end w-full h-14 p-6">
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              <IoMdClose size={24} />
            </button>
          </div>
          <div className=" px-4 w-full">
            <Link to="/">
              <h1 className="text-white text-2xl font-extrabold italic mb-8 px-4">
                Zwigato
              </h1>
            </Link>
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800/20 hover:text-white w-full font-bold ${
                    isActive ? "bg-blue-800/30 text-white" : ""
                  }}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
