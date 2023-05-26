import React from "react";
import { SlCalender } from "react-icons/sl";
import { FiSmartphone } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

const Open = () => {
  const details = [
    {
      id: 1,
      name: "We are open",
      description: "Mon-Sunday: 8:00am -5:00pm",
      icon: <SlCalender />,
      backgroundColor: "#54A4DC",
    },
    {
      id: 2,
      name: "Call us",
      description: "+254 7104 71667",
      icon: <FiSmartphone />,
      backgroundColor: "#FFBF37",
    },
    {
      id: 3,
      name: "Whatsapp us",
      description: "+254 7104 71667",
      icon: <IoLogoWhatsapp />,
      backgroundColor: "#46C6CE",
    },
  ];
  return (
    <div className="my-8">
      <div className="w-[80%] mx-auto  flex   md:flex-row flex-col gap-8">
        {details.map((detail) => (
          <div
            key={detail.id}
            className="flex justify-center h-[200px] md:w-[32%] w-[100%] items-center flex-col gap-2 cursor-pointer rounded-lg hover:scale-105 transition-all ease-in-out duration-500"
            style={{ backgroundColor: detail.backgroundColor }}
          >
            <div className="text-7xl text-white">{detail.icon}</div>
            <div className="text-white roboto font-bold text-xl">
              {detail.name}
            </div>
            <div className="text-white  monts text-sm">
              {detail.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Open;
