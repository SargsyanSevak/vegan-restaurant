import React, { useEffect, useState } from "react";
import { HeaderProps } from "../interfaces/interfaces";
import Logo from "../assets/logo.svg";
import { motion as m } from "framer-motion";

const MobileMenu: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <m.div
      className={`${hasScrolled ? "opacity-0" : "opacity-1"}`}
      style={{transition:'all 0.5s ease-in-out'}}
    >
      <nav className="flex md:hidden items-center justify-between flex-wrap bg-black opacity-1 py-4 px-6 fixed top-0 right-0 left-0 z-20 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <img src={Logo} alt="logo" className="w-10 h-10" />
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fill="#FFFFCC"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <ul>
              {navLinks.map((el) => (
                <li key={el.title}>
                  <a
                    href={el.url}
                    className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                  >
                    {el.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </m.div>
  );
};

export default MobileMenu;
