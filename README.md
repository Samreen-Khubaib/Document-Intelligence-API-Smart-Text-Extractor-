# 📄 Document Intelligence API – Smart Text Extractor

This is a smart backend API built with Node.js that extracts and returns text from uploaded document images using Optical Character Recognition (OCR) via Tesseract.js.

## 🚀 Project Overview

The goal of this project is to build a Document Intelligence API that can:
- Accept image or scanned document files
- Use OCR to extract readable text
- Return the extracted text in JSON format

## ⚙️ Setup & Run Instructions

### Prerequisites:
- Node.js (v18 or above)
- npm (Node package manager)
- Git

### Clone the Repository:
git clone https://github.com/Samreen-Khubaib/Document-Intelligence-API-Smart-Text-Extractor-.git
cd Document-Intelligence-API-Smart-Text-Extractor-

### Install Dependencies:
npm install

### Run the Server:
node app.js
Server will run on http://localhost:3000

### 📬 Postman Collection
A ready-to-use Postman collection is available in the /postman folder.

To Use:
Open Postman.
Go to File > Import.
Select postman/Smart Text Extractor API.postman_collection.json.
Use the "POST /extract" request.
Attach any sample image from postman/sample-images/ or your own.

### 🛠️ Tools & Libraries Used
Node.js – JavaScript runtime used to run the backend server.
Express.js – Minimal web framework for creating RESTful APIs and handling routing.
multer – Middleware for handling multipart/form-data, primarily used for uploading images and PDFs.
tesseract.js – JavaScript OCR library used to extract text from uploaded image files.
pdf-parse – Module used to extract and parse text content from PDF documents.
fs (File System) – Node.js core module used for reading and writing files to disk (e.g., saving uploads or reading history).
nodemon – Development tool that automatically restarts the server when file changes are detected.
Postman – API testing tool used to simulate requests and test endpoints (not installed via code but used for development and testing purposes).


### 📁 Folder Structure

controllers/ – Defines the functions to handle incoming HTTP requests.
    => extractController.js – Handles OCR text extraction and fetching extraction history.

models/ – Responsible for storing and retrieving application data (in-memory or file-based).
    => historyModel.js – Manages logic related to storing and retrieving OCR history.

routes/ – Maps URL endpoints to controller actions.
    => extractRoutes.js – Defines routes for OCR extraction and retrieving history.

services/ – Business logic layer for OCR and field processing.
   => ocrService.js – Performs OCR using tools like Tesseract.js.
   => fieldExtractor.js – Extracts specific fields (e.g., Name, Date, Invoice No.) from the OCR text.

storage/ – Stores local data for persistent mock behavior.
   => history.json – Stores the OCR extraction history locally as JSON.

uploads/ – Temporarily holds user-uploaded files (images or PDFs) for OCR processing.

app.js – Entry point of the application. Sets up Express server, routes, and middleware.

postman/ – Contains API testing resources for Postman.
   => Smart Text Extractor.postman_collection.json – Postman collection to test OCR extraction and history APIs.
   => download1.png – Sample image file used for testing OCR extraction.
   => Invoice No.pdf – Sample PDF file used to test document text extraction

package.json
   => Lists all npm packages required to run the project (e.g., express, tesseract.js, etc.).

package-lock.json – Automatically generated to lock the exact versions of installed dependencies.
   => Ensures consistent installs across different environments


