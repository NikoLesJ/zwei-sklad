const axios = require('axios');

const authController = {
  authBrain: async (req, res) => {
    const { login, password } = req.body;

    try {
      const response = await axios.post('http://api.brain.com.ua/auth', 
        `login=${login}&password=${password}`, 
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
      res.json(response.data);
    } catch (error) {
      handleError(res, error);
    }
  },

  authRozetka: async (req, res) => {
    const { username, password } = req.body;

    try {
      const response = await axios.post('https://api-seller.rozetka.com.ua/sites', 
        `username=${username}&password=${password}`, 
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
      res.json(response.data);
    } catch (error) {
      handleError(res, error);
    }
  },
};

// Общая обработка ошибок
const handleError = (res, error) => {
  if (error.response) {
    res.status(error.response.status).json({ error: 'Ошибка при авторизации', details: error.response.data });
  } else if (error.request) {
    res.status(500).json({ error: 'Ошибка сети', details: error.message });
  } else {
    res.status(500).json({ error: 'Неожиданная ошибка', details: error.message });
  }
};

module.exports = authController;
