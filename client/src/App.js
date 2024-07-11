import React, { useState, useEffect } from 'react';
import { getTransactions, createTransaction } from './api/transactions';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ title: '', amount: '', category: '' });

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const { data } = await getTransactions();
    setTransactions(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTransaction(form);
    fetchTransactions();
    setForm({ title: '', amount: '', category: '' });
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <button type="submit">Add Transaction</button>
      </form>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.title} - ${transaction.amount} - {transaction.category} - {new Date(transaction.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
