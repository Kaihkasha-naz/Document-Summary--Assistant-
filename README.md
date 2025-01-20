Document Summary Assistant 
 
Overview 
 
The Document Summary Assistant is a web application that allows users to upload PDF and image files, extract text using OCR (Tesseract.js), and generate smart summaries based on user-defined length preferences (short, medium, long). The backend is built with Node.js, Express, and MongoDB. 
 
>> Features 
 
*Upload PDF and image files for text extraction. 
 
*Extract text using pdf-parse for PDFs and Tesseract.js for images. 
 
*Generate summaries based on different lengths. 
 
*Store extracted text and summaries in MongoDB. 
 
*Simple web interface for file upload and summary display. 
 
>>Prerequisites 
 
Ensure you have the following installed: 
 
*Node.js 
 
*MongoDB 
 
Installation 
 
1. Clone the Repository 
 
git clone https://github.com/Kaihkasha-naz/document-summary-assistant.git 
cd document-summary-assistant 
 
2. Install Dependencies 
 
npm install 
 
3. Set Up MongoDB 
 
Ensure MongoDB is running locally or provide a remote database connection. 
Modify config/db.js if needed. 
 
4. Run the Server 
 
npm start 
 
The server will run on http://localhost:5000 
 
Project Structure 
 
project-root/ 
│── config/ 
│   └── db.js        # Database configuration 
│── controllers/ 
│   └── documentController.js  # Handles document upload and processing 
│── models/ 
│   └── Document.js  # Mongoose schema for storing extracted data 
│── public/ 
│   └── uploads/  # Stores uploaded files 
│── routes/ 
│   └── documentRoutes.js  # API endpoints 
│── utils/ 
│   ├── summarizer.js  # Generates text summaries 
│ 
│── public/uploads 
│   └── index.html  # Frontend UI 
│── app.js  # Main server file 
│── package.json 
│── tesseract.js, summaryService.js 
 
API Endpoints 
 
1. Upload a Document 
 
Endpoint: POST /api/uploads 
 
Body: multipart/form-data 
 
document: File (PDF/Image) 
 
summaryLength: (short | medium | long) 
 
Response: 
 
{ 
  "summary": "Generated summary text." 
} 
 
2. Retrieve Uploaded Documents (Optional Feature) 
 
Endpoint: GET /api/documents 
 
Response: 
 
[ 
  { 
    "id": "document_id", 
    "summary": "Summarized text", 
    "extractedText": "Full extracted text" 
  } 
] 
 
>> Frontend Usage 
 
1. Open views/index.html in a browser. 
 
2. Select a file and choose a summary length. 
 
3. Click Upload Document to generate a summary. 
 
4. View the summarized text output on the page. 
 
>> Technologies Used 
 
*Backend: Node.js, Express, MongoDB, Multer (File Upload) 
 
*Text Extraction: pdf-parse, Tesseract.js (OCR) 
 
*Frontend: HTML, CSS, JavaScript (Fetch API) 
 
>> Troubleshooting 
 
*MongoDB Connection Error: Ensure MongoDB is running. 
 
*File Upload Issues: Check if public/uploads/ exists and is writable. 
 
*Summary Not Generating: Ensure summarizer.js is correctly processing text. 
 
>> Future Enhancements 
 
*Add user authentication. 
 
*Provide multi-language OCR support. 
 
*Improve summary algorithm using AI models. 
 
License 
 
This project is licensed under the MIT License. 
