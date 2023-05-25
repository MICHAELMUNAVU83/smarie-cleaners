import React from "react";
import works1 from "../images/works1.png";
import works2 from "../images/works2.png";
import works3 from "../images/works3.png";
const HowWeWork = () => {
  const works = [
    {
      id: 1,
      title: "Contact Us to book a term",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: works1,
    },
    {
      id: 2,
      title: "Welcome our cleaning team",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: works2,
    },
    {
      id: 3,
      title: "Enjoy the premium service",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: works3,
    },
  ];
  return (
    <div>
      <div className="flex flex-col py-8 justify-center items-center gap-2">
        <p>Enjoy your app</p>

        <p className="text-3xl font-semibold">How We Work</p>
      </div>

      <div className="w-[80%] mx-auto flex justify-between items-center">
        {works.map((work) => (
          <div
            key={work.id}
            className="flex flex-col justify-center items-center gap-4"
          >
            <div
              className="w-[200px] h-[200px] rounded-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${work.image})` }}
            ></div>
            <div className="text-2xl  font-semibold">{work.title}</div>
            <div className=" text-sm w-[80%] mx-auto text-center">{work.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
