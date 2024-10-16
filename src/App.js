

import "../src/index.css"
import Home from './Components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Singnup';
import ProductPage from "./Pages/ProductPage";
// import Footer from "./Components/Footer";
import Error from "./Pages/Error";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SinglePage' element={<ProductPage/>} />

        <Route path='/loginpage' element={<Login />} />
        <Route path='/signinpage' element={<Signup />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    </>

  );
}

export default App;