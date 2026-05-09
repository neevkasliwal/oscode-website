const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const contactRouter = require('./routes/contact');
app.use('/api/contact', contactRouter);

app.get('/', (req, res) => {
  res.send('Oscode BMSCE API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
