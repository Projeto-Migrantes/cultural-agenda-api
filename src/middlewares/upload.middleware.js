import { storage } from "../config/cloudinary.config.js";
import multer from "multer";

const upload = multer({ storage });

export default upload;
