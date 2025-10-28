import { useState } from "react";
import "../pages/css/signup.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSignUpData } from "../slices/signupSlice";
import { sendOTP } from "../services/operations/authapi";
import { useNavigate } from "react-router-dom";
function Signup() {
    const dispatch  =  useDispatch();
    const navigate = useNavigate();
  const [selected, setSelected] = useState("Student");
  function selectButtonHandler(event) {
    event.preventDefault();
    setSelected(event.target.name);
  }

  const[formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  const{firstName,lastName,email,password,confirmPassword} = formData;
  const handleOnChange = (event)=>{
    // // console.log(event.target.value);
    // // console.log(formData);
    setFormData((prevState) =>({
        ...prevState,
        [event.target.name]:event.target.value,
    }))
  }

  function handleOnSubmit(event){
    event.preventDefault();
    if(password!==confirmPassword){
        toast.error("Passwords do not match")
    }

        setFormData({
        firstName:"",
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        
    })
    const signupData = {
        ...formData,
          selected

    }
        // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignUpData(signupData));
    dispatch(sendOTP(formData.email,navigate));
     console.log(signupData);


  }
  return (
    <div className="signupbackground  flex justify-center items-center p-20">
      <div className="w-[50%] flex flex-col items-center my-3">
        <h1 className="text-3xl font-bold text-white text-center">
          Unlock your Learning potential with Skillup - Education for everyone!
        </h1>
        <p className="text-gray-400 font-semibold my-3">
          Your digital gateway to knowledge
        </p>
        <form className="border my-6 border-1 p-5 border-gray-700 flex flex-col bg-[#151D30] items-center rounded-md flex flex-col gap-4" onSubmit={handleOnSubmit}>
            <div className="flex  flex-col items-center text-center">
              <h1 className="text-4xl font-bold text-white">Create Account</h1>
              <p className="text-gray-300 my-3">Start your learning journey today</p>
            </div>
          <div className="my-2 w-full h-[50px] box-border items-center justify-center p-1 flex gap-3 bg-gray-600 rounded-md">
          
            <button
              name="Student"
              onClick={selectButtonHandler}
              className={`h-[100%] w-[50%] rounded-md text-white  ${
                selected === "Student" ? "bg-[#A855F7]" : "bg-transparent"
              }`}
            >
              {" "}
              Student{" "}
            </button>
            <button
              name="Instructor"
              onClick={selectButtonHandler}
              className={` h-[100%] rounded-md w-[50%] text-white  ${
                selected === "Instructor" ? "bg-[#FF8052]" : " bg-transparent"
              } `}
            >
              Instructor
            </button>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col text-white gap-1">
              <label className="bg-transparent px-2" htmlFor="firstName">
                First Name
                <span className="text-red-600">*</span>
              </label>
              <input
              onChange={handleOnChange}
                placeholder="Enter First Name"
                className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
                type="text"
                name="firstName"
                value={firstName}
              />
            </div>

            <div className="flex flex-col text-white gap-1">
              <label className="bg-transparent px-2" htmlFor="name">
                Last Name
                <span className="text-red-600">*</span>
              </label>
              <input
              onChange={handleOnChange}
                placeholder="Enter Last Name"
                className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
                type="text"
                name="lastName"
                value={lastName}
              />
            </div>
          </div>
          <div className="w-[100%]">
            <div className="flex flex-col text-white gap-1">
              <label className="bg-transparent px-2" htmlFor="email">
                Email Address
                <span className="text-red-600">*</span>
              </label>
              <input
              onChange={handleOnChange}
                placeholder="Enter Email Address"
                className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
                type="text"
                name="email"
                value={email}
              />
            </div>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col text-white gap-1">
              <label className="bg-transparent px-2" htmlFor="password">
                Enter Password
                <span className="text-red-600">*</span>
              </label>
              <input
              onChange={handleOnChange}
                placeholder="Enter Password"
                className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
                type="text"
                name="password"
                value={password}
              />
            </div>
            <div className="flex flex-col text-white gap-1">
              <label className="bg-transparent px-2" htmlFor="name">
                Confirm Password
                <span className="text-red-600">*</span>
              </label>
              <input
              onChange={handleOnChange}
                placeholder="Confirm Password"
                className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
                type="text"
                name="confirmPassword"
                value={confirmPassword}
              />
            </div>
          </div>
          <div className="w-[100%] my-5">
            <button type="submit" className="text-center text-richblack-900 bg-[#FF8052] py-[8px] px-[12px] font-medium w-full h-[40px] rounded-lg">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
