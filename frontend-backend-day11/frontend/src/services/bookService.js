import api from './api';

export const getBooks = async () => {
  try {
    const res = await api.get('/books');
    return res.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const addBook = async (book) => {
  try {
    const res = await api.post('/books', book);
    return res.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};
