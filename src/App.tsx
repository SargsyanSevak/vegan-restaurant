import { Routes, Route } from 'react-router-dom';
import BookNow from './components/BookNow';
import Template from './components/Template';
const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Template/>} />
    <Route path='/book-now' element={<BookNow/>} />
  </Routes>
);
}
export default Main;
