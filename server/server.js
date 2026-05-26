const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const MenuItem = require('./models/MenuItem');

const app = express();

// Connect to MongoDB and auto-seed if empty
const startServer = async () => {
  await connectDB();
  const count = await MenuItem.countDocuments();
  if (count === 0) {
    const { menuItems } = require('./seedData');
    await MenuItem.insertMany(menuItems);
    console.log('Database auto-seeded with menu items!');
  }
};

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  process.env.CLIENT_URL
].filter(Boolean);
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/menu', require('./routes/menu'));
app.use('/api/reservations', require('./routes/reservations'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/newsletter', require('./routes/newsletter'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/orders'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'NovaBite API is running' });
});

const PORT = process.env.PORT || 5000;
startServer().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
