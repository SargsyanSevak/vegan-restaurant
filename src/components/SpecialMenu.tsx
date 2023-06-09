import Subtitle from "../UI/Subtitle";
import { menuData } from "../data/MenuData";
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import Anim from "./Animation";

const SpecialMenu: React.FC = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  return (
    <m.div
      className="w-full min-h-screen flex flex-col justify-center items-center gap-10 container py-10 md:py-0"
      id="menu"
      ref={ref}
    >
      <div className="w-full h-full flex flex-col justify-around items-center container relative z-10">
        <Subtitle>Straight From Kitchen</Subtitle>
        <Anim>
          <h4 className="text-white text-xl md:text-3xl">Our Menu</h4>
        </Anim>
      </div>
      <div className=" flex flex-wrap justify-around gap-y-6 gap-x-0 w-full h-full container">
        {menuData.map((el, i) => (
          <div
            key={i}
            className=" w-full lg:w-1/2 min-h-16 text-white flex flex-col sm:flex-row justify-center items-center sm:justify-around"
          >
            <div>
              <Anim>
                <img src={el.imgUrl} alt="menu" />
              </Anim>
            </div>
            <div className="h-full flex flex-col justify-center">
              <Anim>
                <h4 className="font-bold text-lg">{el.title}</h4>
              </Anim>
              <Anim>
                <h6 className="text-sm">{el.description}</h6>
              </Anim>
            </div>
            <Anim>
              <div className="h-full w-28 flex flex-col justify-center amber_light">
                <hr className="amber_light" />
              </div>
            </Anim>

            <div className="h-full flex flex-col justify-center amber_light">
              <Anim>
                <p className="font-bold text-xl">{el.code}</p>
              </Anim>
            </div>
          </div>
        ))}
      </div>
    </m.div>
  );
};

export default SpecialMenu;
