import React from "react";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="py-4 w-[80%] mx-auto flex justify-between items-center">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer object-cover h-[70px]"
        />

        <div className="flex justify-center items-center gap-4">
          <a href="home" className="text-[#5FBED6] cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 ">
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
          <p className="cursor-pointer  hover:text-[#5FBED6] hover:scale-105 transition-all ease-in-out duration-500">
            Call In
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
