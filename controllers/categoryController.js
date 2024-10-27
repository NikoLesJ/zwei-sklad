const axios = require('axios');

const categoryController = {
  fetchCategories: async (req, res) => {
    const authKey = req.query.authKey;
    if (!authKey) {
      return res.status(400).json({ error: 'Отсутствует ключ авторизации' });
    }

    try {
      const response = await axios.get(`http://api.brain.com.ua/categories`, { params: { authKey } });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при получении категорий' });
    }
  },
};

module.exports = categoryController;
