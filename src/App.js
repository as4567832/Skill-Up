import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Common/Navbar';
import LoginForm from './pages/Login';
import VerifyOtp from './pages/verifyotp';
import ProfileDropdown from './components/core/profileDropdown/profileDropdown';
import Dashboard from './pages/dashboard';
import EnrolledCourses from './pages/dashboard/enrolledCourses';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css"
import SignupPage from './pages/signuppage';
import Signup from './pages/Signup';
import Coursespage from './pages/course.jsx/coursespage';
import ContactUs from './pages/Contactus';
import AboutUs from './pages/aboutus';
import Cart from './pages/dashboard/cart';
import ShoppingCart from './pages/dashboard/homecart';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      offset: 120, // distance from top before animation starts
      easing: "ease-in-out",
      once: false, // only animate once
    });
  }, []);

  return (
   <div>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<LoginForm></LoginForm>}></Route>
      <Route path='/verify-otp' element={<VerifyOtp></VerifyOtp>}></Route>
      <Route path="/profile" element={<ProfileDropdown></ProfileDropdown>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path='/enrolled-courses' element={<EnrolledCourses></EnrolledCourses>}></Route>
      <Route path='/course' element={ <Coursespage></Coursespage> }></Route>
      <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
      <Route path="/about" element={<AboutUs></AboutUs>}></Route>
      <Route path='/cart' element={<ShoppingCart></ShoppingCart>}></Route>
    </Routes>
   </div>
  );
}

export default App;
