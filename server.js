const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/expense-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Could not connect to MongoDB', err);
});

app.get('/', (req, res) => {
  res.send('Expense Tracker API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const transactionRoutes = require('./routes/transactions');
app.use('/api/transactions', transactionRoutes);
