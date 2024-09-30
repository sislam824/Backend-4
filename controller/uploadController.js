const multer = require("multer");
const logger = require("../services/logService");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });


exports.uploadFile = (req, res) => {

  logger.logEvent("File Uploaded", req.body.studentId);
  res.status(200).json({ message: "File uploaded successfully." });
};


exports.uploadMiddleware = upload.single("file");
