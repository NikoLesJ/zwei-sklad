const axios = require('axios');

// Fetch XML data
const fetchProducts = async (req, res) => {
  try {
    const response = await axios.get('https://3gdoma.net/prices/adminxml/src/all.xml');
    res.set('Content-Type', 'text/xml');
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении данных' });
  }
};

// Update product data
const updateProduct = async (req, res) => {
  const { id, name, price, picture, vendor, stock_quantity } = req.body;
  try {
    const params = new URLSearchParams({
      id, name, price, picture, vendor, stock_quantity
    }).toString();
    const response = await axios.post('https://3gdoma.net/prices/adminxml/pages/send-to-all.php', params);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при обновлении данных' });
  }
};

// Fetch product list
// Fetch product list
const fetchProductList = async (req, res) => {
  const { categoryID } = req.params;
  const { authKey } = req.query;

  if (!authKey) {
    return res.status(400).json({ error: 'Отсутствует ключ авторизации' });
  }

  if (!categoryID) {
    return res.status(400).json({ error: 'Отсутствует categoryID' });
  }

  try {
    // Формируем URL
    const url = `http://api.brain.com.ua/products/${categoryID}/${authKey}`;
    console.log(`Запрашиваем URL: ${url}`);

    // Получаем список продуктов по категории
    const response = await axios.get(url);
    const products = response.data.result.list;

    console.log(`Получено продуктов: ${products.length}`);

    // Отправляем результат клиенту
    res.json(products);
  } catch (error) {
    console.error(`Ошибка при получении списка продуктов: ${error.message}`);
    res.status(500).json({ error: 'Ошибка при получении данных о продуктах', details: error.message });
  }
};

module.exports = { fetchProducts, updateProduct, fetchProductList };
