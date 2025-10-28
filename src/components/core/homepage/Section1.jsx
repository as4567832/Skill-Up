// import HighlightText from './HighlightText';
import "./Section1.css";
import Button from "./Button";
// import CodeAnimation from './Codeblock';
import image from "../../../assets/images/icon.png";
import image1 from "../../../assets/images/24x7.png";
import image2 from "../../../assets/images/prices.png";
import image3 from "../../../assets/images/instructors.png";
import image4 from "../../../assets/images/courses.png";
import { TypeAnimation } from "react-type-animation";
function Section1() {
  return (
<div className="">
      <div className="max-w-6xl flex items-center relative  sm:py-[60px] py-[30px] justify-between flex-col xl:flex-row m-auto">
      <div className="text-center xl:text-left xl:w-[36%] mt-16 w-full">
        <h1 className="font-bold text-2xl px-[50px] md:px-0 text-blue-700  xl:text-[40px] md:text-[32px] md:leading-[48px] xl:leading-[50px] mb-[6px]">
          Unlock Your <span className="text-black">Learning Potential</span>
        </h1>
        <div className="text-sm md:text-[16px] px-4 md:px-0 text-center xl:text-start text-[#3D3D3D] mb-3.5 xl:mb-10">
          Master new skills,advance and connect a vibrant global community of
          learners
        </div>
        <Button active={true}>Explore Courses</Button>
      </div>
      <div className="sm:py-4 py-6 flex justify-center relative">
        <div className="relative justify-items-center sm:text-[14px] sm:leading-[20px] text-[12px] leading-[18px] font-[500]">
          <img
            className="sm:block hidden h-[318px] w-[600px] bg-center bg-no-repeat bg-contain"
            src={image}
            alt=""
          />
        </div>

        {/* Speech bubble */}
        <div className="absolute left-1/2 bottom-40 transform -translate-x-1/2 bg-blue-900 text-white p-4 rounded-xl max-w-[250px] text-center">
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-900 rotate-45"></div>
          <TypeAnimation
            sequence={[
              2500,
              "Learning is growth with guidance and care",
              1000, // 2 seconds delay
              "", // clear text
            ]}
            speed={50}
            repeat={Infinity}
          />  
        </div>
        <div className="absolute right-5 bottom-70 transform -translate-x-1/2 bg-blue-900 text-white p-4 rounded-xl max-w-[250px] text-center">
          <div className="absolute -bottom-2 right-0 transform -translate-x-1/2 w-5 h-5 bg-blue-900 rotate-45"></div>
          <TypeAnimation
            sequence={[
              "Sir what is learning",
              6500, // 2 seconds delay
              "", // clear text
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
          <div className=" w-full bg-gray-100 p-5 h-60 listings">
            <div className="contents">
              <div className="relative text-2xl text-red-800 font-bold flex justify-between">
                <span className="spanitems1 flex flex-col items-center"> 
                  <img src={image1} width="150px"/>
                      24 x 7 Classes Available
                </span>
                 <span className="spanitems2 flex flex-col items-center">
                  <img src={image2} width="150px"/>
                  Affordable Prices
                 </span>
                  <span className="spanitems3 flex flex-col items-center"> 
                    <img src={image3} width="150px"/>
                    Best Instructors
                  </span>
                   <span className="spanitems4 flex flex-col items-center"> 
                     <img src={image4} width="150px"/>
                    100+ Online courses
                   </span>
              </div>

            </div>
            </div>
</div>
  );
}
export default Section1;
