const express = require("express");
const router = express.Router();

// controllers
const {
  createCourse,
  showAllCourses,
  getCourseDetails,
  getInstructorCourses
} = require("../controllers/Course");

// middleware 
const { auth, isInstructor, isStudent} = require("../middleware/auth");
const { createSection, updateSection, deleteSection } = require("../controllers/Section");
const { createSubSection } = require("../controllers/Subsection");
const {creatingRating, getAverageRating, getAllRating} = require('../controllers/RatingAndReview');
const { getEnrolledCourses } = require("../controllers/Profile");

// ✅ Routes

// // create course (only instructor can do this)
router.post("/createCourse",auth,isInstructor,createCourse);
 router.post("/addSection",auth,isInstructor,createSection);
 router.post("/updateSection",auth,isInstructor,updateSection);

 router.post("/deleteSubSection",auth,isInstructor,deleteSection);
//  router.post("/updateSubSection",auth,isInstructor,updateSubSection);
 router.post("/addSubSection",auth,isInstructor,createSubSection);

router.get("/getAllCourses",showAllCourses);

router.post("/createRating",auth,isStudent,creatingRating);
router.post("/getAverageRating",auth,isStudent,getAverageRating);
router.get("/getReviews",getAllRating);
router.post("/getCourseDetails",getCourseDetails);
router.get("/instructorCourses",auth,isInstructor,getInstructorCourses);



module.exports = router;
