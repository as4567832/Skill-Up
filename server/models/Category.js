const mongoose = require("mongoose");
require("dotenv").config();
const CategorySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Category",CategorySchema);