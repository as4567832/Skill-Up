import { useEffect, useState } from "react";
import { getCourseDetails } from "../../services/operations/courseDetailsapi";
import { BookOpen } from "lucide-react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


function LearningPage({ courseId }) {
  const [course, setCourse] = useState();
  const[playerContent,setPlayerContent] =useState({
    url:course?.courseContent[0]?.subSection[0]?.videoUrl,
    title:course?.courseContent[0]?.subSection[0]?.title,
    description:course?.courseContent[0]?.subSection[0]?.description
  });
  const[selected,setSelected] = useState(course?.courseContent[0]?.subSection[0]?._id);
  console.log("course id is:", courseId);
  const getUserCourseDetails = async () => {
    try {
      const response = await getCourseDetails(courseId);
      setCourse(response);
    } catch (error) {
      console.log("Error occured while fetching course details", error);
    }
  };
  console.log(course);
  useEffect(() => {
    getUserCourseDetails();
  }, [courseId]);
  useEffect(() => {
    if (course && course.courseContent?.length > 0) {
      const firstSection = course.courseContent[0];
      const firstSub = firstSection?.subSection?.[0];
      if (firstSub) {
        setPlayerContent({
          url: firstSub.videoUrl,
          title: firstSub.title,
          description: firstSub.description,
        });
        setSelected(firstSub._id);
      }
    }
  }, [course]);
  async function playSelectedVideo(sub){
    setSelected(sub._id);
    setPlayerContent({
        url:sub.videoUrl,
        title:sub.title,
        description:sub.description
    });
    console.log(course);
  }
  return (
    <div className="p-5 flex gap-5">
      <div className="w-[55%] h-[40%] bg-[#15161C] overflow-hidden rounded-xl">
        <video className="" src={playerContent.url} controls width="600px"></video>
         <h1 className="text-white px-5 text-3xl mt-5  font-bold">{playerContent.title}</h1>
         <p className=" mt-5 px-5 text-gray-300">{playerContent.description}</p>
         <button className="p-3 rounded-xl my-3 bg-purple-600 w-full">Rewatch Lesson</button>
      </div>
      <div className="w-[40%] p-5 bg-[#161720] rounded-xl">
      <div className="flex gap-3 text-white text-xl font-bold items-center justify-start">
        <BookOpen/>
        <h1>Course Content</h1>
      </div>
        {
            course?.courseContent?.map((section)=>(
                <div className="p-5 text-white font-bold" key={section._id}>
                    <h4 className="pb-3">Section 1: {section.sectionName}</h4>
                    {section.subSection.map((sub)=>(
                        <div className="px-5 p-1" key={sub._id}>
                            <div  onClick={()=>playSelectedVideo(sub)} className={`${selected === sub._id ? "cursor-pointer flex rounded-md bg-[#2D2448] font-normal  border border-gray-600 p-3 gap-3 items-center text-green-600":"cursor-pointer flex rounded-md  font-normal  hover:bg-blue-600 p-3 gap-3 items-center text-green-600"}`}> <IoMdCheckmarkCircleOutline className="z-20" /><h4 className="text-white">{sub.title}</h4></div>
                        </div>
                    ))}
                </div>
            ))
        }
      </div>
    </div>
  );
}
export default LearningPage;
