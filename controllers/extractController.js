const ocrService = require('../services/ocrService');
const fieldExtractor = require('../services/fieldExtractor');
const historyModel = require('../models/historyModel');

exports.extractText = async (req, res) => {
  try {
    const file = req.file;
    const text = await ocrService.extractText(file.path, file.mimetype);
    const fields = fieldExtractor.extractFields(text);

    const result = {
      pages: [{
        page: 1,
        text,
        fields
      }]
    };

    historyModel.saveToHistory(file.originalname, fields);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Extraction failed', details: err.message });
  }
};

exports.getHistory = (req, res) => {
  const history = historyModel.getHistory();
  res.json(history);
};
