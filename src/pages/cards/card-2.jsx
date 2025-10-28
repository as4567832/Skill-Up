import './card2.css'
function Card2(){
    return(
        <div className="bg-[#10172A] overflow-hidden">
            <div className="text-white flex flex-col items-center mt-20"  data-aos="zoom-in">
                <h1 className="text-5xl font-bold">Your Swiss knife to learn anything</h1>
                <p className="my-3 text-gray-400 w-[65%] text-center ">Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
            </div>
            <div className=" flex justify-center relative mt-20  h-screen">   
                <div className="absolute bg-purple-600 w-[200px] h-[300px] gradient "></div>
                <div className="absolute bg-purple-600 w-[300px] h-[300px] gradient2 "></div>
                <div className="absolute bg-purple-600  gradient3 "></div>
                <div className=" border-2 rotate-bg border-blue-400 shadow-white shadow-lg w-[60%]  mt-6 rounded-xl h-[50%]">
                </div>
            </div>
        </div>
    )
}

export default Card2;