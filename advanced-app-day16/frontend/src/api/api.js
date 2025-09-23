import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // must match backend port
});

export default API;
