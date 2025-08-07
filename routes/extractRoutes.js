const express = require('express');
const multer = require('multer');
const { extractText, getHistory } = require('../controllers/extractController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), extractText);
router.get('/history', getHistory);

module.exports = router;
