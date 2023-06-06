import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/search.svg";
import { HeaderProps } from "../interfaces/interfaces";

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  return (
    <header className="w-full lg:w-2/3 h-20 bg-black hidden md:flex flex-row justify-between items-center relative z-10">
      <div className="mobile"></div>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav className="flex w-3/5 justify-between">
        <ul className="flex  w-full justify-evenly items-center h-full">
          {navLinks.map((el) => (
            <a href={el.url} key={el.title}>
              <li className="text-yellow-100">{el.title}</li>
            </a>
          ))}
        </ul>
        <div className="search">
          <span className="h-full flex justify-center items-center">
            <img src={SearchIcon} alt="" />
          </span>
        </div>
      </nav>

      <div className="book_now h-full w-1/5">
        <Link to={"/book-now"} target="_blank">
          <button className="h-full amber w-full flex justify-center items-center gap-4 px-4 text-white ">
            <span className="color-white w-6">
              <hr />
            </span>
            Book Now
            <span className="color-white w-6">
              <hr />
            </span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
