import React from "react";
import numbersbg from "../images/numbersbg.png";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { CgAwards } from "react-icons/cg";
import { ImUsers } from "react-icons/im";
import { BsFillHouseAddFill } from "react-icons/bs";
import { BiSmile } from "react-icons/bi";
const Numbers = () => {
  const numbers = [
    {
      id: 1,
      title: "100%",
      description: "Quality",
      icon: <BsFillHandThumbsUpFill className="md:text-5xl  text-2xl" />,
    },
    {
      id: 2,
      title: "300",
      description: "Clients ",
      icon: <CgAwards className="md:text-5xl text-2xl " />,
    },
    {
      id: 3,
      title: "26",
      description: "Cleaners",
      icon: <ImUsers className="md:text-5xl text-2xl " />,
    },
    {
      id: 4,
      title: "200",
      description: "Houses",
      icon: <BsFillHouseAddFill className="md:text-5xl text-2xl " />,
    },
    {
      id: 5,
      title: "4572",
      description: "Smiles",
      icon: <BiSmile className="md:text-5xl text-2xl " />,
    },
  ];

  return (
    <div
      className="py-12 text-white  bg-cover  bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${numbersbg})`,
      }}
    >
      <div className="flex  justify-between md:w-[80%] w-[95%] mx-auto items-center gap-2">
        {numbers.map((number) => (
          <div
            key={number.id}
            className="flex flex-col cursor-pointer justify-center items-center gap-8"
          >
            <p>{number.icon}</p>

            <div className="text-center">
              <p className="md:text-5xl monts ">{number.title}</p>
              <p className="md:text-md text-sm">{number.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
