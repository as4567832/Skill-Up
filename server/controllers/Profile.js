const Profile = require("../models/Profile");
const { findById } = require("../models/SubSection");
const User = require("../models/User");
exports.updateProfile = async(req,res)=>{
    try{

        //get data
        const{dateOfBirth = "",gender,phoneNumber,about=""} = req.body;
        //get user id
        const id = req.user.id;
        //validation
        if(!gender || !phoneNumber || !id){
            return res.status(400).json({
                success:false,
                message:"Fields are empty please write all fields",
            })
        }
        //find profile
        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;
        const profileDetails = await Profile.findById(profileId);
        //update profile
        additionalDetails.dateOfBirth = dateOfBirth;
        additionalDetails.about = about;
        profileDetails.gender = gender;
        profileDetails.contactNumber = phoneNumber;
        await profileDetails.save();
        //return response
return res.status(200).json({
            success:true,
            message:"Profile updated   successfully",
            profileDetails,
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error occured while creating Subsection"
        })

    }
}


//delete account

exports.deleteAccount = async(req,res)=>{
    try{
        //get id
        const id = req.user.id;
        //validate
        const userDetails = await findById(id);
        if(!userDetails){
            return res.status(400).json({
                success:false,
                message:"user not found"
            })
        }
        //delete profile
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails});
        //delete user
        await User.findByIdAndDelete({_id:id});
        // todo unenroll users from enrolled courses
        //chrone job
        //return response
return res.status(200).json({
            success:true,
            message:"Profile updated   successfully",
            profileDetails,
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error occured while creating Subsection"
        })

    }
}


exports.getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("get Enrolled course userId...", userId);

    let userDetails = await User.findById(userId)
      .populate({
        path: "courses",   // <-- yaha "courses" use karo, "course" nahi
        populate: {
          path: "courseContent",
          populate: {
            path: "subSection",
          },
        },
      })
      .exec();

    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find user with id: ${userId}`,
      });
    }

    userDetails = userDetails.toObject();
    console.log("enrollment course progress..", userDetails);

    // Calculate progress (agar CourseProgress model use kar rahe ho)
    // for (let i = 0; i < userDetails.courses.length; i++) {
    //   let course = userDetails.courses[i];
    //   let totalDurationInSeconds = 0;
    //   let totalSubsections = 0;

    //   course.courseContent.forEach((section) => {
    //     totalDurationInSeconds += section.subSection.reduce(
    //       (acc, curr) => acc + parseInt(curr.timeDuration || 0),
    //       0
    //     );
    //     totalSubsections += section.subSection.length;
    //   });

    //   course.totalDuration = convertSecondsToDuration(totalDurationInSeconds);

    //   const courseProgress = await CourseProgress.findOne({
    //     courseID: course._id,
    //     userId: userId,
    //   });

    //   const completedCount = courseProgress?.completedVideos.length || 0;
    //   course.progressPercentage =
    //     totalSubsections === 0
    //       ? 100
    //       : Math.round((completedCount / totalSubsections) * 100 * 100) / 100; // 2 decimal
    // }

    return res.status(200).json({
      success: true,
      data: userDetails.courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

function convertSecondsToDuration(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const formatted = [
    hrs > 0 ? String(hrs).padStart(2, "0") : null,
    String(mins).padStart(2, "0"),
    String(secs).padStart(2, "0"),
  ]
    .filter(Boolean)
    .join(":");

  return formatted;
}
