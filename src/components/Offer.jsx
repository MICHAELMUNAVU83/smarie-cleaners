import React from "react";
import offerbg from "../images/offerbg.png";
import offer1 from "../images/offer1.png";

const Offer = () => {
  const offers = [
    {
      id: 1,
      title: "Cleaning",
      description: "Lorem Ipsum",
      image: offer1,
    },
    {
      id: 2,
      title: "Dusting Surfaces",
      description: "Lorem Ipsum",
      image: offer1,
    },
    {
      id: 3,
      title: "Trash Removal",
      description: "Lorem Ipsum",
      image: offer1,
    },
    {
      id: 4,
      title: "Restroom Cleaning",
      description: "Lorem Ipsum",
      image: offer1,
    },
    {
      id: 5,
      title: "Vaccuming",
      description: "Lorem Ipsum",
      image: offer1,
    },
    {
      id: 6,
      title: "Custom Cleaning",
      description: "Lorem Ipsum",
      image: offer1,
    },
    {
      id: 7,
      title: "Move In/Out Cleaning",
      description: "Lorem Ipsum",
      image: offer1,
    },
    {
      id: 8,
      title: "Fridge Cleaning",
      description: "Lorem Ipsum",
      image: offer1,
    },
    {
      id: 9,
      title: "Oven Cleaning",
      description: "Lorem Ipsum",
      image: offer1,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${offerbg})`,
      }}
      className="py-12 bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <div className="flex flex-col py-8 justify-center items-center gap-2">
        <p>We make your life easier</p>
        <p className="text-5xl">What we offer</p>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col justify-center bg-white rounded-lg items-center gap-4"
          >
            <img
              src={offer.image}
              alt=""
              className="w-[100%] h-[250px] bg-cover bg-center bg-no-repeat"
            />

            <div className="text-2xl font-semibold">{offer.title}</div>
            <div className="text-sm w-[80%] mx-auto text-center">
              {offer.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
