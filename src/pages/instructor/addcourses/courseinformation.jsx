import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategories } from "../../../services/operations/courseDetailsapi";
import { MdCloudUpload } from "react-icons/md";
import { setCourse,setStep } from "../../../slices/courseslice";
import { createCourse } from "../../../services/operations/courseapi";

function CourseInformation() {
  const [fileName, setFileName] = useState("");
  const token = useSelector((state)=>state.signup.token);
  const[tags,setTags] = useState([]);
  const[instructions,setInstructions] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    getValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { course, editCourse ,step} = useSelector((state) => state.course);
  console.log("step is:",step)
  const [courseCategories, setCourseCategories] = useState([]);
  useEffect(() => {
    const getCourseCategories = async () => {
      const categories = await fetchCourseCategories();
      setCourseCategories(categories);
    };
    if (editCourse) {
      setValue("courseTitle", course.courseTitle);
      setValue("courseShortDesc", course.courseShortDesc);
      setValue("coursePrice", course.coursePrice);
      setValue("courseTags", course.courseTags);
      setValue("courseBenefits", course.courseBenefits);
      setValue("courseCategory", course.courseCategory);
      setValue("courseRequirements", course.courseRequirements);
      setValue("courseImage", course.courseImage);
    }
    getCourseCategories();
  },[]);
  const onSubmit = async (data) => {
    //creating course
    const formData = new FormData();
    formData.append("courseName",data.courseTitle);
    formData.append("courseDescription",data.courseShortDesc);
    formData.append("price",data.coursePrice);
    formData.append("whatYouWillLearn",data.Benefits);
    formData.append("category",data.category);
    formData.append("Instructions",data.Requirements);
    formData.append("thumbnailImage",data.courseImage);
    tags.forEach((tag)=>formData.append("tag",tag));
    instructions.forEach((instruction)=>formData.append("instructions",instruction));
    console.log(formData);
    console.log(token);
    for (let [key, value] of formData.entries()) {
  console.log(key, value);
}

     const result = await createCourse(formData,token);
      dispatch(setCourse(result));
      localStorage.setItem("course",JSON.stringify(result));
      dispatch(setStep(step+1));
      localStorage.setItem("step",step+1)
      console.log(step);
      console.log(result);
    

    
  }
  return (
    <form
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      }}
      onSubmit={handleSubmit(onSubmit)}
      className=" my-20 rounded-md  text-white p-6 space-y-8 bg-[#141D30] rounded-xl border border-gray-800"
    >
      <h1 className="text-2xl font-bold">Course Information</h1>
      <div>
        <label htmlFor="" className="">
          Course Title<sup>*</sup>
        </label>
        <input
          className="w-full my-3 bg-[#0F1729] border border-gray-600 rounded-xl focus:outline-none px-3"
          id="courseTitle"
          type="text"
          placeholder="Enter Course Title"
          {...register("courseTitle", { required: true })}
        />
        {errors.courseTitle && <span>Course Title is required</span>}
      </div>
      <div>
        <label htmlFor="">Course Short Description</label>
        <textarea
          id="courseShortDesc"
          placeholder="Enter Description"
          {...register("courseShortDesc", { required: true })}
          className="min-h-[140px] w-full bg-[#0F1729] border border-gray-600 p-1 px-3 focus:outline-none rounded-xl my-3"
        ></textarea>
        {errors.courseShortDesc && <span>Course Description is required</span>}
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[50%] ">
          <label htmlFor="">
            Category<sup>*</sup>
          </label>
          <select
            name="category"
            id="category"
            {...register("category", { required: true })}
            className="p-2 px-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#0F1729] border border-gray-600 focus:outline-none rounded-xl my-3"
          >
            <option className="rounded-md" value="Web Development">
              Web Development
            </option>
            <option value="Data Science">Data Science</option>
            <option value="Design">Design</option>
            <option value="blockchain">Blockchain</option>
          </select>
        </div>
        <div>
          <label htmlFor="">
            Course Price<sup>*</sup>
          </label>
          <input
            className="p-2 w-full bg-[#0F1729] border border-gray-600 focus:outline-none rounded-xl my-3"
            id="coursePrice"
            type="text"
            placeholder="Enter Course Title"
            {...register("coursePrice", {
              required: true,
              valueAsNumber: true,
            })}
          />
          {errors.courseTitle && <span>Course Title is required</span>}
        </div>
      </div>

      <div>
        <label htmlFor="" className="">
          Tags<sup>*</sup>
        </label>
     <div className="w-full my-2 flex flex-wrap gap-2">
         {
          tags.map((tag,index)=>(
            <span className="border border-gray-700 p-2 bg-gray-800 rounded-xl mx-1" key={index}>{tag}
            <button onClick={()=>{
              setTags((prev)=>prev.filter((t)=>t!==tag))
            }} className="text-red-500 ml-2">X</button>
            </span>
          ))}

     </div>
        <input
          type="text"
         onKeyDown={(event)=>{
          if(event.key ==="Enter"){
            const value = event.target.value.trim();
          
          if(value && !tags.includes(value)){
            setTags((prev)=>[...prev,value]);
            event.target.value = "";
          }
         }}}
          placeholder="Enter Tags and press Enter"
          className="w-full p-2 outline-none border border-gray-600 rounded-xl bg-[#0F1729]"
        />
      </div>

      <div className="">
        <label htmlFor="courseThumbnail" className="block mb-2">
          Thumbnail
        </label>
        <div className="my-3 relative w-full border-2 border-dotted hover:border-dotted hover:border-purple-600 transition-all duration-300 ease-in-out border-gray-600 bg-[#0F1729] rounded-xl cursor-pointer">
          <div className="flex flex-col items-center justify-center py-10 text-gray-400">
            <MdCloudUpload className="text-8xl text-white mb-3" />
            <p>Click to Upload or Drag and Drop</p>
            <p>PNG, JPG upto 10Mb</p>
            <p className="text-sm text-gray-200">
              {fileName || "No file selected"}
            </p>
          </div>
          {/* Hidden file input */}
          <input
            type="file"
            id="courseThumbnail"
            accept="image/png, image/jpeg"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                console.log("Selected file:", file.name);
                setFileName(file.name);
                setValue("courseImage", file); // keep RHF value in sync
              } else {
                setFileName("");
                setValue("courseImage", null);
              }
            }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="">Benefits of the Course</label>
        <textarea
          id="Benefits"
          {...register("Benefits", { required: true })}
          className="w-full rounded-xl p-2 border outline-none border-gray-600 bg-[#0F1729]"
          placeholder="Enter Benefits of the Course"
          rows="5"
        ></textarea>
      </div>
      <div>
        <label htmlFor="">Requirements/Instructions</label>
        <input
          className="w-full rounded-xl p-2 border outline-none border-gray-600 bg-[#0F1729]"
          type="text"
          placeholder="Enter requirements/Instructions of the course"
          onKeyDown={(event)=>{
            if(event.key ==="Enter"){
              const value = event.target.value.trim();
            if(value && !tags.includes(value)){
            setInstructions((prev)=>[...prev,value]);
            event.target.value = "";
          }
            }
          }}
        />
        <div className="my-2 flex flex-wrap gap-2">
          {instructions.map((instruction,index)=>(
            <h1 key={index} className="my-2">
              <span className="border border-gray-700 p-2 bg-gray-800 rounded-xl mx-1" >{instruction}<button onClick={()=>{
              setInstructions((prev)=>prev.filter((t)=>t!==instruction))
            }} className="text-red-500 ml-2">X</button></span>
            </h1>
          ))}
        </div>
      </div>
      <div className="flex items-end justify-end">
        <button className="bg-purple-500 p-2 px-3 rounded-xl" type="submit">
          Next
        </button>
      </div>
          </form>
  );
}
export default CourseInformation;
