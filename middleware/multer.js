import multer from "multer";

const storage = multer.memoryStorage(); // store in memory instead of disk

const upload = multer({ storage: storage });

export default upload;