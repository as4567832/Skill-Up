import "./card1.css";
import { FaUsers } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";



function Card1(){
    return(
        <div className="card w-full  flex">
            <div data-aos="zoom-in"  className="mx-16 w-[50%] timeline " >
                <h1 className="text-5xl text-start  font-bold">Explore Skill Up <br></br> <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-100 text-transparent bg-clip-text">Learning Resourses</span></h1>
                <div class="h-80 mx-6 my-10 border-l-2 border-dotted border-cyan-400 relative">
                    <div className="absolute flex items-center justify-center w-[50px] transform border-4 border-blue-800 translate-x-[-50%] h-[50px] bg-black rounded-full"><FaUsers />
</div>
                    <div className="absolute flex items-center justify-center w-[50px] transform border-4 border-blue-800 translate-x-[-50%] my-40  h-[50px] bg-black rounded-full"><FaCheckCircle />
</div>
                    <div className="absolute flex items-center justify-center w-[50px] transform border-4 border-blue-800 translate-x-[-50%] my-80 h-[50px] bg-black rounded-full"><FaSyncAlt />
</div>            <div className=" mx-16  ">
                        <h1 className="font-semibold pt-2 text-xl ">Leadership</h1>
                        <p className="font-normal text-gray-400">Master Core subjects with engaging video lectures, easy to follow modules, and insightful analytics to monitor your progress</p>
                    </div>

                    <div className=" mx-16 my-16 ">
                        <h1 className="font-semibold  text-xl ">Responsibility</h1>
                        <p className="font-normal text-gray-400">Master Core subjects with engaging video lectures, easy to follow modules, and insightful analytics to monitor your progress</p>
                    </div>

                     <div className=" mx-16 my-18 ">
                        <h1 className="font-semibold text-xl ">Flexibility</h1>
                        <p className="font-normal text-gray-400">Master Core subjects with engaging video lectures, easy to follow modules, and insightful analytics to monitor your progress</p>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" className="w-[50%]  h-screen flex items-center justify-center mx-10">
                <div className="h-[300px] w-[600px] rounded-xl">
                    <div className="h-80  flex justify-center items-center">
                        <span className="buttons"><button>Watch Lectures</button></span>
                        <div className="buttonbg  absolute"></div>
                    </div>
                    
                </div>

            </div>
        
        </div>
    )
}

export default Card1;