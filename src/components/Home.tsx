import React from "react";
import { navLinks } from "../data/NavLinks";
import UIButton from "../UI/UIButton";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import { motion as m } from "framer-motion";
import Anim from "./Animation";

const Home: React.FC = () => {
  return (
    <div className="home px-2" id="home">
      <Header navLinks={navLinks} />
      <MobileMenu navLinks={navLinks} />
      <div className="container w-full flex flex-col justify-center items-center text-yellow-100 gap-6 relative z-10">
        <Anim>
          <h4 className="font-bold text-4xl md:text-5xl ">Welcome To</h4>
        </Anim>
        <Anim>
          <h4 className="font-bold text-4xl md:text-5xl">Golden View Dine</h4>
        </Anim>

        <Anim>
          <p className="text-white font-bold text-lg">
            Explore the authentic vegan dishes with your friends and family
          </p>
        </Anim>

        <Anim>
          <UIButton>Read more</UIButton>
        </Anim>
      </div>
    </div>
  );
};

export default Home;
