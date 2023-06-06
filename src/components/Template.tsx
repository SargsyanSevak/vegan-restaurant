import Menu from "./SpecialMenu";
import About from "./About";
import BookAd from "./BookAd";
import Home from "./Home";
import Special from "./Special";
import Cooking from "./Cooking";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";
import Footer from "./Footer";
import "../App.css";
import React from "react";

const Template: React.FC = () => {
  return (
    <div className="w-full min-h-screen wrapper">
      <Home />
      <About />
      <Special />
      <Menu />
      <BookAd />
      <Cooking />
      <Statistics />
      <Testimonials />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Template;
