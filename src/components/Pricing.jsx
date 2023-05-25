import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const Pricing = () => {
  const pricings = [
    {
      id: 1,
      title: "Basic",
      services: ["Cleaning", "Carpet Cleaning", "Cleaning", "Carpet Cleaning"],
      backgroundColor: "#54A4DC",
      price: "100",
    },
    {
      id: 1,
      title: "Standard",
      services: ["Cleaning", "Carpet Cleaning", "Cleaning", "Carpet Cleaning"],
      backgroundColor: "#5FBED6",
      price: "200",
    },
    {
      id: 1,
      title: "Premium",
      services: ["Cleaning", "Carpet Cleaning", "Cleaning", "Carpet Cleaning"],
      backgroundColor: "#46C6CE",
      price: "300",
    },
    {
      id: 1,
      title: "Gold",
      services: ["Cleaning", "Carpet Cleaning", "Cleaning", "Carpet Cleaning"],
      backgroundColor: "#FFBF37",
      price: "200",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">Pricing</h1>
        <p className="text-2xl">We offer a wide range of cleaning services</p>
      </div>

      <div className="w-[80%] my-12 mx-auto grid grid-cols-4 gap-8">
        {pricings.map((pricing) => (
          <div
            key={pricing.id}
            className="flex flex-col border-2 border-t-0 border-gray-500 h-[400px]  items-center gap-4"
          >
            <div
              style={{ backgroundColor: pricing.backgroundColor }}
              className="h-[100px] py-2 w-[100%] flex items-center text-white flex-col"
            >
              <p className="text-2xl font-semibold">{pricing.title}</p>
              <p className="text-2xl font-semibold">{pricing.price}</p>
              <p>per month</p>
            </div>
            <div className="flex flex-col justify-center  gap-2">
              {pricing.services.map((service) => (
                <div className="flex items-center  text-start gap-2">
                  <IoCheckmarkSharp className="text-2xl text-green-500" />
                  <p className="text-2xl">{service}</p>
                </div>
              ))}
            </div>
            <button
              className="bg-blue-500 text-white px-8 py-2 mt-4 hover:scale-105 transition-all duration-300 ease-in-out"
              style={{ backgroundColor: pricing.backgroundColor }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
