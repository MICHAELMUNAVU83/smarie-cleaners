import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { AiOutlineSwapRight } from "react-icons/ai";

const Packages = () => {
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
    <div id="packages" className="my-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-5xl text-3xl text-center roboto text-[#5D95DB] font-bold">
          Packages
        </h1>
        <p className="md:text-2xl text-md text-center monts text-[#B5BCBE]">
          We offer a wide range of cleaning services
        </p>
      </div>

      <div className="w-[80%] my-12 mx-auto grid-cols-1    grid md:grid-cols-3 gap-8">
        {pricings.map((pricing) => (
          <div
            key={pricing.id}
            className="flex  flex-col cursor-pointer border-2 border-t-0 border-gray-500 h-[400px]  items-center gap-4 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <div
              style={{ backgroundColor: pricing.backgroundColor }}
              className="h-[100px] py-2 w-[100%] flex items-center text-white flex-col"
            >
              <p className="text-2xl font-bold">{pricing.title}</p>
              <p className="text-2xl font-bold">{pricing.description}</p>
            </div>
            <div className="flex flex-col roboto justify-between  gap-2">
              {pricing.services.map((service) => (
                <div className="flex items-center   text-start gap-2">
                  <IoCheckmarkSharp className="text-2xl text-green-500" />
                  <p className="md:text-md text-xs">{service.title}</p>
                  <AiOutlineSwapRight className="text-2xl text-green-500" />
                  <p className="md:text-md text-xs">{service.price}</p>
                </div>
              ))}
              <a
                className="bg-blue-500 w-[70%] flex justify-center items-center mx-auto text-white px-8 py-2 mt-4 hover:scale-105 transition-all duration-300 ease-in-out"
                style={{ backgroundColor: pricing.backgroundColor }}
                href="tel:0710471667"
                rel="noreferrer"
              >
                Call to Book
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
