import { useState } from "react";
import './addcourse.css'
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../../services/operations/courseapi";
import { jwtDecode } from "jwt-decode";
import RenderSteps from "./rendersteps";

function AddCourses(){
    const step = useSelector((state)=>state.course.step);
    return(
        <div className="bg-[#0F1729] p-6">
            <div> 
                <h1 className="text-4xl font-bold text-white">Add New Course</h1>
                <p className="text-gray-400 font-bold my-3">Create a new course and start teaching</p>
                <p className="text-gray-400 my-3 font-bold">Step {step}: Course Builder</p>
                <div>
                    <RenderSteps></RenderSteps>
                </div>
            </div>
            {/* <div>
                <p>Code Upload Tips</p>
                <ul>
                    <li>Set The course price option or make it free</li>
                    <li>standard size for the course thumbnail is 1024x576</li>
                    <li>Video section controls course overview video</li>
                    <li>Video section controls course overview video</li>
                    <li>Video section controls course overview video</li>
                    <li>Video section controls course overview video</li>
                    <li>Video section controls course overview video</li>
                    <li>Video section controls course overview video</li>
                </ul>
            </div> */}
        </div>

    )
}
export default AddCourses; 