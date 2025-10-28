const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
const {uploadImageToCloudinary} = require("../utils/imageUploader");
const Course = require("../models/Course");
//create subsection
exports.createSubSection = async(req,res)=>{
    try{
        //fetch data from body
        const{sectionId,title,description,timeDuration,courseId} = req.body;
        //extract file/video

        const video = req.files.videoFile;
        const tokensnew = req.user;
        const userID = tokensnew.id;


        //validation
        if(!sectionId || !title ||! description || !timeDuration || !video || !courseId){
            return res.status(400).json({
                success:false,
                message:"all fields are required to create sub section",
            });
        }
                
        //upload video to cloudinary
        const uploadDetails = await uploadImageToCloudinary(video,process.env.FOLDER_NAME);
        console.log("req.files =", req.files);
        //save url to db
        //create subsection
        const subSectionDetails = await SubSection.create({
            title:title,
            timeDuration:timeDuration,
            description:description,
            videoUrl:uploadDetails.secure_url,
        })
          console.log("req.files =", req.files);
        //update subsection id to section
        const updatedSection = await Section.findByIdAndUpdate({_id:sectionId},
            {
                $push:{
                    subSection:subSectionDetails._id,
                }
            },
            {new:true}
        ).populate("subSection");
        console.log("req.files =", req.files);

        // HW: low updated section  here after population query
        const updatedCourseDetails = await Course.findById(courseId).populate({
            path:"courseContent",
            populate:{
                path:"subSection"
            }
        }).exec();


        //return response
  return res.status(200).json({
            success:true,
            message:"subSection created  successfully",
            updatedCourseDetails,
        })
    }catch(error){
            return res.status(500).json({
            success:false,
            message:"Error occured while creating Subsection"
        })
    }
}


//update sub section 



//delete subsection
exports.deleteSubSection = async(req,res)=>{

}