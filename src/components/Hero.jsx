import React from "react";
import homebg1 from "../images/homebg1.png";
import homebg2 from "../images/homebg2.png";
import homebg3 from "../images/homebg3.png";
import homebg4 from "../images/homebg4.png";
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homebg})`,
      }}
      className="h-[80vh] bg-cover bg-top bg-no-repeat"
    >
      Hero
    </div>
  );
};

export default Hero;
