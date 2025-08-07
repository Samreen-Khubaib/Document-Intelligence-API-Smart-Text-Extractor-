const Tesseract = require('tesseract.js');
const fs = require('fs');
const pdf = require('pdf-parse');

exports.extractText = async (filePath, mimetype) => {
  if (mimetype === 'application/pdf') {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
  } else {
    const result = await Tesseract.recognize(filePath, 'eng');
    return result.data.text;
  }
};
