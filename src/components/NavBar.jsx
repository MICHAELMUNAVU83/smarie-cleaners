import React, { useState } from "react";
import logo from "../images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="py-4 md:w-[80%] mx-auto flex justify-between items-center">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer object-cover md:px-0 px-2 h-[40px] md:h-[70px]"
        />

        <div className="md:flex hidden justify-center items-center gap-4">
          <a
            href="#home"
            className="text-[#5FBED6] cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 "
          >
            Home
          </a>
          <a
            href="#howwework"
            className="cursor-pointer hover:text-[#5FBED6] hover:scale-105 transition-all ease-in-out duration-500"
          >
            How we Work
          </a>
          <a
            href="#services"
            className="cursor-pointer  hover:text-[#5FBED6] hover:scale-105 transition-all ease-in-out duration-500"
          >
            Our Services
          </a>
          <a
            href="#packages"
            className="cursor-pointer  hover:text-[#5FBED6] hover:scale-105 transition-all ease-in-out duration-500"
          >
            Our Packages
          </a>
          <a
            rel="noreferrer"
            href="tel:0790995133"
            className="cursor-pointer  hover:text-[#5FBED6] hover:scale-105 transition-all ease-in-out duration-500"
          >
            Call In
          </a>
        </div>
        <div className="sm:hidden px-4 md:px-0 block ">
          {!nav && (
            <AiOutlineMenu
              className="text-2xl text-[#5FBED6]"
              onClick={handleNav}
            />
          )}
        </div>
        <div
          className={
            nav
              ? "fixed w-[100%] flex z-20  flex-col  justify-center  text-white  top-0 py-12 bg-[#5FBED6]/80 transition  ease-in-out duration-500"
              : "fixed left-[-100%] h-[20%] -top-[100%] p-10 ease-in-out transition  duration-500"
          }
          onClick={handleNav}
        >
          <div className="flex justify-end p-4 items-center">
            <AiOutlineClose
              className="text-2xl text-white"
              onClick={handleNav}
            />
          </div>
          <ul onClick={handleNav} className="flex flex-col items-center gap-4">
            <a href="#home" className="p-4  hover:text-gray-500">
              <li>Home</li>
            </a>
            <a href="#howwework" className="p-4  hover:text-gray-500">
              <li>How We Work</li>
            </a>
            <a href="#services" className="p-4  hover:text-gray-500">
              <li>Our Services</li>
            </a>
            <a href="#packages" className="p-4  hover:text-gray-500">
              <li>Our Packages</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
