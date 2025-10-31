import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createSection } from "../../../services/operations/courseDetailsapi";
import { clickedSubsection, setCourse } from "../../../slices/courseslice";
import { MdDelete } from "react-icons/md";
import Modal from "../modal";
import { openModal } from "../../../slices/modalslice";

function CourseBuilder() {
  // const[sectionName,setSectionName] =useState("");
  const token = useSelector((state) => state.signup.token);
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const sections = course?.courseContent;
  const subSection = course?.courseContent;
  console.log("sections of course are:", sections);
  console.log("Course is:", course);
  console.log("Sub sections of course are:", subSection);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();
    let result;
    result = data.sectionName;
    result = await createSection(
      {
        sectionName: data.sectionName,
        courseId: course._id,
      },
      token
    );
    console.log("result for create section is:", result);
    const updatedcourse = result.data.updatedCourseDetails;
    localStorage.setItem("course", JSON.stringify(updatedcourse));
    dispatch(setCourse(updatedcourse));
    console.log("Updated course details are:", course);
  }
  function modalHandler(sectionId){
     dispatch(openModal(true));
     dispatch(clickedSubsection(sectionId));
     console.log("you clicked on this subsection:",sectionId);
  }

  return (
    <div className="bg-[#141D30] rounded-xl w-full mt-10 p-5">
            
      <h1 className="text-2xl text-white font-semibold">Course Sections</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex justify-between mt-5">
          <div className="w-[80%]">
            <input
              id="sectionName"
              {...register("sectionName", { required: true })}
              placeholder="Enter Section Name"
              className="w-full p-2 text-white rounded-xl border border-gray-600 outline-none bg-transparent"
              type="text"
            />
            {errors.sectionName && <span>Section Name is required</span>}
          </div>
          <button
            type="submit"
            className="bg-[#A855F7] text-white text-center  px-10 rounded-xl"
          >
            {" "}
            <span className="text-xl ">+ </span> Add Section
          </button>
        </div>
      </form>
      {sections && sections.length > 0 ? (
  <div className="flex flex-col gap-3 my-10 w-full">
    {sections.map((section) => (
      <div key={section._id}>
        <div
        // key={section._id}
        className="flex justify-between items-center"
      >
        {/* Section Name on the left */}
        <h2 className="text-white font-semibold text-lg">{section.sectionName}</h2>
        

        {/* Button on the right */}
        <div className="flex items-center gap-5">
            <button onClick={()=>modalHandler(section._id)} className=" text-white px-4 py-1 border-gray-600 border-2 rounded-full transition-all duration-300 hover:border-purple-600">
          Add Lecture
        </button>
        <button className="hover:bg-gray-800 p-2 rounded-md transition-all duration-300 mr-10"><MdDelete className="text-2xl text-red-800 text-center " /></button>
        </div>
      </div>
      <div className="ml-10">
        {
          section.subSection && section.subSection.length > 0 && (
            <div className="my-5">
              {
                section.subSection.map((sub)=>(
                  <div className="my-3 text-white" key={sub._id}>
                    <h1>{sub.title}</h1>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
      </div>
    ))}
  </div>
) : (
  <p className="my-10 text-gray-300 text-center">
    No sections yet. Add your first section to start building your course.
  </p>
)}

      <div className="flex justify-between border-t border-gray-600 pt-5">
        <button className="border-2 border-gray-600 transition-all duration-300 ease-in-out hover:border-purple-500 text-white text-center  px-5 rounded-xl">
          Back
        </button>
        <button className="bg-[#A855F7] text-white text-center rounded-xl px-5 p-2 hover:scale-110 transition-all duration-300">
          Next
        </button>
      </div>
    </div>
  );
}

export default CourseBuilder;
