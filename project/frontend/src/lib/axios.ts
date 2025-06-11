import axios from 'axios';
// import { refreshAccessToken } from '../services/auth.service';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  withCredentials: true
});

export default api;