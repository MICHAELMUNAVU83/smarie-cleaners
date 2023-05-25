import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
const TopNavBar = () => {
  return (
    <div className="bg-[#5FBED6] ">
      <div className="w-[80%] py-2 mx-auto flex justify-between">
        <div className="flex justify-center gap-4 items-center">
          <div className="flex justify-center items-center gap-1">
            <CiLocationOn className="text-white " />
            <p className="text-white text-sm">Nairobi, Kenya</p>
          </div>

          <div className="flex justify-center items-center gap-1">
            <IoMdCall className="text-white " />
            <p className="text-white text-sm">+254 712 345 678</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <AiFillInstagram className="text-white text-xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-500" />
          <IoLogoWhatsapp className="text-white text-xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-500" />
          <FaFacebookF className="text-white text-xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-500" />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
