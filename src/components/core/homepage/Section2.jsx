import HighlightText from "./HighlightText";
import './css/Section2.css'
import Card from "./Card";
import Card2 from "./Card2";
import Button from "./Button";
import Banner from "../../../assets/videos/home.mp4"
function Section2(){
   return(
    <div className= "section2 bg-gray-100 h-screen p-10">
      <div className="flex items-center flex-col ">
        <h1 className="text-4xl font-bold">A Platform Trusted by Students and Teachers</h1>
        <p className="font-semibold text-xl text-gray-700 my-2">Learning with Skill Up means seeing results in real numbers."</p>
      </div>
       <div className="flex gap-14 my-10 ">
         <Card border={'border-3 bg-transparent border-yellow-500 rounded-lg p-6 text-white bg-black shadow-[0_0_10px_#FFDE21,0_0_20px_#FFDE21,0_0_10px_#FFDE21]'} ></Card>
        <Card border={'border-3 bg-transparent border-yellow-500 rounded-lg p-6 text-white bg-black shadow-[0_0_10px_#90D5FF,0_0_20px_#90D5FF,0_0_10px_#90D5FF]'} ></Card>
        <Card border={'border-3 bg-transparent border-yellow-500 rounded-lg p-6 text-white bg-black shadow-[0_0_10px_#90D5FF,0_0_20px_#90D5FF,0_0_10px_#90D5FF]'} ></Card>
        </div>
    </div>
   )
}
export default Section2;