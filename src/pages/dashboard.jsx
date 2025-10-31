import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./dashboard/profile";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import Cart from "./dashboard/cart";
import Settings from "./dashboard/settings";
import EnrolledCourses from "./dashboard/enrolledCourses";
import { deleteToken } from "../slices/signupSlice";
import InstructorCourses from "./instructor/instructorCourses";
import AddCourses from "./instructor/addcourses/addcourses";
import Modal from "./instructor/modal";
import { closeModal } from "../slices/modalslice";
import { Menu, X } from "lucide-react";
import LearningPage from "./student/learningpage";

function Dashboard() {
    const token = useSelector((state) => state.signup.token);
    let decode = {};
  if (token) decode = jwtDecode(token);
  const dashboardLinks = [
    {
      name: "Home",
    },
    { name: "Profile" },
    {
      name:
        decode.role === "Instructor"
          ? "Instructor_Courses"
          : "Enrolled_Courses",
      label: decode.role === "Instructor" ? "My Courses" : "Enrolled Courses",
    },
    {
      name: decode.role === "Instructor" ? "AddCourses" : "Cart",
      label: decode.role === "Instructor" ? "Add Courses" : "Cart",
    },
    { name: "Settings" },
  ];
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const [menuOpen, setMenuOpen] = useState(false);



  const [activeTab, setActiveTab] = useState("Profile");
  const [selectedCourse, setSelectedCourse] = useState(null);
    const navigate = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
         navigate("/");
         return null;
      case "Profile":
        return <Profile />;
      case "Enrolled_Courses":
        return <EnrolledCourses onStartLearning ={(courseId)=>{
          setSelectedCourse(courseId);
          setActiveTab("Learning");
        }} />;
      case "Cart":
        return <Cart />;
      case "Settings":
        return <Settings />;
      case "Instructor_Courses":
        return <InstructorCourses />;
      case "AddCourses":
        return <AddCourses />;
      case "Learning":
        return <LearningPage courseId ={selectedCourse}></LearningPage>;  
      default:
        return <Profile />;
    }
  };


  function logoutHandler() {
    localStorage.removeItem(token);
    dispatch(deleteToken(null));
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div className="flex flex-col md:flex-row relative min-h-screen bg-[#0B0F1A]">
      {/* 🔹 Modal Overlay */}
      {isOpen && (
        <div
          onClick={() => dispatch(closeModal(false))}
          className="absolute inset-0 bg-white/50 flex items-center justify-center z-50"
        >
          <Modal />
        </div>
      )}

      {/* 🔹 Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-4 bg-[#131C2F] text-white fixed top-0 left-0 w-full z-30">
        <h1 className="text-2xl font-bold text-purple-600">Skill Up</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Sidebar */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 fixed md:static top-0 left-0 z-20 w-64 bg-[#131C2F] text-white min-h-screen pt-20 md:pt-24`}
      >
        <div className="flex flex-col items-center text-xl p-6 space-y-3">
          <h1 className="hidden md:block text-4xl font-bold text-purple-600 mb-4">
            Skill Up
          </h1>

          {dashboardLinks.map((tab, i) => (
            <div
              key={i}
              className={`w-full p-3 rounded-xl text-center cursor-pointer transition-all duration-300 ${
                activeTab === tab.name
                  ? "shadow-[2px_10px_10px_#35285C] bg-gradient-to-r from-purple-500 to-[#1B1F3A]"
                  : "hover:bg-gray-800"
              }`}
              onClick={() => {
                if(tab.name === "Home"){
                  navigate("/")
                }
                else{
                setActiveTab(tab.name);
                }
                setMenuOpen(false);
              }}
            >
              {tab.label || tab.name}
            </div>
          ))}

          <div
            onClick={logoutHandler}
            className="p-3 w-full text-center rounded-xl hover:bg-gray-800 transition-all duration-300 cursor-pointer"
          >
            Logout
          </div>
        </div>
      </div>

      {/* 🔹 Main Content */}
      <div className="flex-1 mt-16 md:mt-0 ">{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
