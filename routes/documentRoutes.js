const express = require('express');
const router = express.Router();

// Import the controller functions
const { uploadDocument } = require('../controllers/documentController');

// Define the route for document upload
//router.post('/upload', uploadDocument); // POST request to '/upload' triggers uploadDocument

// Export the routes so they can be used in the app
module.exports = router;
