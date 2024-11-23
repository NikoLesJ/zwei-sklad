// routes/xmlRoutes.js
const express = require('express');
const router = express.Router();
const xmlController = require('../controllers/xmlController');

router.post('/update-xml', xmlController.updateXML);
router.post('/update-rozetka', xmlController.updateXMLRozetka);
router.post('/update-allo', xmlController.updateXMLAllo);
router.post('/update-prom', xmlController.updateXMLProm);
router.post('/update-hli', xmlController.updateXMLHli);
router.get('/get-xml', xmlController.getXML);
router.get('/get-xml-roz', xmlController.getXMLRoz);
router.get('/get-xml-allo', xmlController.getXMLAllo);
router.get('/get-xml-prom', xmlController.getXMLProm);
router.get('/get-xml-hli', xmlController.getXMLHotline);

module.exports = router;