import React from "react";
import numbersbg from "../images/numbersbg.png";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { CgAwards } from "react-icons/cg";
import { ImUsers } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { BiSmile } from "react-icons/bi";
const Numbers = () => {
  const numbers = [
    {
      id: 1,
      title: "100%",
      description: "Quality",
      icon: <BsFillHandThumbsUpFill className="text-5xl " />,
    },
    {
      id: 2,
      title: "2000",
      description: "Clients per year",
      icon: <CgAwards className="text-5xl " />,
    },
    {
      id: 3,
      title: "26",
      description: "Cleaners",
      icon: <ImUsers className="text-5xl " />,
    },
    {
      id: 4,
      title: "5",
      description: "Years of experience",
      icon: <SlCalender className="text-5xl " />,
    },
    {
      id: 5,
      title: "4572",
      description: "Happy Smiles",
      icon: <BiSmile className="text-5xl " />,
    },
  ];

  return (
    <div className="py-12  bg-cover  bg-fixed bg-center bg-no-repeat">
      <div className="flex  justify-between w-[80%] mx-auto items-center gap-2">
        {numbers.map((number) => (
          <div
            key={number.id}
            className="flex flex-col justify-center items-center gap-8"
          >
            <p>{number.icon}</p>

            <div className="text-center">
              <p className="text-5xl ">{number.title}</p>
              <p className="">{number.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
