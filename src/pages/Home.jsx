// import Section1 from '../components/core/homepage/Section1';
// import Section2 from '../components/core/homepage/Section2';
// // import Section3 from '../components/core/homepage/Section3';
import Footer from '../components/Common/Footer';
import Button from "../components/core/homepage/Button";
// import image from "../../../assets/images/icon.png";
import image1 from "../assets/images/24x7.png";
import image2 from "../assets/images/prices.png";
import image3 from "../assets/images/instructors.png";
import image4 from "../assets/images/courses.png";
import "./home.css";
import Card1 from "./cards/card1";
import Card2 from "./cards/card-2";
import Hero from './homepage/hero';
import Features from './homepage/features';
import { useState } from 'react';
function Home() {
  return (
    <div className="bg-[#0B0D16] md:pt-0 pt-0">
      <Hero></Hero>
      <Features></Features>
      {/* <div data-aos="fade-up" data-aos-once="true" className="text-white flex flex-col items-center pt-20 relative">
        <div className="glow">raehejhejh</div>
        <h1 className="text-5xl font-bold text-center">
          Your Gateway to<br></br>{" "}
          <span className="text-5xl font-bold bg-gradient-to-r from-blue-800 via-blue-500 to-blue-100 bg-clip-text text-transparent">
            Remarkable Accomplishment
          </span>
        </h1>
        <p className="text-gray-300 mt-3">
          Master new skills, advance concepts and connect a vibrant global
          community of learners
        </p>
        <div className="mt-10">
          <Button active={true}>Get Started</Button>
        </div>
      </div>
      {/* //Animated diagrams */}
      {/* <div  className=" w-full bg-[#10172A] p-5 h-60 listings cardglow ">
        <div className="contents ">
          <div className="  hoveringeffect relative text-2xl text-white font-bold flex justify-between border-2 border-blue-800">
            <span className="spanitems1 flex flex-col items-center">
              <img src={image1} width="150px" />
              24 x 7 Classes Available
            </span>
            <span className="spanitems2 flex flex-col items-center">
              <img src={image2} width="150px" />
              Affordable Prices
            </span>
            <span className="spanitems3 flex flex-col items-center">
              <img src={image3} width="150px" />
              Best Instructors
            </span>
            <span className="spanitems4 flex flex-col items-center">
              <img src={image4} width="150px" />
              100+ Online courses
            </span>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#10172A] text-white">
        <Card1></Card1>
      </div> */}
      {/* <div>
        <Card2></Card2>
      </div> */}
      <div className='border-b pb-10 border-gray-600'>
        <Footer></Footer>
      </div>
      <div className='text-white flex items-center justify-center p-10'>
        © 2025 SkilluP. All rights reserved. Made with ❤️ for learners worldwide.
      </div>
    </div>
  );
}

export default Home;
