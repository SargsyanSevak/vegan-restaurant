import React from "react";
import Delicacy from "../assets/delicacy.svg";
import Chefs from "../assets/chefs.svg";
import Members from "../assets/members.svg";
import Anim from "./Anim";
import FadeInLeft from "./FadeInLeft";

const Statistics: React.FC = () => {
  return (
    <div className="w-full min-h-48 statistics">
      <div className="container  w-full h-full flex flex-col sm:flex-row justify-between items-center py-10">
        <div className="w-full sm:w-1/4 h-48  flex justify-evenly items-center">
          <div>
            <FadeInLeft>
              <img src={Delicacy} alt="" />
            </FadeInLeft>
          </div>
          <div>
            <Anim>
              <h4 className="text-5xl font-bold amber_light ">250+</h4>
            </Anim>
            <Anim>
              <h6 className="font-xl text-white font-bold">Delicacy</h6>
            </Anim>
          </div>
        </div>
        <div className="w-full sm:w-1/4 h-48  flex justify-evenly items-center">
          <div>
            <FadeInLeft>
              <img src={Chefs} alt="" />
            </FadeInLeft>
          </div>
          <div>
            <Anim>
              <h4 className="text-5xl font-bold amber_light ">10+</h4>
            </Anim>

            <Anim>
              <h6 className="font-xl text-white font-bold">Renowed chefs</h6>
            </Anim>
          </div>
        </div>
        <div className="w-full sm:w-1/4 h-48  flex justify-evenly items-center">
          <div>
            <FadeInLeft>
              <img src={Members} alt="" />
            </FadeInLeft>
          </div>
          <div>
            <Anim>
              <h4 className="text-5xl font-bold amber_light ">30+</h4>
            </Anim>
            <Anim>
              <h6 className="font-xl text-white font-bold">Members</h6>
            </Anim>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
