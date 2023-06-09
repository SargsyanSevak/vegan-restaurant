import React from "react";
import { testimonialData } from "../data/testimonialsData";
import Subtitle from "../UI/Subtitle";
import BasicRating from "../UI/Rating";
import Anim from "./Anim";
import FadeInLeft from "./FadeInLeft";

const Testimonials: React.FC = () => {
  return (
    <div className="md:min-h-screen overflow-hidden">
      <div className="w-full h-60 flex flex-col justify-center items-center">
        <Subtitle>Reviews</Subtitle>
        <Anim>
          <h4 className="text-white text-xl md:text-3xl font-bold">
            Words from our food lovers
          </h4>
        </Anim>
      </div>
      <div className="h-full w-full overflow-x-scroll custom-scrollbar ">
        <div className="flex items-center gap-10">
          {testimonialData.map((el) => (
            <div
              className="w-[100vw] md:w-[732px] h-[385px] flex-shrink-0 review px-10"
              key={el.id}
            >
              <div className=" w-full h-[150px] flex items-center gap-6 px-8">
                <div>
                  <FadeInLeft>
                    <img src={el.image} alt="" />
                  </FadeInLeft>
                </div>
                <div>
                  <Anim>
                    <h4 className="text-[18px] text-white font-bold">
                      {el.name}
                    </h4>
                  </Anim>

                  <h4>
                    <Anim>
                      <BasicRating value={el.rating} />
                    </Anim>
                  </h4>
                </div>
              </div>
              <div className=" w-full h-[230px] px-8">
                <Anim>
                  <p className="text-[16px] text-[#FFFFFC]">{el.review}</p>
                </Anim>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
