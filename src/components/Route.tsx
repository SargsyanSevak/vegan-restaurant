import { Routes, Route } from "react-router-dom";
import BookNow from "./BookNow";
import Home from "./Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<BookNow />} />
    </Routes>
  );
};
export default Routing;
