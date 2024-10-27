const express = require('express');
const hardcodedCategoryController = require('../controllers/hardcodedCategoryController');

const router = express.Router();

router.get('/hardcoded-categories', hardcodedCategoryController.getCategories);

module.exports = router;
