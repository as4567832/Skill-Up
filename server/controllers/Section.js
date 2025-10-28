const Section  = require("../models/Section");
const Course = require("../models/Course");
//create section 
exports.createSection = async(req,res)=>{
    try{
        //darta fetch from request body
        const{sectionName,courseId} = req.body;
        ////data validation
          if(!sectionName || !courseId){
            return res.status(400).json({
                success:false,
                message:"section name or course id should not be empty",
            })
        }
        //create section
        const newSection = await Section.create({sectionName});
        //push object id of section to course
        const updatedCourseDetails = await Course.findByIdAndUpdate(courseId,
            {
                $push:{
                    courseContent:newSection._id
                }
            },
            {new:true}
        ).populate({
            path:"courseContent",
            populate:{
                path:"subSection"
            }
        }).exec();
                //return successfull response
        return res.status(200).json({
            success:true,
            message:"Section created successfully",
            updatedCourseDetails,
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error occured while creating section"
        })
    }
}

//update section 

exports.updateSection = async(req,res)=>{
    try{
        //data input
        const{sectionName,sectionId} = req.body;
        //data validation
        if(!sectionName || !sectionId){
            return res.status(400).json({
                success:false,
                message:"section name or section id should not be empty",
            });
        }
        //update data
        const updateData = await Section.findByIdAndUpdate(sectionId,{sectionName},{new:true});
        //return response
           return res.status(200).json({
            success:true,
            message:"Section updated successfully",
            updatedCourseDetails,
        })


    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error occured while creating section"
        })
    }
}

exports.deleteSection = async(req,res)=>{
    try{
        //get id-assuming that we are sending id in params
        const{sectionId} = req.params;
        //use findbyid and delete

        await Section.findByIdAndDelete(sectionId);
        //return response
        
           return res.status(200).json({
            success:true,
            message:"Section deleted  successfully",
            updatedCourseDetails,
        })

    }catch(error){
         return res.status(500).json({
            success:false,
            message:"Error occured while deleting section"
        })
    }
}