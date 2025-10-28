import CatalogCard from "./cards/catalogcards";
import FeatureCards from "./cards/featurecards";
import { useEffect, useState } from "react";
import {
  fetchCourseCategories,
  showAllCourses,
} from "../../services/operations/courseDetailsapi";
import { Star, ShoppingCart } from "lucide-react";
import { addToCart } from "../../slices/cartSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Footer from "../../components/Common/Footer";

function Features() {
  const [fetchedCourses, setFetchedCourses] = useState([]);
  const [categories, setCourseCategories] = useState([]);
  const dispatch = useDispatch();

  async function getAllCategories() {
    const response = await fetchCourseCategories();
    const allCategories = [{ _id: "all", name: "All Courses" }, ...response];
    setCourseCategories(allCategories);
  }

  async function showallcourses() {
    const response = await showAllCourses();
    setFetchedCourses(response);
  }

  async function addToCartCourse(course) {
    dispatch(addToCart(course));
    toast.success("course added succesfully");
    console.log("Added course is", course);
  }

  useEffect(() => {
    getAllCategories();
    showallcourses();
  }, []);

  const courses = [
    {
      id: 1,
      name: "Web Development",
      icon: "Code",
      description: "Find the perfect course in your area of interest",
      availableCourses: 250,
    },
    {
      id: 2,
      name: "Design",
      icon: "Brain",
      description: "Find the perfect course in your area of interest",
      availableCourses: 180,
    },
    {
      id: 3,
      name: "Business",
      icon: "TrendingUp",
      description: "Find the perfect course in your area of interest",
      availableCourses: 150,
    },
    {
      id: 4,
      name: "IoT & AI",
      icon: "BookOpen",
      description: "Find the perfect course in your area of interest",
      availableCourses: 120,
    },
    {
      id: 5,
      name: "Photography",
      icon: "Camera",
      description: "Find the perfect course in your area of interest",
      availableCourses: 90,
    },
    {
      id: 6,
      name: "Music",
      icon: "Music",
      description: "Find the perfect course in your area of interest",
      availableCourses: 75,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0D16] pb-20 border-b border-gray-600 flex-col flex items-center ">
      <div className=" text-center text-white  p-10 py-20">
        <h1 className="text-5xl font-bold">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
            Skill Up?
          </span>{" "}
        </h1>
        <p className="text-gray-400 my-3 text-xl">
          Join thousands of students learning with the best instructors
        </p>
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <FeatureCards></FeatureCards>
        <FeatureCards></FeatureCards>
        <FeatureCards></FeatureCards>
      </div>
      <div className=" text-center text-white  p-10 py-20">
        <h1 className="text-4xl font-bold">
          Explore Categories{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
            Skill Up?
          </span>{" "}
        </h1>
        <p className="text-gray-400 my-3 text-lg">
          Find the perfect course in your area of interest
        </p>
      </div>
      <div className="flex flex-wrap gap-10 p-10 items-center justify-center">
        {courses.map((course, index) => (
          <div key={course.id}>
            <CatalogCard
              icon={course.icon}
              index={index}
              category={course.name}
              description={course.description}
            ></CatalogCard>
          </div>
        ))}
      </div>
      {/* Random 4 Courses Section */}
      <div className="text-center text-white p-10 py-20">
        <h1 className="text-4xl font-bold">
          Popular Courses{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
            Just for You
          </span>
        </h1>
        <p className="text-gray-400 my-3 text-lg">
          Discover trending and popular courses chosen for you
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-12 px-10">
        {fetchedCourses
          .sort(() => 0.5 - Math.random()) // randomize
          .slice(0, 4) // pick 4
          .map((course) => (
            <div
              key={course._id}
              className="bg-[#171E27] rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 w-[280px]"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700"
                  src={course.thumbnail}
                  alt={course.courseName}
                />
                <span className="absolute  text-white top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-xs px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                  {course.category?.name || "Development"}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-lg text-white font-bold mb-1 truncate hover:text-purple-400 transition-colors">
                  {course.courseName}
                </h2>
                <p className="text-gray-400 text-sm mb-3">
                  By{" "}
                  <span className="text-purple-400">
                    {course.instructor?.firstName} {course.instructor?.lastName}
                  </span>
                </p>

                {/* Ratings */}
                <div className="flex items-center text-yellow-400 mb-3">
                  <Star className="w-4 h-4 mr-1" fill="currentColor" />
                  <span className="font-semibold">
                    {course.ratingAndReviews?.length || 0}
                  </span>
                  <span className="text-gray-400 text-sm ml-1">reviews</span>
                </div>

                {/* Price */}

                {/* Buttons */}
                <div className="flex gap-3 justify-center items-center">
                  <p className="text-2xl my-4 font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-5">
                    ₹{course.price}
                  </p>
                  <button
                    onClick={() => addToCartCourse(course)}
                    className="flex-1 bg-gradient-to-tl from-purple-500 to-blue-500 flex items-center justify-center gap-2 p-2  rounded-xl font-semibold  transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <ShoppingCart className="w-4 h-4" /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Features;
