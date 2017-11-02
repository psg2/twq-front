import axios from 'axios';

axios.interceptors.request.use(config => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    // eslint-disable-next-line
  } catch (err) {
    // throw new Error(err);
  }
  return config;
});

export default {
  get(endpoint) {
    return axios.get(endpoint).then(response => response.data);
  },
  post(endpoint, body) {
    return axios.post(endpoint, body).then(response => response.data);
  },
  put(endpoint, body) {
    return axios.put(endpoint, body).then(response => response.data);
  },
  delete(endpoint) {
    return axios.delete(endpoint).then(response => response.data);
  },
};
