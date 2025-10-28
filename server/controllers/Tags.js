const Tag = require("../models/Tags");

//create tag ka handler funciion likhna hai

exports.createTag = async(req,res)=>{
    try{
        //fetch data from body
        const{name,description} = req.body;
        //validation
        if(!name || !description){
            return res.status(401).json({
                success:false,
                message:"All fields are required"
            })
        }

        //create entry in db
        const tagDetails = await Tag.create({
            name:name,
            description:description,
        });
        // console.log(tagDetails);
        return res.status(200).json({
            success:true,
            message:"tag created successfully",
        })


    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

//get all tags handler function

exports.showAllTags = async(req,res)=>{
    try{
        const alltags = await Tag.find({},{name:true,description:true});
        return res.status(200).json({
            success:true,
            message:"All tags returned successfully"
        })
    }catch(error){
        // console.error(error);
        return res.status(500).json({
            success:true,
            message:"Error occured while adding tag",
        })

    }
}