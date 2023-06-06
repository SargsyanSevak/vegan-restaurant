import React from "react";
import Footer from "./Footer";
import "../App.css";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Subtitle from "../UI/Subtitle";
import UIInput from "../UI/UIInput";
import { navLinks } from "../data/NavLinks";

const BookNow:React.FC = () => {
  return (
    <div className="w-full min-h-screen wrapper">
      <div className="home_cover">
        <Header navLinks={navLinks} />
        <MobileMenu navLinks={navLinks} />
      </div>
      <div className="w-full min-h-[500px] flex justify-center reletive">
        <div className="absolute book-container w-[70%] min-h-[500px] review -bottom-10 z-30 pb-6 flex flex-col justify-around items-center">
          <div className="title h-[120px] flex flex-col items-center justify-end ">
            <Subtitle>Reserve a seat</Subtitle>
            <h4 className="text-[24px] text-white font-extrabold">
              Book a table on time
            </h4>
          </div>
          <div className="z-50 text-white w-full ">
            <div className="w-full min-h-[70px] flex flex-col md:flex-row justify-between px-2 md:px-10 gap-0 md:gap-6 ">
              <div className="w-full md:w-[70%] h-full ">
                <UIInput placeholder="Your full Name" type="text" />
              </div>
              <div className="w-full md:w-[30%] h-full">
                <UIInput placeholder="Your Phone Number" type="number" />
              </div>
            </div>
            <div className="w-full min-h-[70px] flex justify-between flex-col md:flex-row px-2 md:px-10 gap-0 md:gap-6">
              <div className="w-full md:w-[40%] h-ful uiinput">
                <UIInput placeholder="Select Date" type="text" />
              </div>
              <div className="uiinput w-full md:w-[20%]  h-full">
                <UIInput placeholder="Time Slot" type="number" />
              </div>
              <div className="uiinput w-full md:w-[40%]  h-full">
                <UIInput placeholder="Occupancy" type="number" />
              </div>
            </div>
            <div className="w-full min-h-[70px] px-10 py-4 flex justify-center flex-col md:flex-row items-center">
              <button className="w-full md:w-1/4 h-full outline-none border-x-2 border-y-2 border-[#FFCE6D] bg-inherit px-6 py-2">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default BookNow;
