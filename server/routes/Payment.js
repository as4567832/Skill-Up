const express = require("express");
const router = express.Router();

const { capturePayment,verifyPayment } = require("../controllers/Payments");

// middleware 
const { auth,isStudent, isInstructor} = require("../middleware/auth");

// ✅ Capture Payment
router.post("/capturePayment", auth,isStudent, capturePayment);

// ✅ Verify Razorpay Signature 
router.post("/verifyPayment",auth,isStudent,verifyPayment);

module.exports = router;
