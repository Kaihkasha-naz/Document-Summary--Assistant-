const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();
require("./config/db");
const generateSummary = require('./utils/summarizer');

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// API Route for File Upload & Summary Generation
app.post('/api/uploads', upload.single('document'), async (req, res) => {
  try {
    const file = req.file;
    const summaryLength = req.body.summaryLength;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Ensure generateSummary is called correctly
    //const summary = await generateSummary(file.path, summaryLength);
    const summary = await generateSummary(req.file.path, req.body.summaryLength);
    res.status(200).json({ summary });
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).json({ message: 'Failed to generate summary' });
  }
});

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
