const Course = require("../models/Course");
const Tag = require("../models/Tags");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

//create course handler function
exports.createCourse = async (req, res) => {
  try {
    //fetch data
    const { courseName, courseDescription, whatYouWillLearn, price, tag,instructions } =
      req.body;
      console.log("tags are:",tag);
    //get thumbnail image
  const thumbnail = req.files ? req.files.thumbnailImage : null;
  console.log(thumbnail)

    //validation
    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !tag ||
      !instructions
      
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // check for instructor
    const userId = req.user.id;
    console.log("user id:",userId)
    const instructorDetails = await User.findById(userId);
     console.log("Instructor details?:", instructorDetails);

    if (!instructorDetails) {
      return res.status(404).json({
        success: false,
        message: "instructor details not found",
      });
    }

    // check given tag is valid or not
    // const tagDetails = await Tag.findById(tag);
    // if (!tagDetails) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Tag details not found",
    //   });
    // }

    //upload image to cloudinary

   let thumbnailUrl = "";

if (req.files && req.files.thumbnailImage) {
  const uploaded = await uploadImageToCloudinary(
    req.files.thumbnailImage,
    process.env.FOLDER_NAME
  );
  thumbnailUrl = uploaded.secure_url;
}


    //CREATE an entry for new course
    const newCourse = await Course.create({ 
      courseName,
      courseDescription,
      instructor: instructorDetails._id,
      whatYouWillLearn,
      price,
      thumbnail:thumbnailUrl,
      tag,
      instructions,
    });

    console.log("new Course:",newCourse)

    //add new course to user schema of instructor

    await User.findByIdAndUpdate(
      { _id: instructorDetails._id },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );
    //update tag schema
    //Todo
    //.return response
    return res.status(200).json({
      success: true,
      message: "Course added successfully",
      data: newCourse,
    });
  } catch (error) {
    // console.error(error);
    return res.status(500).json({
      success: false,
      message: "Fauiled to create course",  
      error: error.message,
    });
  }
};

//get all course handler function

exports.showAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find(
      {},
      {
        courseName: true,
        price: true,
        thumbnail: true,
        instructor: true,
        ratingAndReviews: true,
        studentsEnrolled: true,
      }
    )
      .populate("instructor")
      .exec();

    return res.status(200).json({
      success: true,
      message: "Data for all courses fetched successfully",
      data: allCourses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occured while fetching course details",
      error: error.message,
    });
  }
};

//getCourse details

exports.getCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.body;
    //find course details
    const courseDetails = await Course.find({ _id: courseId })
      .populate({
        path: "instructor",
        populate: {
          path: "addfitionalDetails",
        },
      })
      .populate("category")
      .populate("ratingAndReviews")
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();
// validation 
if(!courseDetails){
    return res.status(400).json({
        success:false,
        message:`Could not find course with courseid: ${courseId}`,
    })
}
    return res.status(200).json({
      success: true,
      message: "Data for all courses fetched successfully",
      data: allCourses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occured while fetching course details",
      error: error.message,
    });
  }
};


exports.getInstructorCourses = async(req,res)=>{
  try{
    const userId = req.user.id;
    console.log(userId);
    const userCourses = await User.findById(userId).populate("courses");
    const courses = userCourses.courses
    return res.status(200).json({
      success:true,
      message:"Instructor courses fetched successfully",
      data:courses
    })
  }catch(error){
    return res.status(500).json({
      success:false,
      message:"Error occured while fetching instructor courses",
      error:error.message

    })
}
}