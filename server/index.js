const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const app = express();

// Import routes
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payment");
const courseRoutes = require("./routes/Course");
const categoryRoutes = require("./routes/category");

// Database + Cloudinary
const database = require("./config/database");
const cloudinaryConnect = require("./config/Cloudinary");

// Connect to DB
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "temp",
  })
);

// Cloudinary
cloudinaryConnect();

// API Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/category", categoryRoutes);

// ✅ Serve Frontend (React build)
app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Export app for Vercel
module.exports = app;

// ✅ Local development (only runs if not on Vercel)
const PORT = process.env.PORT || 4000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
