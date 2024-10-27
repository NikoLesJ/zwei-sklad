const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: ['http://localhost:3000', 'https://creator.zwei.fun/partners'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Логирование запросов
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Import routes
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const excelRoutes = require('./routes/excelRoutes');
const hardcodedCategoryRoutes = require('./routes/hardcodedCategoryRoutes');
const xmlRoutes = require('./routes/xmlRoutes');

// Use routes
app.use('/api', productRoutes);
app.use('/api', authRoutes);
app.use('/api', categoryRoutes);
app.use('/api', excelRoutes);
app.use('/api', hardcodedCategoryRoutes);
app.use('/api', xmlRoutes);

// Базовый маршрут для проверки работы сервера
app.get('/api', (req, res) => {
  res.send('API сервер работает');
});

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Что-то пошло не так!');
});

// Если вы хотите, чтобы сервер также обслуживал фронтенд:
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

// Start server
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});