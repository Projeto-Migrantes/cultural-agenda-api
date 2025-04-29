import { cloudinary } from "../config/cloudinary.config.js";

const deleteImage = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
    return true;
  } catch (error) {
    throw new Error("Error deleting image from Cloudinary: ", error);
  }
};

export { deleteImage };
