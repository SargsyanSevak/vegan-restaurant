import React from "react";
import Subtitle from "../UI/Subtitle";
import Blog1 from "../assets/blog1.svg";
import Blog2 from "../assets/blog2.svg";
import Blog3 from "../assets/blog3.svg";


const Blogs: React.FC = () => {
  return (
    <div className="w-full min-h-screen  flex flex-col  " id="blogs">
      <div className="w-full h-40 flex flex-col justify-center items-center ">
        <Subtitle>Blogs</Subtitle>
        <h4 className="text-white text-xl md:text-3xl font-bold">
          Words from our food lovers
        </h4>
      </div>
      <div className="flex-1 flex flex-col md:flex-row  gap-10 justify-between items-center container ">
        <div className="w-full md:w-96 min-h-96  review">
          <div className="flex justify-center">
            <img src={Blog1} alt="" />
          </div>
          <div className="text-white flex flex-col gap-2 px-0 md:px-8 py-8">
            <h4 className="font-bold text-xl">Cooking Dining Experience</h4>
            <p className="font-bold text-sm text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin{" "}
            </p>
            <div className="text-white pt-4 text-sm">
              <button className="btn">Read more</button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-96 min-h-96  review">
          <div className="text-white flex flex-col gap-2 px-0 md:px-8 py-8">
            <h4 className="font-bold text-xl">Cooking Dining Experience</h4>
            <p className="font-bold text-sm text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin{" "}
            </p>
            <div className="text-white pt-4 text-sm">
              <button className="btn">Read more</button>
            </div>
          </div>
          <div>
            <img src={Blog2} alt="" />
          </div>
        </div>

        <div className="w-full md:w-96 min-h-96  review">
          <div>
            <img src={Blog3} alt="" />
          </div>
          <div className="text-white flex flex-col gap-2 px-0 md:px-8 py-8">
            <h4 className="font-bold text-xl">Cooking Dining Experience</h4>
            <p className="font-bold text-sm text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin{" "}
            </p>
            <div className="text-white pt-4 text-sm">
              <button className="btn">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
