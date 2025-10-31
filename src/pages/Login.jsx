import { useState } from "react";
import "../pages/css/signup.css";
import { Login } from "../services/operations/authapi";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../slices/loginSlice";
import { setUser } from "../slices/profileSlice";
// import { setSignUpData } from "../slices/signupSlice";
function LoginForm() {
    // const signupData = useSelector((state)=>state.signup.signupData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[loginValues,setLoginValues] = useState({
        email:'',
        password:''
    });
    const{email,password} = loginValues;
       const  changeHandler = (event)=>{
        setLoginValues((prevState)=>({
            ...prevState,
            [event.target.name]:event.target.value
        }));
        // // console.log(loginValues);
    }

    function loginHandler(event){ 
        event.preventDefault();
        const logindata = ({
            email,
            password
        });
        // // console.log(signupData);
        dispatch(loginUser(logindata));
        dispatch(Login(logindata,navigate));
        // console.log(logindata);
    }
  return (
    <div className="login flex items-center justify-center p-10 bg-[#14192F]">
      <div className="md:w-[40%] w-full border-2 border-gray-600 p-3 rounded-xl bg-[#151D30]">
        <h1 className="md:text-5xl text-4xl text-white font-bold text-center">Welcome Back</h1>
        <p className=" text-center  font-semibold text-gray-400 mt-3">
          Build Skills for Today,Tommorow and Beyond
        </p>
        <form className="pt-8 flex flex-col gap-5">
          <div className="flex flex-col text-white gap-1">
            <label className="bg-transparent mx-2" htmlFor="name">
              Email Address <span className="text-red-600">*</span>{" "}
            </label>
            <input
              placeholder="Enter Email Address"
              className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
              type="text"
              name="email"
              value={email}
              onChange={changeHandler}
            />
          </div>
          <div className="flex flex-col text-white gap-1">
            <label className="bg-transparent mx-2" htmlFor="name">
              Password <span className="text-red-600">*</span>{" "}
            </label>
            <input
              placeholder="Enter Password"
              className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
              type="text"
              name="password"
              value={password}
              onChange={changeHandler}
            />
          </div>
          <div className="bg-[#FF8052] p-3 rounded-md flex justify-center text-black font-bold ">
           <button type="submit" onClick={loginHandler}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
