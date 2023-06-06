import Subtitle from "../UI/Subtitle";
import { menuData } from "../data/MenuData";
import React from "react";

const SpecialMenu:React.FC = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center gap-10 container py-10 md:py-0"
      id="menu"
    >
      <div className="w-full h-full flex flex-col justify-around items-center container relative z-10">
        <Subtitle>Straight From Kitchen</Subtitle>
        <h4 className="text-white text-xl md:text-3xl">Our Menu</h4>
      </div>
      <div className=" flex flex-wrap justify-around gap-y-6 gap-x-0 w-full h-full container">
        {menuData.map((el) => (
          <div
            className=" w-full lg:w-1/2 min-h-16 text-white flex flex-col sm:flex-row justify-center items-center sm:justify-around"
            key={el.id}
          >
            <div>
              <img src={el.imgUrl} alt="menu" />
            </div>
            <div className="h-full flex flex-col justify-center">
              <h4 className="font-bold text-lg">{el.title}</h4>
              <h6 className="text-sm">{el.description}</h6>
            </div>
            <div className="h-full w-28 flex flex-col justify-center amber_light">
              <hr className="amber_light" />
            </div>
            <div className="h-full flex flex-col justify-center amber_light">
              <p className="font-bold text-xl">{el.code}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialMenu;
