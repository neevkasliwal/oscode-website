const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/oscode_bmsce';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const contactRouter = require('./routes/contact');
app.use('/api/contact', contactRouter);

app.get('/', (req, res) => {
  res.send('Oscode BMSCE API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
