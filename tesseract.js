const Tesseract = require('tesseract.js');

Tesseract.recognize(
  'path_to_image_file', // Path to your image file
  'eng', // Language code (English)
  {
    logger: (m) => console.log(m) // Optionally log progress
  }
).then(({ data: { text } }) => {
  console.log(text); // Output the recognized text
}).catch(err => {
  console.error('Error:', err);
});
