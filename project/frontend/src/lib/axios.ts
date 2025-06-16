import { csrfTokenAtom } from '@/stores/csrfAtom';
import axios from 'axios';
import { getDefaultStore } from 'jotai';

const store = getDefaultStore()

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  withCredentials: true
});

api.interceptors.request.use(config => {
  const token = store.get(csrfTokenAtom)

  if (token && ["post", "put", "patch", "delete"].includes(config.method || "")) {
    config.headers["X-CSRF-Token"] = token
  }

  return config
}, error => {
  return Promise.reject(error)
})

export default api;