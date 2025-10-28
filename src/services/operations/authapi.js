import toast from "react-hot-toast";
import { endpoints } from "../apis";
import { setLoading } from "../../slices/signupSlice";
import { apiConnector } from "../apiconnector";
import { setToken } from "../../slices/signupSlice";
import { setUser } from "../../slices/profileSlice";

const{SENDOTP_API,SIGNUP_API,LOGIN_API} = endpoints;

export function sendOTP(email ,navigate){
    return async (dispatch)=>{
        // const toastId= toast.loading('Loading...');
        // dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST",SENDOTP_API,{
                email,
            });
            // console.log("otp send response:",response);
            // console.log(response.data.success); 
            if(!response.data.success){
                // console.error(response.data.message);
            }
            toast.success("OTP sent successfully");
            navigate('/verify-otp');
            

        }catch(error){

        }
    }
}

export function Signup(signupData,navigate){

   return async(dispatch)=>{
    try{
       const response = await apiConnector("POST",SIGNUP_API,signupData);
       // console.log("signup response" ,response);
       toast.success("Sign up successfull");
       navigate('/login');
    }catch(error){
        // console.log("signup error");

    }
   }

}

export function Login(logindata,navigate){
   return async(dispatch)=>{
        try{
           const response = await apiConnector("POST",LOGIN_API,logindata);
           const token = response?.data?.token;
           console.log(token);
            if (!token) {
            toast.error("Token not received from server");
            return;
        
      }
           dispatch(setToken(token));
           localStorage.setItem("token",token);
           dispatch(setUser(response.data.user));
           console.log("Logged in successfully");
           toast.success("Logged in successfully");
           navigate('/');
           return response.data.user;
        }catch(error){
          toast.error("Some error occured while logging in");
        }
    }
}