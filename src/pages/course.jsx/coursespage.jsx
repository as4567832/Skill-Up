import { useEffect, useState } from "react";
import {
  fetchCourseCategories,
  showAllCourses,
} from "../../services/operations/courseDetailsapi";
import CategoryCard from "./categorycard";
import { Star, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { toast } from "react-toastify";

function CoursesPage() {
  const [categories, setCourseCategories] = useState([]);
  const [fetchedCourses, setFetchedCourses] = useState([]);
  const dispatch = useDispatch();

  const categoryIconMap = {
    "All Courses": "BookOpen",
    "Development": "Code",
    "Design": "Brain",
    "Business": "TrendingUp",
    "Marketing": "Briefcase",
    "Creative Arts": "Paintbrush",
    "Photography": "Camera",
    "Music": "Music",
  };

  const defaultIcon = "BookOpen";

  async function getAllCategories() {
    const response = await fetchCourseCategories();
    const allCategories = [{ _id: "all", name: "All Courses" }, ...response];
    setCourseCategories(allCategories);
  }

  async function showallcourses() {
    const response = await showAllCourses();
    setFetchedCourses(response);
  }

  async function addToCartCourse(course){
    dispatch(addToCart(course));
    toast.success("course added succesfully");
    console.log("Added course is",course);

  }

  useEffect(() => {
    getAllCategories();
    showallcourses();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-[#0F1629] via-[#1A1040] to-[#260E5C] text-white">
      {/* ---------- Hero Section ---------- */}
      <div className="relative w-full flex flex-col items-center justify-center py-32 border-b border-purple-800/40 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-purple-600/40 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full bg-pink-500/30 blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.2),_transparent_40%)]"></div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent z-10">
          Course Catalog
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 text-center max-w-3xl z-10">
          Explore 50,000+ expert-led courses. Find the perfect one to achieve your dreams.
        </p>

        <div className="relative mt-10 w-[80%] md:w-[55%] z-10">
          <input
            type="text"
            placeholder="Search for courses, instructors or topics..."
            className="w-full p-5 bg-[#1E1A3E]/70 backdrop-blur-md border border-purple-600/30 text-white rounded-2xl outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 transition-all duration-300"
          />
          <button className="absolute right-3 top-3 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
            Search
          </button>
        </div>
      </div>

      {/* ---------- Categories Section ---------- */}
      <div className="py-20 px-10 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Browse by Category
        </h2>

        <div className="flex flex-wrap gap-6  items-center justify-center">
          {categories.map((category) => (
            <div
              key={category._id}
              className="transform hover:scale-105 transition duration-300"
            >
              <CategoryCard
                name={category.name}
                icon={categoryIconMap[category.name] || defaultIcon}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Courses Grid Section ---------- */}
      <div className="px-10 pb-20 relative z-10">
        <h1 className="font-bold text-4xl text-purple-400 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text mb-12 text-center">
          All Courses
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {fetchedCourses.map((course) => (
            <div
              key={course._id}
              className="bg-gradient-to-tl from-[#1E1635]/80 to-[#2A1F4A]/60 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(139,92,246,0.25)] hover:shadow-[0_15px_40px_rgba(236,72,153,0.35)] transition-all duration-500 transform hover:-translate-y-3 w-full max-w-sm"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  src={course.thumbnail}
                  alt={course.courseName}
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-xs px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                  {course.category?.name || "Development"}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg md:text-xl font-bold mb-2 truncate hover:text-purple-400 transition-colors">
                  {course.courseName}
                </h2>
                <p className="text-gray-400 text-sm mb-3">
                  By{" "}
                  <span className="text-purple-400">
                    {course.instructor?.firstName} {course.instructor?.lastName}
                  </span>
                </p>

                {/* Ratings */}
                <div className="flex items-center text-yellow-400 mb-4">
                  <Star className="w-5 h-5 mr-1" fill="currentColor" />
                  <span className="font-semibold">
                    {course.ratingAndReviews?.length || 0}
                  </span>
                  <span className="text-gray-400 text-sm ml-1">reviews</span>
                </div>

                {/* Price */}
                <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-6">
                  ₹{course.price}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button onClick={()=>addToCartCourse(course)} className="flex-1 flex items-center justify-center gap-2 p-3 bg-[#2c1f4a]/70 rounded-xl font-semibold hover:bg-[#3c2a6d]/90 transition-all duration-300 shadow-md hover:shadow-lg">
                    <ShoppingCart className="w-5 h-5" /> Add
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
