const fs = require('fs');
const pdfParse = require('pdf-parse');

/**
 * Extracts text from a PDF file and summarizes it.
 * @param {string} filePath - The path to the uploaded PDF file.
 * @param {string} summaryLength - The requested summary length (short, medium, long).
 * @returns {Promise<string>} - The summarized text.
 */
async function generateSummary(filePath, summaryLength) {
  try {
    // Read and parse the PDF file
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(dataBuffer);
    const extractedText = pdfData.text;

    if (!extractedText) {
      throw new Error('No text found in PDF');
    }

    // Generate a summary based on the requested length
    return summarizeText(extractedText, summaryLength);
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw new Error('Failed to extract text from PDF');
  }
}

/**
 * Summarizes the given text based on the specified length.
 * @param {string} text - The extracted text from the PDF.
 * @param {string} summaryLength - The requested summary length.
 * @returns {string} - The summarized text.
 */
function summarizeText(text, summaryLength) {
  // Split text into sentences
  const sentences = text.split('. ').map(s => s.trim());
  let summarySize;

  // Define summary size based on requested length
  switch (summaryLength) {
    case 'short':
      summarySize = Math.max(3, Math.floor(sentences.length * 0.2)); // 20% of original
      break;
    case 'medium':
      summarySize = Math.max(5, Math.floor(sentences.length * 0.4)); // 40% of original
      break;
    case 'long':
      summarySize = Math.max(7, Math.floor(sentences.length * 0.6)); // 60% of original
      break;
    default:
      summarySize = Math.max(5, Math.floor(sentences.length * 0.3)); // Default to 30%
  }

  // Create summary by taking the first few sentences
  const summary = sentences.slice(0, summarySize).join('. ') + '.';
  return summary || 'Summary not available.';
}

module.exports = generateSummary;
