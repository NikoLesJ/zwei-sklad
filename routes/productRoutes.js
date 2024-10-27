const express = require('express');
const { fetchProducts, updateProduct, fetchProductList } = require('../controllers/productController');
const router = express.Router();

// Маршрут для получения XML данных
router.get('/fetch-products', fetchProducts);

// Маршрут для обновления данных продукта
router.post('/update-product', updateProduct);

// Новый маршрут для получения списка продуктов по categoryID
router.get('/products/:categoryID', fetchProductList);

module.exports = router;
