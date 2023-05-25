import React from "react";
import homebg from "../images/homebg.png";
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
