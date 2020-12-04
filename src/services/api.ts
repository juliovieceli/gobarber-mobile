import axios from 'axios';

const api = axios.create({
  baseURL: 'http://f7c398c725ea.ngrok.io',
});

export default api;
