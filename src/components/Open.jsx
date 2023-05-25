import React from "react";
import { SlCalender } from "react-icons/sl";
import { FiSmartphone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

const Open = () => {
  const details = [
    {
      id: 1,
      name: "We are open",
      description: "Mon-Fri: 08:00 -17:00",
      icon: <SlCalender />,
      backgroundColor: "#54A4DC",
    },
    {
      id: 2,
      name: "Call us",
      description: "+254 712 345 678",
      icon: <FiSmartphone />,
      backgroundColor: "#FFBF37",
    },
    {
      id: 3,
      name: "Order online",
      description: "mail@gmail.com",
      icon: <BsEnvelope />,
      backgroundColor: "#46C6CE",
    },
  ];
  return (
    <div className="my-8">
      <div className="w-[80%] mx-auto grid h-[200px] grid-cols-3 gap-8">
        {details.map((detail) => (
          <div
            key={detail.id}
            className="flex justify-center items-center flex-col gap-2 cursor-pointer rounded-lg hover:scale-105 transition-all ease-in-out duration-500"
            style={{ backgroundColor: detail.backgroundColor }}
          >
            <div className="text-7xl text-white">{detail.icon}</div>
            <div className="text-white font-bold text-xl">{detail.name}</div>
            <div className="text-white text-sm">{detail.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Open;