import React from "react";
import offerbg from "../images/offerbg.png";

const Offer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${offerbg})`,
      }}
      className="h-[100vh] bg-cover bg-fixed bg-top bg-no-repeat"
    >
      Offer
    </div>
  );
};

export default Offer;
