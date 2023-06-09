import BookTable from "../assets/book-table-img.svg";
import Subtitle from "../UI/Subtitle";
import UIButton from "../UI/UIButton";
import Anim from "./Animation";
import FadeInLeft from "./FadeInLeft";
import FadeInRight from "./FadeInRight";

const BookAd = () => {
  return (
    <div className="min-h-96 w-full  book_ad">
      <div className="container  flex py-10">
        <div className="hidden md:flex  justify-center items-center  w-3/4">
          <FadeInLeft>
              <img src={BookTable} alt="" />
          </FadeInLeft>
        
        </div>
        <div className="flex flex-col w-full gap-6 justify-evenly items-center ">
          <div className="text-4xl">
            <Subtitle color="white">
              Come join us for a lunch <br /> this weekend and enjoy
            </Subtitle>
          </div>
          <div>
            <Anim>
                <h4 className="amber_light text-3xl font-bold">FLAT 10% OFF</h4>
            </Anim>
          
          </div>
          <div className="text-white">
            <Anim>
                <UIButton>Book Table</UIButton>
            </Anim>
          
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center  w-3/4 -mr-10">
          <FadeInRight>
              <img src={BookTable} alt="" />
          </FadeInRight>
        
        </div>
      </div>
    </div>
  );
};

export default BookAd;
