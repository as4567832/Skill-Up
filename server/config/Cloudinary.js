const cloudinary = require("cloudinary").v2;

function connectCloudinary() {
  cloudinary.config({
    cloud_name: "dzzjn8vaz", 
    api_key: "548447331121671",   
    api_secret: "Up7GWyM8WNuLb5VqhIXNMpEGBpA" 
  });
   console.log("✅ Cloudinary connected successfully");
}

module.exports = connectCloudinary;
