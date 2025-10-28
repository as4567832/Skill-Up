import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { profileEndpoints } from "../apis";
const{GET_ALL_COURSES_API} = profileEndpoints;


export async function getUserEnrolledCourses(token){
      const toastId = toast.loading("Loading...")
  let result = [];
  try{
     const response = await apiConnector("GET",GET_ALL_COURSES_API,null,{Authorization:`Bearer ${token}`});
     if(!response.data.success){
        throw new Error(response.data.message);
        
     }
     result = response.data.data;
     console.log("enrolled courses are:",response)
     console.log(result);
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
    toast.error("Could Not Get Enrolled Courses")
  }
  toast.dismiss(toastId);
  return result
}