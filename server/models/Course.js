const mongoose = require('mongoose');
require('dotenv').config();

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        trim:true,
    },
    courseDescription:{
        type:String,
    },
    instructor:{   
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    whatYouWillLearn:{
        type:String
    },
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section"
        }
    ],
    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReviews",
        }
    ],
    price:{
        type:Number
    },
    thumbnail:{
        type:String
    },
    tag:{
        type:[String],
        ref:"Tag"
    },
    category:{
    type:mongoose.Types.ObjectId,
    ref:"Category",
    },
    studentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        }
    ],
    instructions:{
        type:[String]
    },
    status:{
        type:String,
        enum:["Draft" , "Published"],
    }
});

module.exports = mongoose.model("Course",courseSchema);