import OtpInput from "react-otp-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signup } from "../services/operations/authapi";
import { useSelector,useDispatch } from "react-redux";
function VerifyOtp() {
  const signupData =useSelector((value)=>value.signup.signUpData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[otp,setOtp] = useState("");
function handleotpChange(value){
  setOtp(value);
  // // console.log(otp);
}
function handleOtpSubmit(){
handleotpChange();
const signup = {
  firstName:signupData.firstName,
  lastName:signupData.lastName,
  email:signupData.email,
  password:signupData.password,
  confirmPassword:signupData.confirmPassword,
  otp:otp,
  accountType:signupData.selected, 
}
// console.log(signup);
//  // console.log(signupData);
dispatch(Signup(signup,navigate));
// console.log(signupData);
// // console.log(dispatch(Signup(signup,navigate)));
}
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-[#000814]  text-white">
      <div className="w-[30%]">
        <h1 className="font-bold text-4xl pl-3 my-3">Verify Email</h1>
        <p className="text-normal text-gray-400 pl-3">A verification code has been sent to you. Enter the code below</p>
        <div className="flex items-center p-1 mt-4">
            <OtpInput
          inputStyle={{
            width: "3rem",
            height: "3rem",
            margin: "0 0.5rem",
            fontSize: "1.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#1C1C1C",
            color: "white",
            textAlign: "center",
          }}
          focusStyle={{
            border: "2px solid #FFD700",
            outline: "none",
          }}
          value={otp}
          onChange={handleotpChange}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        </div>
        <div className="pl-3 pr-3">
        <button type="submit" onClick={handleOtpSubmit} className="bg-yellow-600 text-white rounded-lg w-full mt-5 p-3 font-bold">Verify Otp</button>

        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
