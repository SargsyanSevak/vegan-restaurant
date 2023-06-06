import React from "react";
import { testimonialData } from "../data/testimonialsData";
import Subtitle from "../UI/Subtitle";
import BasicRating from "../UI/Rating";


const Testimonials: React.FC = () => {
  return (
    <div className="md:min-h-screen overflow-hidden">
      <div className="w-full h-60 flex flex-col justify-center items-center">
        <Subtitle>Reviews</Subtitle>
        <h4 className="text-white text-xl md:text-3xl font-bold">
          Words from our food lovers
        </h4>
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
                  <img src={el.image} alt="" />
                </div>
                <div>
                  <h4 className="text-[18px] text-white font-bold">
                    {el.name}
                  </h4>
                  <h4>
                    <BasicRating value={el.rating} />
                  </h4>
                </div>
              </div>
              <div className=" w-full h-[230px] px-8">
                <p className="text-[16px] text-[#FFFFFC]">{el.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
