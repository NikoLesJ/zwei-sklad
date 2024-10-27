const express = require('express');
const router = express.Router();
const excelController = require('../controllers/excelController');

// Маршрут для получения данных из Excel
router.get('/excel-data', excelController.getExcelData);

module.exports = router;
