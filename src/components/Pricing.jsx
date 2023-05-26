import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const Pricing = () => {
  const pricings = [
    {
      id: 1,
      title: "Commercial",
      description: "Cleaning",
      services: [
        {
          id: 1,
          title: "Big Corporate Offices",
          price: "10,000 Ksh",
        },
        {
          id: 2,
          title: "Small Offices",
          price: "5,000 Ksh",
        },
      ],
      backgroundColor: "#54A4DC",
    },
    {
      id: 1,
      title: "Residential",
      description: "Cleaning",
      services: [
        {
          id: 1,
          title: "Studio Apartments",
          price: "1,000 Ksh",
        },
        {
          id: 2,
          title: "1 Bedroom Apartments",
          price: "2,500 Ksh",
        },
        {
          id: 3,
          title: "2 Bedroom Apartments",
          price: "5,000",
        },
        {
          id: 4,
          title: "3 Bedroom Apartments",
          price: "6,000",
        },
        {
          id: 5,
          title: "4 Bedroom Apartments and more",
          price: "8,000",
        },
      ],
      backgroundColor: "#5FBED6",
    },
    {
      id: 1,
      title: "Extra Services",
      description: "Offered",
      services: [
        {
          id: 1,
          title: "Fridge Cleaning",
          price: "400 Ksh",
        },
        {
          id: 2,
          title: "Microwave Cleaning",
          price: "300 Ksh",
        },
        {
          id: 3,
          title: "Oven Cleaning",
          price: "300",
        },
      ],
      backgroundColor: "#46C6CE",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">Packages</h1>
        <p className="text-2xl">We offer a wide range of cleaning services</p>
      </div>

      <div className="w-[94%] my-12 mx-auto  grid grid-cols-3 gap-8">
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
              <p className="text-2xl font-semibold">{pricing.description}</p>
             
            </div>
            <div className="flex flex-col justify-between  gap-2">
              {pricing.services.map((service) => (
                <div className="flex items-center   text-start gap-2">
                  <IoCheckmarkSharp className="text-2xl text-green-500" />
                  <p className="">{service.title}</p>
                  <p className="">{service.price}</p>
                </div>
              ))}
              <button
                className="bg-blue-500 w-[70%] mx-auto text-white px-8 py-2 mt-4 hover:scale-105 transition-all duration-300 ease-in-out"
                style={{ backgroundColor: pricing.backgroundColor }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
