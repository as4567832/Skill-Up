import { BookOpen } from "lucide-react";
import CatalogCard from "./homepage/cards/catalogcards";
import Footer from '../components/Common/Footer'
import { SlGraph } from "react-icons/sl";
function AboutUs() {
const courses = [
  {
    id: 1,
    name: "Our Mission",
    icon: "Target",
    description:
      "To democratize education and make world-class learning accessible to everyone, anywhere.",
  },
  {
    id: 2,
    name: "Innovation",
    icon: "Lightbulb",
    description:
      "We embrace cutting-edge technology to craft engaging and personalized learning experiences for every learner.",
  },
  {
    id: 3,
    name: "Community",
    icon: "Users",
    description:
      "We’re building a vibrant global community of learners, educators, and innovators who inspire and support one another.",
  },
  {
    id: 4,
    name: "Excellence",
    icon: "Star",
    description:
      "We strive for excellence in everything we do from content creation to teaching methodology and learner success.",
  },
  {
    id: 5,
    name: "Integrity",
    icon: "ShieldCheck",
    description:
      "We believe in transparency, honesty, and trust as the foundation of meaningful and impactful education.",
  },
  {
    id: 6,
    name: "Accessibility",
    icon: "Globe",
    description:
      "Education should have no barriers — we make learning opportunities available to everyone, everywhere.",
  },
];


  return (
    <div className="bg-[#0C0E17]">
      <div className="text-center pt-20 mx-60">
        <h1 className="text-7xl font-bold text-white">Empowering Learners</h1>
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-100">
          Worldwide
        </h1>
        <p className="text-xl my-3 text-gray-400">
          {" "}
          At LearnHub, we're on a mission to transform education through
          technology, making quality learning accessible, engaging, and
          effective for everyone — no matter where they are.
        </p>
      </div>
      <div className="flex  mt-40 mb-20 mx-10 rounded-xl pt-10 pb-10 pr-20 pl-20 justify-between items-center border border-gray-600">
        <div className=" ">
          <p className="text-6xl font-bold text-blue-800">50K+</p>
          <p className="text-gray-400 text-xl my-3">Active Students</p>
        </div>
        <div className=" ">
          <p className="text-6xl font-bold text-blue-800">500+</p>
          <p className="text-gray-400 text-xl my-3">Expert Instructors</p>
        </div>
        <div className=" ">
          <p className="text-6xl font-bold text-blue-800">1000+</p>
          <p className="text-gray-400 text-xl my-3">Online Courses</p>
        </div>
        <div className=" ">
          <p className="text-6xl font-bold text-blue-800">90%</p>
          <p className="text-gray-400 text-xl my-3">Success Rate</p>
        </div>
      </div>
      <div className="p-10 flex items-center justify-center gap-10">
        <div className="w-[50%]" >
          <h1 className="text-white text-5xl font-bold mb-5">
            Our{" "}
            <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-100">
              Story
            </span>
          </h1>
          <p className="text-gray-400">
            In 2024, I created LearnHub as part of my vision to make education
            accessible and inclusive for everyone. The idea was born from a
            simple belief — that learning should be a right, not a privilege.
            <br />
            As a passionate learner and aspiring technologist, I noticed the
            growing gap between traditional classroom methods and the modern
            digital learning experience. To bridge this gap, I conceptualized
            LearnHub — a platform that combines technology, creativity, and
            human connection to redefine how people learn.
            <br />
            LearnHub represents my commitment to building an ecosystem where
            expert instructors and motivated learners come together to share
            knowledge, upskill, and grow. Every element of the platform — from
            its design to its learning approach — is focused on one goal:
            helping learners reach their full potential and achieve their
            dreams.
            <br />I truly believe in education without boundaries — where
            anyone, anywhere, can learn, grow, and succeed through the power of
            technology.
          </p>
        </div>
        <div className="bg-[#161820] border  border-gray-600 rounded-xl pt-20 pb-20">
            <style>
            {`
              @keyframes updown {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
              }
            `}
          </style>
            <BookOpen  size={140} className="[animation:updown_1.5s_ease-in-out_infinite] text-purple-500 mx-60 "></BookOpen>
            <h1 className="text-2xl my-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-100 font-bold"> Education Without Boundaries</h1>
        </div>
      </div>
      <div className="bg-[#0B141D] pb-20 pt-20">
        <h1 className="text-4xl font-bold my-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-100 font-bold">Our Values</h1>
        <p className="text-center text-xl text-gray-400"> The principles that guide everything we do</p>
         <div className="flex   flex-wrap gap-10  p-10 items-center justify-center">
        {courses.map((course, index) => (
          <div key={course.id}>
            <CatalogCard
              icon={course.icon}
              index={index}
              category={course.name}
              description={course.description}
            ></CatalogCard>
          </div>
        ))}
      </div>
      </div>
          <div className="flex items-center justify-center p-20">
            <div className="w-full  my-20  bg-[#1A1B22] rounded-2xl p-8 md:p-12 text-center border border-gray-800 shadow-2xl shadow-blue-500/10">
      
      {/* Icon */}
      <div className="flex text-6xl text-white bg-gradient-to-r from-purple-800 to-blue-600 inline-flex p-5 rounded-2xl justify-center mb-6">
          <SlGraph />
      </div>
      
      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
        Join Our{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Journey
        </span>
      </h2>
      
      {/* Description */}
      <p className="text-gray-400 max-w-lg mx-auto mb-8 text-base md:text-lg">
        Whether you're here to learn new skills or to share your expertise, you're 
        part of something bigger — a community reshaping the future of education.
      </p>
      
      {/* Button Group */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Primary Button */}
        <button className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
          Start Learning Today
        </button>
        
        {/* Secondary Button */}
        <button className="px-6 py-3 font-semibold text-gray-300 bg-[#2C2D3A] border border-gray-700 rounded-lg hover:bg-gray-700/80 transition-all duration-300">
          Become an Instructor
        </button>
      </div>
    </div>
          </div>
          <Footer></Footer>
    </div>
  );
}
export default AboutUs;
