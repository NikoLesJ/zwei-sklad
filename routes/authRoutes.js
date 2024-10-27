const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/auth', authController.authBrain);
router.post('/auth-new', authController.authRozetka);

module.exports = router;
