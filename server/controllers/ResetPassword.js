const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");

//reset password token, send reset password link
exports.resetPasswordToken = async(req,res)=>{
try{
    //get email from request body
    const email = req.body.email;
    //check user for this email,email validartion
    const user = await User.findOne({email});
    if(!user){
        return res.json({
            success:false,
            message:"Your email in not registered with us",
        });
    }
    //generat token
    const token = crypto.randomUUID();
    //update user by adding token and expiration time
    const updatedDetails = await User.findOneAndUpdate({email:email},{
        token:token,
        resetPasswordExpires:Date.now() + 5*60*1000,
    },{new:true});
    //create url
    const url = `http://localhost:3000/update-password/${token}`;
    // generate email verification link
    await mailSender(email,`Password reset link","Password Reset Link:${url}`);
    //return response
    return res.json({
        success:true,
        message:"mail sent successfully, please chaeck and update password"
    })

}catch(error){
    // console.error(error);
    return res.status(500).json({
        success:false,
        message:"Error occured while sending mail",
    })
}
}



//reset password

exports.resetPassword = async (req,res)=>{
    try{
        //data fetch
        const{resetPassword,confirmPassword,token} = req.body;
        //validation
        if(password !==confirmPassword){
            return res.json({
                success:false,
                message:"Password not matched",
            });
        }
        //get user details from token in db
        const userDetails = await User.findOne({token});
        //if no entry so invalid token,or token time expired
        if(!userDetails){
            return res.json({
                success:false,
                message:"Token is invalid"
            })
        }
        
        if(userDetails.resetPasswordExpires<Date.now()){
            return res.json({
                success:false,
                message:"Token expired",
            })
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password,10);
        //save updated password into database
        await User.findOneAndUpdate({token:token},{password:hashedPassword},{new:true});
        //return response
        return res.status(200).json({
            success:true,
            message:"Password updated successfully"
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Failed to rsest password"
        })
    }
}