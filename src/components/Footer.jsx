import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col w-[80%] mx-auto py-8">
        <div className="grid grid-cols-4 gap-8">
          <div className=" flex flex-col gap-2">
            <p>Smarie</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nec erat erat. Integer blandit, nulla quis fermentum hendrerit,
              nisi diam viverra metus, porta semper est ipsum et sapien.
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <p className="font-bold">Smarie</p>
            <div className="flex flex-col gap-2">
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>
          </div>

          <div className=" flex flex-col gap-2">
            <p className="font-bold">Smarie</p>
            <div className="flex flex-col gap-2">
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>
          </div>

          <div className=" flex flex-col gap-2">
            <p className="font-bold">Smarie</p>
            <div className="flex flex-col gap-2">
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#5FBED6]  py-4">
        <div className="w-[80%] mx-auto flex justify-between items-center text-white">
          <p>Privacy Policy | Terms of Service | Contact Us</p>
          <p>Smarie © 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
