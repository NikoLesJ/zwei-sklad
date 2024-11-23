const axios = require('axios');

// Функция для обновления XML через PHP скрипт
const updateXMLFile = async (req, res, phpScriptUrl) => {
  try {
    const response = await axios.post(phpScriptUrl, req.body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error updating XML:', error.response ? error.response.data : error.message);
    res.status(500).json({ success: false, message: 'Error updating XML' });
  }
};

// Обновление основного XML
exports.updateXML = async (req, res) => {
  const phpScriptUrl = 'https://3gdoma.net/prices/adminxml/pages/react-xml-update.php';
  await updateXMLFile(req, res, phpScriptUrl);
};

// Обновление XML Rozetka
exports.updateXMLRozetka = async (req, res) => {
  const phpScriptUrl = 'https://3gdoma.net/prices/adminxml/pages/react-xml-update-rozetka.php';
  await updateXMLFile(req, res, phpScriptUrl);
};

// Обновление XML Allo
exports.updateXMLAllo = async (req, res) => {
  const phpScriptUrl = 'https://3gdoma.net/prices/adminxml/pages/react-xml-update-allo.php';
  await updateXMLFile(req, res, phpScriptUrl);
};

// Обновление XML Prom
exports.updateXMLProm = async (req, res) => {
  const phpScriptUrl = 'https://3gdoma.net/prices/adminxml/pages/react-xml-update-prom.php';
  await updateXMLFile(req, res, phpScriptUrl);
};

// Обновление XML HOTLINE
exports.updateXMLHli = async (req, res) => {
  const phpScriptUrl = 'https://3gdoma.net/prices/adminxml/pages/react-xml-update-hli.php';
  await updateXMLFile(req, res, phpScriptUrl);
};

// Получение XML-файла
const fetchXML = async (url, res) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      res.set('Content-Type', 'application/xml');
      res.send(response.data);
    } else {
      throw new Error(`Failed to fetch XML: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching XML:', error.response ? error.response.data : error.message);
    res.status(500).json({ success: false, message: 'Error fetching XML' });
  }
};

exports.getXML = (req, res) => {
  const xmlUrl = 'https://3gdoma.net/prices/adminxml/src/react-xml-all.xml';
  fetchXML(xmlUrl, res);
};

exports.getXMLRoz = (req, res) => {
  const xmlUrl = 'https://3gdoma.net/prices/price-rozetka.xml';
  fetchXML(xmlUrl, res);
};

exports.getXMLAllo = (req, res) => {
  const xmlUrl = 'https://3gdoma.net/prices/price-allo.xml';
  fetchXML(xmlUrl, res);
};

exports.getXMLProm = (req, res) => {
  const xmlUrl = 'https://3gdoma.net/prices/adminxml/src/price-prom.xml';
  fetchXML(xmlUrl, res);
};

exports.getXMLHotline = (req, res) => {
  const xmlUrl = 'https://3gdoma.net/prices/hli.xml';
  fetchXML(xmlUrl, res);
};