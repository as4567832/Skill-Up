const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

//auth
exports.auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token =
      req.cookies?.token ||
      req.body?.token ||
      (authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null);

    if (!token) {
      return res.status(401).json({ success: false, message: "Token missing" });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      console.log("Decoded token:", decode);
    } catch (error) {
      return res.status(401).json({ success: false, message: "Token is invalid" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: "Something went wrong while validating the token" });
  }
};


//isStudent

exports.isStudent = async(req,res,next)=>{
    try{
         if(req.user.role!=="Student"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for students only"
            });
         }
           next();
    }catch(error){
        return res.status(500).json({
            success:true,
            message:"User role cannot be verified, please try again later"
        })

    }
}

//isInstructor
exports.isInstructor = async(req,res,next)=>{
    try{
         if(req.user.role!=="Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Instructor only"
            });
         }
           next();
    }catch(error){
        return res.status(500).json({
            success:true,
            message:"User role cannot be verified, please try again later"
        })

    }
}

//isAdmin


exports.isAdmin = async(req,res,next)=>{
    try{
         if(req.user.accountType!=="Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin only"
            });
         }
           next();
    }catch(error){
        return res.status(500).json({
            success:true,
            message:"User role cannot be verified, please try again later"
        })

    }
}