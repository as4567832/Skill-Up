import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./dashboard/profile";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./dashboard/cart";
import Settings from "./dashboard/settings";
import EnrolledCourses from "./dashboard/enrolledCourses";
import { deleteToken } from "../slices/signupSlice";
import InstructorCourses from "./instructor/instructorCourses";
import AddCourses from "./instructor/addcourses/addcourses";
import Modal from "./instructor/modal";
import { closeModal } from "../slices/modalslice";


function Dashboard() {
  const dispatch = useDispatch();
  const{isOpen} = useSelector((state)=>state.modal);
  console.log("Modal is:",isOpen);
  const token = useSelector((state) => state.signup.token);
  let decode = {};
  if (token) {
    decode = jwtDecode(token);
    // console.log(decode);
  }
  const [activeTab, setActiveTab] = useState("Profile");

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <Profile></Profile>;
      case "Enrolled_Courses":
        return <EnrolledCourses></EnrolledCourses>;
      case "Cart":
        return <Cart></Cart>;
      case "Settings":
        return <Settings></Settings>;
      case "Instructor_Courses":
        return <InstructorCourses></InstructorCourses>;
      case "AddCourses":
        return <AddCourses></AddCourses>;
      default:
        return <Profile></Profile>;
    }
  };
const navigate = useNavigate();
  function logoutHandler() {
    localStorage.removeItem(token);
    dispatch(deleteToken(null));
    localStorage.clear();
    navigate("/login");
    
  }
  return (
    <div className="flex  relative">
      <div onClick={()=>dispatch(closeModal(false))} className={` ${isOpen ===true ? " ":"hidden "}absolute h-[100%] bg-white bg-opacity-50  p-5 flex items-center justify-center transform translate-x-[0%] translate-y-[0%] w-[100%]`}>
         <Modal></Modal>
      </div>
      <div className="w-[25%] min-h-screen pt-20 bg-[#131C2F] z-20 fixed top-0 left-0 h-screen">
        <div className="flex items-center flex-col text-xl p-6 text-white">
          <h1 className="mb-5 mt-5 text-4xl font-bold text-purple-600">Skill Up</h1>
          <div className={`${activeTab ==="Profile" ? "p-3 shadow-[2px_10px_10px_#35285C] bg-gradient-to-r from-purple-500  to-[#1B1F3A] w-full flex items-center flex-col mt-3 rounded-xl":"p-3  w-full flex items-center flex-col mt-3 rounded-xl"}`}>
            <button onClick={()=>setActiveTab("Profile")}>Profile</button>
          </div>
          <div className={`${activeTab ==="Instructor_Courses" ? "p-3 shadow-[2px_10px_10px_#35285C] bg-gradient-to-r from-purple-500  to-[#1B1F3A] w-full flex items-center flex-col mt-3 rounded-xl":"p-3  w-full flex items-center flex-col mt-3 rounded-xl hover:bg-gray-800 transition-all duration-300"}`}>
            {
              decode.role==="Instructor"?(<button onClick={()=>setActiveTab("Instructor_Courses")}>My Courses</button>):(<button onClick={()=>setActiveTab("Enrolled_Courses")}>Enrolled Courses</button>)
            }
          </div>
          <div className={`${activeTab ==="AddCourses" ? "p-3 shadow-[2px_10px_10px_#35285C] bg-gradient-to-r from-purple-500  to-[#1B1F3A] w-full flex items-center flex-col mt-3 rounded-xl":"p-3  w-full flex items-center flex-col mt-3 rounded-xl hover:bg-gray-800 transition-all duration-300"}`}>
            {
              decode.role ==="Instructor" ?(<button onClick={()=>setActiveTab("AddCourses")}>Add Courses</button>):(<button onClick={()=>setActiveTab("Cart")}>Cart</button>)
            }
          </div>
          <div className={`${activeTab ==="Settings" ? "p-3 shadow-[2px_10px_10px_#35285C] bg-gradient-to-r from-purple-500  to-[#1B1F3A] w-full flex items-center flex-col mt-3 rounded-xl":"p-3  w-full flex items-center flex-col mt-3 rounded-xl hover:bg-gray-800 transition-all duration-300"}`}>
            <button onClick={()=>setActiveTab("Settings")}>Settings</button>
          </div>
          <div className="p-3  w-full flex items-center flex-col mt-3 rounded-xl hover:bg-gray-800 transition-all duration-300">
            <button onClick={logoutHandler}>Logout</button>
          </div>
        </div>
      </div>
      <div className="flex-1 w-screen bg-[#0B0F1A] ml-[25%]">{renderContent()}</div>
    </div>
  );
}
export default Dashboard;
