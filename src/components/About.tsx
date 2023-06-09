import React from "react";
import Subtitle from "../UI/Subtitle";
import UIButton from "../UI/UIButton";
import AboutImg from "../assets/about-us-img.svg";
import Anim from "./Animation";
import FadeInRight from "./FadeInRight";

const About: React.FC = () => {

  return (
    <div
      className="container relative w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 py-10 md:py-0"
      id="about"
    >
      <div className="w-full lg:w-2/3 text-white flex flex-col justify-center items-start gap-10">
        <div className="text-white">
          <Anim>
            <Subtitle>About Us</Subtitle>
          </Anim>
          <Anim>
            <h4 className=" text-white text-xl md:text-3xl">
              Discover the taste of worldclass vegan dishes <br /> from the
              kitchen of Go Green Dine
            </h4>
          </Anim>
        </div>

        <div>
          <Anim>
            <p className="text-sm text-gray-50 w-full lg:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
              mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
              orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor
              purus nunc tellus pellentesque nibh mattis. Malesuada integer
              consectetur. Imperdiet aliquam quam mauris semper suscipit.
              Molestie maecenas interdum pharetra id velit sed nec.tetur sit
              sagittis pretium eget vitae semper pellentesque pellentesque.
            </p>
          </Anim>
        </div>
        <Anim>
          <UIButton>Read more</UIButton>
        </Anim>
      </div>
      <div className="w-full lg:w-1/3 ">
        <FadeInRight>
          <div className="w-full h-full flex justify-center items-center">
            <img src={AboutImg} alt="" />
          </div>
        </FadeInRight>
      </div>
    </div>
  );
};

export default About;
