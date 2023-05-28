import React from "react";
import works1 from "../images/works1.png";
import works2 from "../images/works2.png";
import works3 from "../images/works3.png";
const HowWeWork = () => {
  const works = [
    {
      id: 1,
      title: "Contact us",
      description:
        "Reach out to our cleaning services team to discuss your cleaning needs.",
      image: works1,
    },
    {
      id: 2,
      title: "Welcome our team",
      description:
        "Once you've scheduled your cleaning service, our professional team will arrive at your location promptly.",
      image: works2,
    },
    {
      id: 3,
      title: "Enjoy the premium service",
      description:
        "Sit back, relax, and let us take care of the cleaning for you. ",
      image: works3,
    },
  ];
  return (
    <div id="howwework" className="my-8">
      <div className="flex flex-col my-4 justify-center items-center gap-2">
        <p className="text-[#A8B1B3] text-2xl monts">Enjoy your time off</p>

        <p className="text-5xl text-[#6197DC] roboto font-semibold">
          How We Work
        </p>
      </div>

      <div className="w-[80%] mx-auto flex md:flex-row flex-col gap-4 justify-between items-center">
        {works.map((work) => (
          <div
            key={work.id}
            className="flex flex-col hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer justify-center items-center gap-4"
          >
            <div
              className="w-[200px] h-[200px] rounded-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${work.image})` }}
            ></div>
            <div className="text-2xl text-center  font-semibold">
              {work.title}
            </div>
            <div className=" text-sm w-[80%] text-[#737579] mx-auto text-center">
              {work.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
