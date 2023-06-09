import React from "react";
import Logo from "../assets/logo.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import FadeInLeft from "./FadeInLeft";
import FadeInRight from "./FadeInRight";
import Anim from "./Anim";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="contact w-full min-h-[375px] review  flex flex-col md:flex-row justify-center items-center gap-0 md:gap-4 px-4 pt-6 ">
        <div className="w-full md:w-[380px] h-[270px]  overflow-hidden">
          <div className="title w-full h-[76px]  flex gap-2 items-center">
            <div>
              <FadeInLeft>
                <img src={Logo} alt="" />
              </FadeInLeft>
            </div>
            <div>
              <FadeInRight>
                <h4 className="text-[#FFFCCC] font-extrabold text-[24px]">
                  Golden View Dine{" "}
                </h4>
              </FadeInRight>
            </div>
          </div>
          <div className="description f-full h-full flex flex-col pt-6 pl-0 md:pl-9">
            <div>
              <Anim>
                <p className="text-[16px] text-[#FFFFFC] w-2/3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sollicitudin{" "}
                </p>
              </Anim>
            </div>
            <div className="">
              <ul className="flex gap-4 pt-6">
                <Anim>
                  <li className="w-[32px] h-[32px] bg-[#333539] flex justify-center items-center text-white text-xl">
                    <a href="https://thesargsyan.netlify.app/">
                      <AiOutlineInstagram />
                    </a>
                  </li>
                </Anim>
                <Anim>
                  <li className="w-[32px] h-[32px] bg-[#333539] flex justify-center items-center text-white text-xl">
                    <a href="https://thesargsyan.netlify.app/">
                      <AiOutlineTwitter />
                    </a>
                  </li>
                </Anim>
                <Anim>
                  <li className="w-[32px] h-[32px] bg-[#333539] flex justify-center items-center text-white text-xl">
                    <a href="https://thesargsyan.netlify.app/">
                      <FaYoutube />
                    </a>
                  </li>
                </Anim>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[380px]  h-[270px]  overflow-hidden">
          <div className="title w-full h-[76px]  flex items-center">
            <div>
              <Anim>
                <h4 className="text-[#FFFFFC] font-extrabold text-[20px]">
                  Other Links{" "}
                </h4>
              </Anim>
            </div>
          </div>
          <div className="description f-full h-full pt-6">
            <div className="">
              <ul className="flex flex-col gap-1 text-[#FFFFFC] text-[16px] list-disc pl-4">
                <Anim>
                  <li className="  ">
                    <a href="https://thesargsyan.netlify.app/">
                      Privacy Policy
                    </a>
                  </li>
                </Anim>
                <Anim>
                  <li className="  ">
                    <a href="https://thesargsyan.netlify.app/">
                      Terms & conditions
                    </a>
                  </li>
                </Anim>
                <Anim>
                  <li className="">
                    <a href="https://thesargsyan.netlify.app/">Blogs</a>
                  </li>
                </Anim>
                <Anim>
                  <li className="   ">
                    <a href="https://thesargsyan.netlify.app/">Our Team</a>
                  </li>
                </Anim>
                <Anim>
                  <li className="">
                    <a href="https://thesargsyan.netlify.app/">Our Kitchen</a>
                  </li>
                </Anim>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[380px]  h-[270px]  overflow-hidden">
          <div className="title w-full h-[76px]  flex items-center">
            <div>
              <Anim>
                <h4 className="text-[#FFFFFC] font-extrabold text-[20px]">
                  Contact Us{" "}
                </h4>
              </Anim>
            </div>
          </div>
          <div className="description f-full h-full pt-6">
            <div className="">
              <ul className="flex flex-col gap-6 text-[#FFFFFC] text-[16px]">
                <Anim>
                  <li className="flex items-center gap-4  ">
                    <span className="text-2xl text-[#A08040]">
                      <AiTwotoneMail />
                    </span>
                    <h4>Gogreendineservice@gmail.com</h4>
                  </li>
                </Anim>

                <Anim>
                  <li className="flex items-center gap-4  ">
                    <span className="text-2xl text-[#A08040]">
                      <CiLocationOn />
                    </span>
                    <h4>AZ complex bylane3 Mandari Rd Mumbai 1100867 </h4>
                  </li>
                </Anim>

                <Anim>
                  <li className="flex items-center gap-4  ">
                    <span className="text-2xl text-[#A08040]">
                      <IoMdCall />
                    </span>
                    <h4>+1800 287 256</h4>
                  </li>
                </Anim>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe  w-full min-h-[100px] review  flex flex-col md:flex-row justify-center items-center gap-0 md:gap-4 ">
        <div className="w-full md:w-[380px] h-[80px]  overflow-hidden  flex items-center px-4">
          <div className="flex items-center gap-4">
            <span className="text-2xl text-[#A08040]">
              <FadeInLeft>
                <AiOutlineMail />
              </FadeInLeft>
            </span>
            <Anim>
              <h4 className="text-xl text-[#FFFFFC]">
                Subscribe to our Newsletter
              </h4>
            </Anim>
          </div>
        </div>
       
          <div className="w-full md:w-[380px] h-[80px]  overflow-hidden px-4">
            <div className="w-full h-full py-4 text-white">
              <input
                type="text"
                placeholder="Your Email id"
                className="w-full h-full outline-none border-x-2 border-y-2 border-[#FFFFCC] pl-6 bg-inherit"
              />
            </div>
          </div>
       

        <div className="w-full md:w-[380px] h-[80px]  overflow-hidden ">
         
            <div className="w-full h-full py-4 text-white flex items-center justify-center md:justify-start">
              <button className="w-2/3 h-full outline-none border-x-2 border-y-2 border-[#FFFFCC]  bg-inherit">
                {" "}
                Subscribe
              </button>
            </div>
       
        </div>
      </div>
      <div className="copyright w-full min-h-[100px]  flex flex-col justify-center items-center gap-2  text-sm text-white">
        <div>
          <Anim>
            <h4>Copyright © 2022 Golden Dine website</h4>
          </Anim>
        </div>
        <div>
          <Anim>
            <h4>All rights reserved</h4>
          </Anim>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
