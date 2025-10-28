const express = require("express");
const router =  express.Router();
const{sendOTP,signUp,login,changePassword} = require('../controllers/Auth');

router.post("/sendotp",sendOTP);
router.post("/signup",signUp);
router.post("/login",login);
router.post("/changepassword",changePassword);

module.exports = router;
