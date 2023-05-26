import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../images/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col w-[80%] mx-auto py-8">
        <div className="grid md:grid-cols-3   grid-cols-1 w-[100%] md:gap-32 gap-8">
          <div className=" flex flex-col gap-2">
            <a href="#home" className="font-bold">
              <img src={logo} alt="logo" className="h-[50px] object-cover" />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nec erat erat. Integer blandit, nulla quis fermentum hendrerit,
              nisi diam viverra metus, porta semper est ipsum et sapien.
            </p>
          </div>
          <div className=" flex justify-between ">
          <div className=" flex flex-col gap-2">
            <p className="font-bold">Navigation</p>
            <div className="flex text-[#5FBED6] roboto cursor-pointer flex-col gap-2">
              <a
                href="home"
                className="text-[#5FBED6] curs-black transition-all ease-in-out duration-500 "
              >
                Home
              </a>
              <a
                href="#howwework"
                className="cursor-pointer hover:text-black transition-all ease-in-out duration-500"
              >
                How we Work
              </a>
              <a
                href="#services"
                className="cursor-pointer  hover:text-black transition-all ease-in-out duration-500"
              >
                Our Services
              </a>
              <a
                href="#packages"
                className="cursor-pointer  hover:text-black transition-all ease-in-out duration-500"
              >
                Our Packages
              </a>
            </div>
          </div>

          <div className=" flex flex-col gap-2">
            <p className="font-bold">Services</p>
            <div className="flex text-[#5FBED6] roboto cursor-pointer flex-col gap-2">
              <p className="cursor-pointer  hover:text-black transition-all ease-in-out duration-500">
                Maid Service
              </p>
              <p className="cursor-pointer  hover:text-black transition-all ease-in-out duration-500">
                Window Cleaning
              </p>
              <p className="cursor-pointer  hover:text-black transition-all ease-in-out duration-500">
                Office Cleaning
              </p>
              <p className="cursor-pointer  hover:text-black transition-all ease-in-out duration-500">
                Domestic Cleaning
              </p>
            </div>
            </div>
            </div>

          <div className=" flex flex-col gap-2">
            <p className="font-bold">Contact Information</p>
            <div className="flex flex-col  cursor-pointer gap-2">
              <div className="flex gap-2 roboto items-center">
                <MdLocationPin className="text-[#5FBED6]" />
                <p>Nairobi , Kenya</p>
              </div>
              <div className="flex gap-2 items-center">
                <IoIosCall className="text-[#5FBED6]" />
                <p>+254 712 345 678</p>
              </div>
              <div className="flex gap-2 items-center">
                <IoIosCall className="text-[#5FBED6]" />
                <p>+254 712 345 678</p>
              </div>
              <div className="flex gap-2 items-center">
                <IoLogoWhatsapp className="text-[#5FBED6]" />
                <p>+254 712 345 678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#5FBED6]  py-4">
        <div className="w-[80%] mx-auto flex justify-between items-center  md:text-sm text-xs text-white">
          <p >Privacy Policy | Terms of Service | Contact Us</p>
          <p>Smarie © 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
