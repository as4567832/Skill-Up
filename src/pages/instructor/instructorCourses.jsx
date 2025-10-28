import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchInstructorCourses } from "../../services/operations/courseDetailsapi";
import { FaStar } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

function InstructorCourses() {
  const token = useSelector((state) => state.signup.token);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const getInstructorCourses = async () => {
    try {
      setLoading(true);
      const response = await fetchInstructorCourses(token);
      setCourses(response.data.data);
      console.log("Your fetched courses are", response);
      setLoading(false);
    } catch (error) {
      console.error("Error while fetching your courses", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) getInstructorCourses();
  }, [token]);

  return (
    <div className="min-h-screen p-10 bg-[#0B0F1A]">
      {/* Header */}
      <div className="mb-8 bg-[#0B0F1A]">
        <h1 className="text-white font-bold text-4xl">My Courses</h1>
        <p className="my-2 text-gray-400">Manage and edit your courses</p>
      </div>

      {/* Loading state */}
      {loading ? (
        <p className="text-white text-center mt-10">Loading courses...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-[#0F1729] rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg"
            >
              {/* Image with placeholder & lazy load */}
              <div className="w-full aspect-[16/9] bg-[#0F1729] overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.courseName}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Course Status & Category */}
              <div className="flex justify-between p-5">
                <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
                  Published
                </span>
                <span className="px-3 py-1 border border-gray-600 text-white rounded-full text-sm">
                  Web Development
                </span>
              </div>

              {/* Ratings */}
              <div className="flex items-center px-5 gap-2">
                <div className="flex items-center gap-1 px-4 py-1 border border-purple-800 rounded-full">
                  <FaStar className="text-purple-600" />
                  <span className="text-purple-600 font-bold">4.7</span>
                </div>
                <span className="text-gray-300">(1,339 reviews)</span>
              </div>

              {/* Students & Price */}
              <div className="flex justify-between items-center px-5 py-3">
                <div className="flex items-center gap-1 px-4 py-1 border border-orange-800 bg-[#2C2733] rounded-full">
                  <IoPersonSharp className="text-orange-600" />
                  <span className="text-orange-600 font-bold">
                    {course.students || "0"} Students
                  </span>
                </div>
                <div className="text-2xl text-purple-600 font-bold flex items-center gap-1">
                  <span>&#8377;</span>
                  <span>{course.price}</span>
                </div>
              </div>

              {/* Course Name */}
              <div className="px-5 pb-5">
                <h1 className="text-xl text-white font-semibold">{course.courseName}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InstructorCourses;
