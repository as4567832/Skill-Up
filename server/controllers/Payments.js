const razorpay = require("razorpay");
const{instance} = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const mongoose = require("mongoose");
const crypto = require("crypto");



//capture the payment and initiate the razorpay order

exports.capturePayment = async(req,res)=>{
    const {courses} = req.body;
    console.log("Courses data coming is:",courses);
    const userId = req.user.id;

    if(courses.length===0){
        return res.json({
            success:false,
            message:"Please add a valid course"
        });
    }
    let totalAmount = 0;
    for(const course_id of courses){
        let course;
        try{
            console.log("course id is type of:",typeof(course_id));
            course = await Course.findById(course_id);
            if(!course){
                return res.status(200).json({
                    success:false,
                    message:"Could not find any course"
                })
            }

            const uid = new mongoose.Types.ObjectId(userId);
            if(course.studentsEnrolled.includes(uid)){
                return res.status(200).json({
                    success:false,
                    message:"You are already enrolled in course"
                })
            }
            totalAmount = totalAmount + course.price;


        }catch(error){
            console.log(error);
            return res.status(400).json({
                success:false,
                message:"Error occured while buying course"
            })

        }
    }
    const options = {
        amount:totalAmount * 100,
        currency:"INR",
        receipt:Math.random(Date.now()).toString(),
    }
                console.log("done")
    try{
        const paymentResponse = await instance.orders.create(options);
        return res.status(200).json({
            success:true,
            message:paymentResponse,
            key:process.env.RAZORPAY_KEY
        })

    }catch(error){
      console.log(error);
      return res.status(500).json({
        success:false,
        message:error
      })
    }
}


exports.verifyPayment = async(req,res)=>{
    const razorpay_order_id = req.body?.razorpay_order_id;
    const razorpay_payment_id = req.body?.razorpay_payment_id;
    const razorpay_signature = req.body?.razorpay_signature;
    const courses = req.body?.courses;
    const userId = req.user.id;
    console.log("hi hello jee")
    if(!razorpay_order_id||!razorpay_payment_id||!razorpay_signature||!courses||!userId){
        return res.status(200).json({
            success:false,
            message:"Payment failed"
        });
    }

    let body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac("sha256",process.env.RAZORPAY_SECRET).update(body.toString()).digest("hex");
    console.log("Expected:", expectedSignature);
    console.log("Actual:", razorpay_signature);

    if(expectedSignature ===razorpay_signature){
        //enroll student to course

        await enrollStudent(courses,userId,res);

        //return response
        return res.status(200).json({
            success:true,
            message:"Payment verified successfully"
        })
    }
     return res.status(200).json({
        success:false,
        message:"Payment failed"
     })


}

const enrollStudent =async(courses,userId,res)=>{
      if(!courses||!userId){
        return res.status(400).json({
            success:false,
            message:"Please provide data for courses"
        })
      }
try{
          for(const courseId of courses){
        const enrolledCourse = await Course.findOneAndUpdate({_id:courseId},{$push:{studentsEnrolled:userId}},{new:true})
        if(!enrolledCourse){
            return res.status(500).json({
        success:false,
        message:"Course not found"
     });
        }

        //findin student and adding course to their profile
        const enrolledStudent = await User.findByIdAndUpdate(userId,{$push:{courses:courseId}},{new:true});
        

      }
}catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"Something went wrong try again later"
     });

}
}

// exports.capturePayment = async(req,res)=>{
//     //get course id and user id
//     const{course_id} = req.body;
//     const userId = req.user.id;
//     //validatrion
//     if(!course_id){
//         return res.json({
//             success:false,
//             message:"Please provide valid course id"

//         });
// }


//     //valid course id
//     let course;
//     try{
//         course = await Course.findById(course_id);
//         if(!course){
//              return res.json({
//             success:false,
//             message:"Course could not find",

//         });
//         }
//             //user already paid for same course
//             const uid = new mongoose.Types.ObjectId(userId);
//             if(course.studentsEnrolled.includes(uid)){
//                 return res.json({
//                     success:false,
//                     message:"user is already enrolled",
//                 })
//             }
//     }catch(error){
//         // console.error(error);
//         return res.status(500).json({
//             success:false,
//             message:error.message,
//         })
//     }
//     //create order
//     const amount = Course.price;
//     const currency ="INR";
//     const options ={
//         amount:amount*100,
//         currency:currency,
//         reciept:Math.random(Date.now()).toString(),
//         notes:{
//             courseId:course_id,
//             userId,
//         }


//     };
//     try{
//         //initiate the payment using razorpay
//         const paymentResponse = await instance.orders.create(options);
//         // console.log(paymentResponse);

//         return res.json({
//                     success:true,
//                     courseName:Course.courseName,
//                     courseDescription:Course.courseDescription,
//                     thumbnail:Course.thumbnail,
//                     orderId: paymentResponse.id,
//                     currency:paymentResponse.currency,
//                     amount:paymentResponse.amount,
//                     message:"user is already enrolled",
//     })

//     }catch(error){
//         // console.log(error);
//         return res.status(500).json({
//             success:false,
//             message:"could not initiate order",
//         })
//     }

//     //create order and return response
// }


// //verify signature of razorpay and server

// exports.verifySignature = async(req,res)=>{
//     const webhookSecret = "12345678";
//     const signature = req.headers["x-razorpay-signature"];
//     const shasum = crypto.createHmac("sha256",webhookSecret);
//     shasum.update(JSON.stringify(req.body));
//     const digest = shasum.digest("hex");
//     if(signature === digest){
//         // console.log("Payment is authorised");
//         //
//         const{courseId,userId} = req.body.payload.payment.entity.notes;
//         try{
//             //fulfil the action
             
//             //enroll the student to course
//             const enrolledCourse = await Course.findOneAndUpdate(
//                 {_id:courseId},
//                 {$push:{studentsEnrolled:userId}},
//                 {new:true}
//             );
//             if(!enrolledCourse){
//                 return res.status(500).json({
//                     success:false,
//                     message:"Course not found"
//                 })
//             }
//             // console.log(enrolledCourse);

//             //find the student and add the course to their list of enrolled courses
//             const enrolledStudent = await User.findOneAndUpdate(
//                 {_id:userId},
//                 {
//                     $push:{
//                         courses:courseId,
//                     }
//                 },
//                 {new:true}
//             );
//             //send confirmation mail to student
//             const emailResponse = await mailSender(
//                 enrolledStudent.email,
//                 "Congratulations from skillshare",
//                 "Congratulations you are onboarded into your new course",
//             );
//             // console.log(emailResponse);
//             return res.status(200).json({
//                 success:true,
//                 message:"Signature Verified and course added",
//             })

//         }catch(error){
//         // console.log(error);
//         return res.status(500).json({
//             success:false,
//             message:error.message
//         })
//         }
//     }
//     else{
//         return res.status(400).json({
//             success:false,
//             message:"Invalid request",
//         })
//     }

// }

