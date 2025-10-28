const BASE_URL = process.env.REACT_APP_BASE_URL
//auth api
export const endpoints = {
    SENDOTP_API : BASE_URL + '/auth/sendotp',
    SIGNUP_API :  BASE_URL + '/auth/signup',
    LOGIN_API:BASE_URL + '/auth/login',
} 
//categories api
export const categories = {
    CATEGORIES_API:BASE_URL + "/category/getAllCategories",
}  
 
 
export const profileEndpoints = {
    GET_ALL_COURSES_API :BASE_URL + "/profile/getEnrolledCourses",
}

export const courseEndpoints = {
    CREATE_COURSE_API:BASE_URL + "/course/createCourse",
    CREATE_SECTION_API:BASE_URL +"/course/addSection",
    CREATE_SUB_SECTION_API:BASE_URL +"/course/addSubSection",
    FETCH_INSTRUCTOR_COURSES:BASE_URL + "/course/instructorCourses",
    SHOW_ALL_COURSES_API:BASE_URL + "/course/getAllCourses",
}

export const studentEndpoints = {
    COURSE_PAYMENT_API:BASE_URL + "/payment/capturePayment",
    COURSE_VERIFY_API:BASE_URL + "/payment/verifyPayment"
}