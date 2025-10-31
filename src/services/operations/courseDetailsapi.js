import { apiConnector } from "../apiconnector";
import { categories, courseEndpoints } from "../apis";
const{CATEGORIES_API}= categories;
const{CREATE_SECTION_API,CREATE_SUB_SECTION_API,GET_COURSE_DETAILS_API,FETCH_INSTRUCTOR_COURSES,SHOW_ALL_COURSES_API} = courseEndpoints;

export const fetchCourseCategories = async ()=>{
    let result = [];
    try{
     const response = await apiConnector("GET",CATEGORIES_API);
     result = response.data.data;
     return result;
    }catch(error){

    }

}

export const showAllCourses = async()=>{
    const response = await apiConnector("GET",SHOW_ALL_COURSES_API);
    return response.data.data;
}




export const createSection = async(data,token)=>{
    let result = null;
    try{
        const response = await apiConnector("POST",CREATE_SECTION_API,data,{Authorization:`Bearer ${token}`});
        console.log("create section api response",response);
        if (!response?.data?.success) {
      throw new Error("Could Not Create Section")
    }
    return response;

    }catch(error){
        console.error(error);
        console.log("Error occured while creating section");
    }
}



export const createSubSection = async(data,token)=>{
    let result = null;
    try{
        const response = await apiConnector("POST",CREATE_SUB_SECTION_API,data,{"Content-Type": "multipart/form-data",Authorization:`Bearer ${token}`});
        console.log("create section api response",response);
        return response;
    }catch(error){
        console.error(error);
        console.log("Error occured while creating section");
    }
}


export const fetchInstructorCourses = async (token)=>{
    try{
        const result = await apiConnector("GET",FETCH_INSTRUCTOR_COURSES,null,{Authorization:`Bearer ${token}`});
        return result;
    }catch(error){
        console.error("error occured while fetching course",error);
    }
}


export const getCourseDetails = async(courseId)=>{
    try{ 
        const result = await apiConnector("POST",GET_COURSE_DETAILS_API,{courseId});
        return result?.data.data[0];

    }catch(error){
        console.log("error occured while fetching course",console.error);
    }

}