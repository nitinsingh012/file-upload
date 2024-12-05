const mongoose = require('mongoose');

// Define the schema for the Image model
const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true, // Ensure each image has a URL
  },
  uploadDate: {
    type: Date,
    default: Date.now, // Automatically set the upload date
  },
});

// Create the Image model using the schema
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
