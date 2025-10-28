const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const { otpTemplate } = require("../mailTemplate/otpTemplate");
require("dotenv").config();
const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:5*60,
    }
});

// a function to send email

async function sendVerificationEmail(email,otp){
    try{
        const htmlMail = otpTemplate(otp);
        await mailSender(email,"Verification email",htmlMail);
        // console.log("Email sent successfully");

    }catch(error){
        // console.log("error occured while sending email:",error);

        throw error;
    }

}
//verification mail document save karne se pehle karte hai thats why pre save middleware laga hai taaki document save hone se pehle mail chala jaye
OTPSchema.pre("save",async function(next){
    await sendVerificationEmail(this.email,this.otp);
    next();
})

module.exports = mongoose.model("OTP",OTPSchema)