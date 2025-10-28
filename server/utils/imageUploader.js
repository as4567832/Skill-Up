const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = { folder };

  if (height) options.height = height;
  if (quality) options.quality = quality;

  // Explicitly handle video uploads
  if (file.mimetype.startsWith("video")) {
    options.resource_type = "video";
  } else {
    options.resource_type = "image"; // or "auto"
  }

  return await cloudinary.uploader.upload(file.tempFilePath, options);
};
