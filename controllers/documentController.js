const Document = require('../models/Document'); // Import the Document model

// Controller function to handle document upload
const uploadDocument = async (req, res) => {
  try {
    // Extract 'summary' and 'extractedText' from the request body
    const { summary, extractedText } = req.body; 

    // Validate that both 'summary' and 'extractedText' are provided
    if (!summary || !extractedText) {
      return res.status(400).json({ message: 'Summary and extracted text are required.' });
    }

    // Create a new Document instance
    const newDocument = new Document({
      summary,          // Assign summary from request body
      extractedText,    // Assign extracted text from request body
    });

    // Save the new document to the database
    await newDocument.save();
    
    // Respond with success message
    res.status(200).json({ message: 'Document uploaded successfully.' });
  } catch (err) {
    console.error('Error uploading document:', err);
    res.status(500).json({ message: 'Error uploading document.', error: err });
  }
};

// Export the controller function
module.exports = { uploadDocument };



