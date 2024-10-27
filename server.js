const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: ['http://localhost:3000', 'https://zwei.fun'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Добавьте 'Authorization' если используете токены
  credentials: true // Добавьте это, если вам нужно отправлять куки
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Import routes
const productRoutes = require('./server/routes/productRoutes');
const authRoutes = require('./server/routes/authRoutes');
const categoryRoutes = require('./server/routes/categoryRoutes');
const excelRoutes = require('./server/routes/excelRoutes');
const hardcodedCategoryRoutes = require('./server/routes/hardcodedCategoryRoutes');
const xmlRoutes = require('./server/routes/xmlRoutes');

// После всех маршрутов
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Что-то пошло не так!');
});

app.get('/', (req, res) => {
  res.send('Сервер работает');
});
// Use routes
app.use('/api', productRoutes);
app.use('/api', authRoutes);
app.use('/api', categoryRoutes);
app.use('/api', excelRoutes);
app.use('/api', hardcodedCategoryRoutes);
app.use('/api', xmlRoutes);

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});
// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
