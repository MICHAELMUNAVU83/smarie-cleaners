import React from "react";
import offerbg from "../images/offerbg.png";
import offer1 from "../images/offer1.png";
import offer2 from "../images/offer2.png";
import offer3 from "../images/offer3.png";
import offer4 from "../images/offer4.png";
import offer5 from "../images/offer5.png";
import offer6 from "../images/offer6.png";
import offer7 from "../images/offer7.png";
import offer8 from "../images/offer8.png";
import offer9 from "../images/offer9.png";
const Services = () => {
  const offers = [
    {
      id: 1,
      title: "Cleaning",
      description: "Thorough Cleaning",
      image: offer1,
    },
    {
      id: 2,
      title: "Dusting Surfaces",
      description: "Surface Dusting ",
      image: offer2,
    },
    {
      id: 3,
      title: "Trash Removal",
      description: "Waste Removal ",
      image: offer3,
    },
    {
      id: 4,
      title: "Restroom Cleaning",
      description: "Restroom Sanitization ",
      image: offer4,
    },
    {
      id: 5,
      title: "Vaccuming",
      description: "Carpet Vacuuming",
      image: offer5,
    },
    {
      id: 6,
      title: "Custom Cleaning",
      description: "Customized Cleaning",
      image: offer6,
    },
    {
      id: 7,
      title: "Move In/Out Cleaning",
      description: "Move-in/Out Cleaning",
      image: offer7,
    },
    {
      id: 8,
      title: "Fridge Cleaning",
      description: "Fridge Deep Cleaning",
      image: offer8,
    },
    {
      id: 9,
      title: "Oven Cleaning",
      description: "Oven Deep Cleaning",
      image: offer9,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${offerbg})`,
      }}
      id="services"
      className=" bg-cover opacity bg-fixed bg-center bg-no-repeat"
    >
      <div className="bg-white/50 w-[100%] py-12 h-[100%] ">
        <div className="flex flex-col py-8 justify-center items-center gap-2">
          <p className="text-[#A8B1B3] monts md:text-2xl text-sm ">
            We make your life easier
          </p>

          <p className="md:text-6xl text-4xl roboto text-[#6197DC] font-semibold">
            What We Offer
          </p>
        </div>

        <div className="w-[80%] mx-auto grid md:grid-cols-3 grid-cols-1  gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="flex flex-col justify-center bg-white rounded-lg cursor-pointer  hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                src={offer.image}
                alt=""
                className="w-[100%] h-[250px] rounded-t-lg object-cover"
              />

              <div className="text-2xl p-1 font-semibold">{offer.title}</div>
              <div className="text-sm p-1 text-[#5FBED6]">
                {offer.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
