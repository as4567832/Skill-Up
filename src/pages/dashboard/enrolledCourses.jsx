import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../services/operations/profileApi";
import { FaStar } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

function EnrolledCourses({onStartLearning}) {
  const { token } = useSelector((state) => state.signup);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEnrolledCoursesData = async () => {
    setLoading(true);
    try {
      const response = await getUserEnrolledCourses(token);
      // assuming API response: { success: true, data: [...] }
      setEnrolledCourses(response);
    } catch (error) {
      console.log("Unable to fetch courses:", error.message);
      setEnrolledCourses([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) getEnrolledCoursesData();
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-white text-xl">
        Loading enrolled courses...
      </div>
    );
  }

  if (!enrolledCourses.length) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] text-gray-400">
        <h2 className="text-2xl font-semibold mb-2">No Courses Enrolled</h2>
        <p className="text-center max-w-sm">
          You haven't enrolled in any courses yet. Browse courses and start learning today!
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10  pt-10 pl-10">
  <h1 className="text-4xl md:text-5xl md:text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
     Your Learning Journey
  </h1>
  <p className="text-gray-400 mt-2 text-lg">
    Dive into the courses you've enrolled in and keep leveling up!
  </p>
</div>

      <div className="flex flex-wrap gap-5 items-center justify-center p-5">
      {enrolledCourses.map((course,index) => (
        <div
          key={index}
          className="bg-[#0F1729] rounded-2xl overflow-hidden shadow-lg flex flex-col w-[300px] transition-transform hover:scale-105"
        >
          {/* Course Image */}
          <div className="w-full aspect-[16/9] bg-[#1A202C] overflow-hidden">
            <img
              src={course.thumbnail}
              alt={course.courseName}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
            />
          </div>
           <div className=" p-5">
            <h1 className="text-xl text-white font-semibold">{course.courseName}</h1>
          </div>

          {/* Course Status & Category */}
          <div className="flex justify-between px-5 py-3">
            <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
              Published
            </span>
            <span className="px-3 py-1 border border-gray-600 text-white rounded-full text-sm">
              {course.category || "Web Development"}
            </span>
          </div>

          {/* Ratings */}
          <div className="flex items-center px-5 gap-2">
            <div className="flex items-center gap-1 px-3 py-1 border border-purple-800 rounded-full">
              <FaStar className="text-purple-600" />
              <span className="text-purple-600 font-bold">{course.rating || 4.5}</span>
            </div>
            <span className="text-gray-400 text-sm">({course.totalReviews || 0} reviews)</span>
          </div>

          {/* Students & Price */}
          <div className="flex justify-between items-center px-5 py-3">
            <div className="flex items-center gap-1 px-3 py-1 border border-orange-800 bg-[#2C2733] rounded-full">
              <IoPersonSharp className="text-orange-600" />
              <span className="text-orange-600 font-bold">
                {course.students || 0} Students
              </span>
            </div>
            <div className="text-2xl text-purple-600 font-bold flex items-center gap-1">
              <span>&#8377;</span>
              <span>{course.price}</span>
            </div>
          </div>   
          <div  className="flex justify-center items-center px-5 py-3">  <button onClick={()=>onStartLearning(course.courseName)} className="flex-1 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                    Start Learning
                  </button></div>      
        </div>
      ))}
    </div>
    </div>
  );
}

export default EnrolledCourses;
