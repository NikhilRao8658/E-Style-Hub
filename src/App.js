

import "../src/index.css"
import Home from './Components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Singnup';
// import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loginpage' element={<Login />} />
        <Route path='/signinpage' element={<Signup />} />
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    </>

  );
}

export default App;