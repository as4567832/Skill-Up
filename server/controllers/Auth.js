const User = require("../models/User");
const OTP = require("../models/OTP");
const Profile = require("../models/Profile");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
const {otpTemplate} = require("../mailTemplate/otpTemplate");
require("dotenv").config();

//function to send otp

exports.sendOTP = async (req, res) => {
  try {
    //fetch email from request body
    const { email } = req.body;
    //check if user already exists
    const checkUserPresent = await User.findOne({ email });
    //if user already exists then return response

    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User already exists",
      });
    }

    //generate OTP

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerAlphabets: false,
      specialCharacters: false,
    });
    // console.log("OTP GENERATED:", otp);
    //to check otp is unique
    const result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator(6, {
        upperCaseAlphabets: false,
        lowerAlphabets: false,
        specialCharacters: false,
      });
      result = await OTP.findOne({ otp: otp });
    }
    const otpPayload = { email, otp };
    //create aqn entry in database for otp
    const otpBody = await OTP.create(otpPayload);


    //return response successfull
    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      success: false,
      message: "error occured while sending otp please try again",
    });
  }
};
//signup

exports.signUp = async (req, res) => {
try{
  //data fetch from rerquest body
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    accountType,
    contactNumber,
    otp,
  } = req.body;

  //validate data
  if(!firstName || !lastName || !email || !password || !otp){
    return res.status(403).json({
        success:false,
        message:"All fields are required",
    });
  }

  //match both passwords(password and confirm password)
  if(password !==confirmPassword){
    return res.status(400).json({
        success:false,
        message:"Password and Confirm password values does not match, please try again",
    })
  }
  //check if user alreacy exists
  const existingUser = await User.findOne({email});
  if(existingUser){
    return res.status(400).json({
        success:false,
        message:"User is already registered",
    });
  }

  //find most recent otp for user if all is well
  const recentOtp = await OTP.findOne({email}).sort({createdAt:-1});
  console.log(recentOtp);
  //validate otp
  if(!recentOtp){
    return res.status(400).json({
        success:false,
        message:"OTP not found",
    })
  }
  else if(otp!==recentOtp.otp){
    return res.status(400).json({
        success:false,
        message:"Invalid OTP"
    })


  }
  //hash password
  const hashedPassword = await bcrypt.hash(password,10);
  //create entry in db
  const profileDetails = await Profile.create({
    gender:null,
    dateOfBirth:null,
    about:null,
    contactNumber:null
  })
  const user = await User.create({
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:hashedPassword,
    accountType:accountType,
    additionalDetails:profileDetails._id,
    image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
  })
  //return response
  res.status(200).json({
    success:true,
    message:"User created Successfully",
    user
  });
}catch(error){
    // console.log(error);
    return res.status(401).json({
        success:false,
        message:"some error occured while creating user,please try again later"
    })
}
};
//login

exports.login = async(req,res)=>{
    try{
        //get data from request body
        const{email,password} = req.body;
        //validate data
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required, Please try again"
            })
        }
        //check if user already exists
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Account does not exists please create it first"
            })
        }
        //generate jwt token,after password match
        if(await bcrypt.compare(password,user.password)){
            const payload = {
                email:user.email,
                id:user._id,
                role:user.accountType,
                image:user.image,
                name:user.firstName + " " + user.lastName,
            }
            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            console.log(token)
            user.token = token; //inserted token in user
            user.password = undefined;
             const options ={
            expires:new Date(Date.now() +  3*24*60*60*1000),
            httpOnly:true
        }
        //create cookie
        res.cookie("token",token,options).status(200).json({
            token,
            user,
            message:"Logged in successfully"
        })

        }
        else{
            return res.status(401).json({
                success:false,
                message:"password is incorrect"
            })
        }
       


    }
    catch(error){
        // console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login failed, please try again"
        })

    }

}
//change password

exports.changePassword = async(req,res)=>{
//get data from request body
//get old password,new password,confirm poassword
//validation
//update password in database
//send mail -password updated
//return response
}
