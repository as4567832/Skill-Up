const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log(" Database Connected Successfully");
  } catch (error) {
    console.error(" Database connection failed:", error.message);
    process.exit(1);
  }
};
