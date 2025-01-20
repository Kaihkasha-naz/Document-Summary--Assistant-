const mongoose = require('mongoose');

// Define the Document schema
const documentSchema = new mongoose.Schema({
  summary: {
    type: String,
    required: true,  // Ensures the summary field is required
  },
  extractedText: {
    type: String,
    required: true,  // Ensures the extractedText field is required
  },
  // Add other fields if necessary (e.g., file details)
});

// Create a Mongoose model based on the schema
const Document = mongoose.model('Document', documentSchema);

// Export the model to use it in other parts of the application
module.exports = Document;
