import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="py-4 w-[80%] mx-auto flex justify-between items-center">
        <p>Smarie</p>

        <div className="flex justify-center items-center gap-4">
          <p className="text-[#5FBED6] cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 ">
            Home
          </p>
          <p className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-500">
            Featured
          </p>
          <p className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-500">
            Featured
          </p>
          <p className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-500">
            Featured
          </p>
          <p className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-500">
            Featured
          </p>
          <p className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-500">
            Featured
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
