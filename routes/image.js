// const express = require("express")

// const fileUpload = require("../controllers/fileUpload")
// const multerFile = require("../utils/multerFile")

// const router = express.Router()

// router.post("/upload" ,multerFile ,  fileUpload)

// module.exports = router


const express = require('express');
const multerFile = require('../utils/multerFile'); // Your multer middleware to handle file uploads
const uploadFile = require('../controllers/fileUpload'); // The controller to handle the file upload

const router = express.Router();

// Route to handle image upload
router.post('/upload', multerFile, uploadFile); // Using multerFile middleware and the uploadFile controller

module.exports = router;
