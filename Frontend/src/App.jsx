
import Home from '../src/components/home/Home.jsx'
import {  BrowserRouter, Route, Routes} from "react-router-dom";
import Course from '../src/components/Course.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Signup from '../src/components/Signup.jsx';
import Contact from '../src/components/Contact.jsx'
import Login from '../src/components/Login.jsx';
import Footer from './components/footer/Footer.jsx'
function App() {
  return(
    <>
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/course" element={<><Navbar/><Course/><Footer/></>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<><Navbar/><Contact/><Footer/></>} />

      </Routes>
      </BrowserRouter>
  

    </>
  );
}

export default App
