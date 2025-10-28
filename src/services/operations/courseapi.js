import { apiConnector } from "../apiconnector";
import { courseEndpoints } from "../apis";
const{CREATE_COURSE_API} =courseEndpoints;
export async function createCourse(data,token){
     console.log(data);
     console.log(token);
    try{ 
         const response = await  apiConnector("POST",CREATE_COURSE_API,data,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`})
         console.log(response);
         return response.data.data;
         
    }catch(error){
         console.error(error);

    }

} 