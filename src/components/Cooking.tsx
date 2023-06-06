import React from "react";
import Subtitle from "../UI/Subtitle";
import UIButton from "../UI/UIButton";
import CookingImg from "../assets/cooking.svg";

const Cooking: React.FC = () => {
  return (
    <div className="container w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0">
      <div className="w-full lg:w-2/3 text-white flex flex-col justify-center items-start gap-10">
        <div className="text-white">
          <Subtitle>Cooking ingredients</Subtitle>
          <h4 className=" text-white text-xl md:text-3xl">What goes in</h4>
        </div>
        <div>
          <p className="text-sm text-gray-50 w-full lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
            mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
            orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor
            purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla
            orci convallis sit. At libero lacus, eget fermentum sed turpis
            curabitur donec consectetur. Imperdiet aliquam quam mauris semper
            suscipit.
          </p>
        </div>
        <UIButton>Read more</UIButton>
      </div>
      <div className="w-full lg:w-1/3 ">
        <div className="w-full h-full flex justify-center items-center">
          <img src={CookingImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cooking;
