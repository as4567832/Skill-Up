const Category = require("../models/Category");
exports.createCategory = async(req,res)=>{
    try{
      const{name,description} = req.body;
      if(!name || !description){
        return res.status(400).json({
            success:false,
            message:"Both name and description are required"
        });
      }
              const tagDetails = await Category.create({
            name:name,
            description:description
        });
        return res.status(200).json({
            success:true,
            message:"Tags created successfully"
        })
    }catch(error){
        console.error(error);
        return res.status(400).json({
            success:false,
            message:"error occured while creating course",
        })

    }

}

exports.getAllCategories = async(req,res)=>{
    try{
      const allCategories = await Category.find();
      return res.status(200).json({
            success:true,
            message: "All categories fetched successfully",
            data:allCategories,
        });

    }catch(error){

        console.log(error);
        res.status(500).json({
            success:false,
             message:"Unable To Fetch All Category Details",
        });
    }
}