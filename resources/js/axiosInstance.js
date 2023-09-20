import axios from 'axios';
import { getAuthToken } from './authUtils'; // Adjust the import path as needed

const axiosInstance = axios.create({
  baseURL: '/api', // Set your API base URL
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAuthToken()}`,
  },
});

export default axiosInstance;
