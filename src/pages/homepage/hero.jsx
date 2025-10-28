import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="min-h-screen md:pt-20 pt-0 bg-[#0B0D17] relative flex flex-col justify-center items-center overflow-hidden px-4">
      {/* Background gradient blobs */}
      <div className="absolute w-[300px] h-[200px] bg-cyan-400 blur-[150px] rounded-full top-1/4 left-[60%] opacity-40"></div>
      <div className="absolute w-[300px] h-[200px] bg-purple-800 blur-[150px] rounded-full top-1/3 right-[60%] opacity-40"></div>

      {/* Hero Text */}
      <div className="text-center z-10 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
          Learn. Create.{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
            Grow.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          Master new skills with world-class courses from expert instructors. Your journey to excellence starts here.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 justify-center z-10 mb-12">
        <button className="bg-gradient-to-r from-[#7B6FF3] to-[#32C1F8] flex items-center gap-3 py-3 px-8 rounded-xl font-semibold text-white text-lg hover:scale-105 transition-transform duration-300">
          Start Learning <FaArrowRight />
        </button>
        <button className="bg-[#0C0E18] border border-purple-700 py-3 px-8 rounded-xl font-semibold text-purple-500 text-lg hover:bg-purple-900/20 transition-all duration-300">
          Become an Instructor
        </button>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center bg-[#10131F] text-gray-300 p-8 rounded-2xl shadow-xl gap-10 z-10 backdrop-blur-md bg-opacity-40">
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-500">50K+</p>
          <p className="text-lg opacity-80">Students</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-500">1K+</p>
          <p className="text-lg opacity-80">Courses</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-500">500+</p>
          <p className="text-lg opacity-80">Expert Instructors</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
