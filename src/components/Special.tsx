import React from "react";
import { specialData } from "../data/specialData";
import Subtitle from "../UI/Subtitle";
import Anim from "./Animation";

const Special: React.FC = () => {
 
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-evenly items-center special"
      id="special"
    >
      <div className="w-full h-full flex flex-col justify-around items-center container relative z-10 pb-10 md:pb-0">
        <Subtitle>Special</Subtitle>
        <Anim>
          <h4 className="text-white text-xl md:text-3xl">
            What makes us special
          </h4>
        </Anim>
      </div>
      <div className=" flex flex-col gap-10 md:gap-0 md:flex-row w-full h-full justify-between items-center  container relative z-10">
        {specialData.map((el, i) => (
          <div
            className="w-full md:w-1/4 h-96 amberdark pt-10 flex flex-col gap-4"
            key={el.id}
          >
            <div className="flex justify-center">
              <Anim>
                <img src={el.imgUrl} alt="special-icon" />
              </Anim>
            </div>
            <div className="flex justify-center text-2xl text-white">
              <Anim>
                <h4>{el.title}</h4>
              </Anim>
            </div>
            <Anim>
              <div className="flex justify-center text-sm  w-full">
                <p className="w-2/3 text-gray-300">{el.description}</p>
              </div>
            </Anim>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Special;
