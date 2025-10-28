import { MdCloudUpload } from "react-icons/md";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { createSubSection } from "../../services/operations/courseDetailsapi";
import { useDispatch, useSelector } from "react-redux";
import { createSection } from "../../services/operations/courseDetailsapi";
import { setCourse } from "../../slices/courseslice";
import { closeModal } from "../../slices/modalslice";
function Modal() {
  const [fileName, setFileName] = useState("");
  const [videosrc, setVideosrc] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const[videofile,setvideofile] =useState(null);
  const{register,handleSubmit,formState:{errors}} = useForm();
  const videoRef = useRef(null);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const {course,clickedSectionId} = useSelector((state)=>state.course);
  const token = useSelector((state) => state.signup.token);
    console.log("token when modal is clicked is:",token)
  // console.log("Course of modal section is:",course.courseContent)
  // console.log("clicked section id of modal is:",clickedSectionId)

  // Handle video selection
  const selectVideoHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      console.log("Selected file:", file.name);
      setvideofile(file);
      setFileName(file.name);
      const videoUrl = URL.createObjectURL(file);
      setVideosrc(videoUrl);
      setIsPlaying(false);
      e.target.value = null;
    } else {
      setvideofile(null);
      setFileName("");
      setVideosrc(null);
      setIsPlaying(false);
    }
  };

  // Play/Pause toggle
  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
const submitHandler = async(data)=>{
     const formData = new FormData();
     formData.append("sectionId",clickedSectionId);
     formData.append("title",data.subSection);
     formData.append("description",data.description);
     formData.append("timeDuration", "10"); // or calculate dynamically
     formData.append("videoFile",videofile);
     formData.append("courseId",course._id);
     try{
       const result = await createSubSection(formData,token);
       const updatedCourse = result.data.updatedCourseDetails;
           localStorage.setItem("course", JSON.stringify(updatedCourse));
           dispatch(setCourse(updatedCourse));
           console.log("Updated course details for sub section are:", updatedCourse);
           dispatch(closeModal(true));
    // const result = await createSubSection(
    //       {
    //         sectionName: data.sectionName,
    //         courseId: course._id,
    //       },
    //       token
    //     );

     }catch(error){
      console.error("error occured while creating sub section:",error);
     }


  }

  return (
    <div onClick={(e)=>e.stopPropagation()} className="bg-[#141D30] p-5 w-[40%]  rounded-xl">
      <form onSubmit={handleSubmit(submitHandler)}>
        {/* Title */}
        <div className="mb-4">
          <label className="text-white block mb-1">Title</label>
          <input
            id="subSection"
            {...register("subSection",{required:true})}
            type="text"
            placeholder="Enter Sub Section Title"
            className="w-full p-2 text-white rounded-xl border border-gray-600 outline-none bg-transparent focus:border-purple-600"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-white block mb-1">Description</label>
          <input
            id="description"
            {...register("description",{required:true})}
            type="text"
            placeholder="Enter Description"
            className="w-full p-2 text-white rounded-xl border border-gray-600 outline-none bg-transparent focus:border-purple-600"
          />
        </div>

        {/* Hidden input always present */}
        {!videosrc && (<label className="text-white" htmlFor="">Select Video</label>)}
        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          style={{ display: "none" }}
          onChange={selectVideoHandler}
        />

        {/* Video Upload / Preview */}
        <div className="mb-4 text-white">
          
          {videosrc ? (
            // Video preview
            <div className="w-full">
              <label className="" htmlFor="">Selected Video</label>
              <video
                ref={videoRef}
                src={videosrc}
                width="100%"
                height="auto"
                controls={true}
                className="rounded-xl"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              <div className="flex justify-center rounded-lg hover:scale-105 transition-all duration-300 gap-4 mt-3 bg-purple-600">
                <button
                  type="button"
                  onClick={() => inputRef.current.click()}
                  className="p-2 text-white"
                >
                  Select Another Video
                </button>
              </div>
            </div>
          ) : (
            // Upload UI
            <div
              className="my-3 relative w-full border-2 border-dotted border-gray-600 bg-[#0F1729] rounded-xl cursor-pointer hover:border-purple-600 transition-all duration-300 ease-in-out"
              onClick={() => inputRef.current.click()}
            >
              <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                <MdCloudUpload className="text-8xl text-white mb-3" />
                <p>Click to Upload or Drag and Drop</p>
                <p>PNG, JPG, or Video upto 10Mb</p>
                <p className="text-sm text-gray-200">
                  {fileName || "No file selected"}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end ">
          <button type="submit" className="bg-orange-600 p-2 px-3 rounded-xl text-white hover:scale-105 transition duration-300">Add Sub Section</button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
