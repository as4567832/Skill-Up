import { createSlice } from "@reduxjs/toolkit"

const initialState = {
     step:localStorage.getItem("step")?Number(localStorage.getItem("step")):1,
    // step:2,
    course:localStorage.getItem("course")?JSON.parse(localStorage.getItem("course")):null,
    editCourse:null,
    paymentLoading:false,
    clickedSectionId:""
}

const courseSlice = createSlice({
    name:"course",
    initialState:initialState,
    reducers:{
        setStep:(state,value)=>{
            state.step = value.payload;
        },
        setCourse:(state,value)=>{
            state.course =value.payload;
        },
         setEditCourse:(state,value)=>{
            state.editCourse =value.payload;
        },
         setPaymentLoading:(state,value)=>{
            state.paymentLoading =value.payload;
        },
          resetCourseState:(state,value)=>{
            state.step =1;
            state.course = null;
            state.editCourse = false;
        },
        clickedSubsection:(state,value)=>{
            state.clickedSectionId = value.payload;
        }


    }
})

export const{setStep,setCourse,setEditCourse,setPaymentLoading,resetCourseState,clickedSubsection} = courseSlice.actions;
export default courseSlice.reducer;