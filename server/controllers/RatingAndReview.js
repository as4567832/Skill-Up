const RatingAndReview = require("../models/RatingAndReviews");
const Course = require("../models/Course");
const RatingAndReviews = require("../models/RatingAndReviews");

//create rating
exports.creatingRating = async (req, res) => {
  try {
    //get user id
    const userId = req.user.id;

    //fetch data from req body
    const { rating, review, courseId } = req.body;
    //check if user is enrolled or not
    const courseDetails = await Course.findOne({
      _id: courseId,
      studentsEnrolled: { $elemMatch: { $eq: userId } },
    });

    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "Student is not enrolled in course",
      });
    }

    //check if user already reviewed course
    const alreadyReviewed = await RatingAndReviews.findOne({
      user: userId,
      course: courseId,
    });

    if (!alreadyReviewed) {
      return res.status(403).json({
        success: false,
        message: "Course is already reviewed by user",
      });
    }

    //create rating and reviews

    const ratingReview = await RatingAndReviews.create({
      rating,
      review,
      course: courseId,
      user: userId,
    });

    //update course
    await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          ratingAndReviews: ratingReview,
        },
      },
      { new: true }
    );
    //return response
    return res.status(200).json({
      success: true,
      message: "Rating and reviewqs created successfully successfully",
      data: allCourses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occured while creating rating and reviews",
      error: error.message,
    });
  }
};
//find Average rating

exports.getAverageRating = async (req, res) => {
  try {
    //get course id
    const courseId = req.body.courseId;

    //calculate average rating
    const result = await RatingAndReviews.aggregate([
      {
        $match: {
          course: new mongoose.Types.ObjectId(courseId),
        },
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
        },
      },
    ]);
    //return rating
    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        averageRating: result[0].averageRating,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Average rating is 0, no rating given till now",
      averageRating: 0,
    });
  } catch (error) {}
};

//get all rating and reviews

exports.getAllRating = async (req, res) => {
  try {
    const allReviews = await RatingAndReview.finf({})
      .sort({ rating: "desc" })
      .populate({ path: "user", select: "firstName lastName email image" })
      .populate({ path: "course", select: "courseName" })
      .exec();
       return res.status(200).json({
      success: true,
      message: "All reviews fetched successfully",
      data:allReviews,
    });
  } catch (error) {}
};
