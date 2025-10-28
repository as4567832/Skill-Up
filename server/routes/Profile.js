const express = require("express");
const router = express.Router();

const { updateProfile, deleteAccount } = require("../controllers/Profile");
const{getEnrolledCourses} = require("../controllers/Profile");

// middleware (auth lagाना ज़रूरी है अगर req.user.id चाहिए)
const { auth } = require("../middleware/auth");

// ✅ Update Profile
router.put("/update", auth, updateProfile);

// ✅ Delete Account
router.delete("/delete", auth, deleteAccount);
router.get("/getEnrolledCourses",auth,getEnrolledCourses);

module.exports = router;
