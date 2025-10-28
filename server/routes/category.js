const express = require("express");
const router =express.Router();
const {createCategory,getAllCategories} = require("../controllers/Category")

router.post("/createCategory",createCategory); 
router.get("/getAllCategories",getAllCategories); 
module.exports = router;
