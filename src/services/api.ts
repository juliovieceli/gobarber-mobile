import axios from 'axios';

const api = axios.create({
  baseURL: 'http://4d8155cf9e2c.ngrok.io',
});

export default api;
