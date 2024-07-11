import axios from 'axios';

const API_URL = 'http://localhost:5000/api/transactions';

export const getTransactions = async () => {
  return await axios.get(API_URL);
};

export const createTransaction = async (transaction) => {
  return await axios.post(API_URL, transaction);
};
