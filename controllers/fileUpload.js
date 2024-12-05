// const upload = require("../utils/upload")

// const uploadFile = async (req,res,next)=>{
//     if(!req.file){
//         const error = new Error("please provide a image")
//         error.statusCode = 400
//         throw error
//     }
//     const result = await upload(req.file)
//         // console.log(result)
//         res.status(200).json({message : 'sucess', image : result?.secure_url})



// }
// module.exports = uploadFile
const Image = require('../models/db'); // Import the Image model
const upload = require("../utils/upload"); // Import your upload utility function

const uploadFile = async (req, res, next) => {
    if (!req.file) {
        const error = new Error("Please provide an image");
        error.statusCode = 400;
        throw error;
    }

    try {
        // Upload the file using your upload utility
        const result = await upload(req.file); 
        console.log(result); // Log the result from Cloudinary or other upload service

        // Save the image URL to the database
        const newImage = new Image({ url: result?.secure_url }); // Create a new document
        await newImage.save(); // Save it to MongoDB

        // Respond with success message and the image URL
        res.status(200).json({ message: 'Success', image: result?.secure_url });

    } catch (error) {
        // Handle any errors during the upload process
        console.error('Error uploading image:', error);
        next(error); // Pass the error to the next middleware (error handler)
    }
};

module.exports = uploadFile;
