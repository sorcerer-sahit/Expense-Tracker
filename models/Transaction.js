const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  category: String
});

module.exports = mongoose.model('Transaction', TransactionSchema);
