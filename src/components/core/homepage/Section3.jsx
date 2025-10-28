import "./css/Section3.css";
import HighlightText from "./HighlightText";
import Banner from "../../../assets/videos/home.mp4";
import Button from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Card from "./Card";
function Section3() {
  return (
    <div className="mainelem flex flex-col justify-center items-center">
      <div className="flex">
        <div className="videobg w-[50%] border-3 bg-transparent border-yellow-500 rounded-lg overflow-hidden text-white bg-black shadow-[0_0_10px_#90D5FF,0_0_20px_#90D5FF,0_0_10px_#90D5FF]">
          <video loop muted autoPlay>
            <source></source>
          </video>
        </div>
        <div className="mx-20 my-10 font-bold text-white w-[50%]">
          <div className="text-5xl">
            Become an
            <br className="my-4"></br>
            <HighlightText text={"Instructor"}></HighlightText>
          </div>
          <p className="text-base my-5 text-gray-500">
            Instructors from around the world teach millions of students on
            skillsahre. We provide the tools and skills to teach where you love.
          </p>
          <div className="w-[40%]">
            <Button active={true}>
              Start Teaching Today <FaLongArrowAltRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="reviews flex flex-col justify-center items-center w-[100%] my-20">
        <div className="text-4xl font-bold text-white flex">
            Reviews from other learners
        </div>
        <div className="flex gap-5 my-10 p-5">
            <Card border={'border-3 bg-transparent border-yellow-500 rounded-lg overflow-hidden text-white bg-black shadow-[0_0_10px_#90D5FF,0_0_20px_#90D5FF,0_0_10px_#90D5FF]'}></Card>
            <Card border={'border-3 bg-transparent border-yellow-500 rounded-lg overflow-hidden text-white bg-black shadow-[0_0_10px_#90D5FF,0_0_20px_#90D5FF,0_0_10px_#90D5FF]'}></Card>
            <Card border={'border-3 bg-transparent border-yellow-500 rounded-lg overflow-hidden text-white bg-black shadow-[0_0_10px_#90D5FF,0_0_20px_#90D5FF,0_0_10px_#90D5FF]'}></Card>
            <Card border={'border-3 bg-transparent border-yellow-500 rounded-lg overflow-hidden text-white bg-black shadow-[0_0_10px_#90D5FF,0_0_20px_#90D5FF,0_0_10px_#90D5FF]'}></Card>
            <Card border={'border-3 bg-transparent border-yellow-500 rounded-lg overflow-hidden text-white bg-black shadow-[0_0_10px_#90D5FF,0_0_20px_#90D5FF,0_0_10px_#90D5FF]'}></Card>
        </div>
      </div>
    </div>
  );
}

export default Section3;
