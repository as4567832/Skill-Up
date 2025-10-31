import { BookOpen } from "lucide-react";
import CatalogCard from "./homepage/cards/catalogcards";
import Footer from "../components/Common/Footer";
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
    <div className="bg-[#0C0E17] text-white">
      <div className="text-center px-4 pt-16 md:pt-24 md:px-20 lg:px-60">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
          Empowering Learners
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-100">
          Worldwide
        </h1>
        <p className="text-sm md:text-lg lg:text-xl p-3 my-3 text-gray-400">
          At LearnHub, we're on a mission to transform education through
          technology, making quality learning accessible, engaging, and
          effective for everyone — no matter where they are.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 mt-20 mb-10 mx-4 md:mx-10 lg:mx-20 rounded-xl p-8 md:p-16 border border-gray-600">
        {[
          { number: "50K+", label: "Active Students" },
          { number: "500+", label: "Expert Instructors" },
          { number: "1000+", label: "Online Courses" },
          { number: "90%", label: "Success Rate" },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-4xl md:text-6xl font-bold text-blue-800">
              {item.number}
            </p>
            <p className="text-gray-400 text-base md:text-xl my-3">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12 md:px-16 lg:px-24">
        <div className="md:w-[50%] w-full text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-100">
              Story
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            In 2025, I created LearnHub as part of my vision to make education
            accessible and inclusive for everyone. The idea was born from a
            simple belief — that learning should be a right, not a privilege.
            <br />
            <br />
            As a passionate learner and aspiring technologist, I noticed the
            growing gap between traditional classroom methods and the modern
            digital learning experience. To bridge this gap, I conceptualized
            LearnHub — a platform that combines technology, creativity, and
            human connection to redefine how people learn.
            <br />
            <br />
            LearnHub represents my commitment to building an ecosystem where
            expert instructors and motivated learners come together to share
            knowledge, upskill, and grow. Every element of the platform — from
            its design to its learning approach — is focused on one goal:
            helping learners reach their full potential and achieve their
            dreams.
            <br />
            <br />I truly believe in education without boundaries — where
            anyone, anywhere, can learn, grow, and succeed through the power of
            technology.
          </p>
        </div>

        <div className="bg-[#161820] border border-gray-700 rounded-xl p-10 w-full md:w-[40%] flex flex-col items-center">
          <BookOpen
            size={100}
            className="animate-bounce text-purple-500 mb-6"
          />
          <h1 className="text-xl md:text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-100 font-bold">
            Education Without Boundaries
          </h1>
        </div>
      </div>

      <div className="bg-[#0B141D] pb-20 pt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-100">
          Our Values
        </h1>
        <p className="text-center text-sm md:text-lg text-gray-400 mb-10">
          The principles that guide everything we do
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-10 place-items-center">
          {courses.map((course, index) => (
            <CatalogCard
              key={course.id}
              icon={course.icon}
              index={index}
              category={course.name}
              description={course.description}
            />
          ))}
        </div>
      </div>

      {/* Join Our Journey Section */}
      <div className="flex items-center justify-center px-4 py-12 md:px-16 lg:px-24">
        <div className="w-full bg-[#1A1B22] rounded-2xl p-6 md:p-12 text-center border border-gray-800 shadow-2xl shadow-blue-500/10">
          <div className="flex justify-center mb-6">
            <div className="text-5xl md:text-6xl text-white bg-gradient-to-r from-purple-800 to-blue-600 p-5 rounded-2xl">
              <SlGraph />
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-4">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Journey
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-lg max-w-lg mx-auto mb-8">
            Whether you're here to learn new skills or to share your expertise,
            you're part of something bigger — a community reshaping the future
            of education.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Learning Today
            </button>
            <button className="px-6 py-3 font-semibold text-gray-300 bg-[#2C2D3A] border border-gray-700 rounded-lg hover:bg-gray-700/80 transition-all duration-300">
              Become an Instructor
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
