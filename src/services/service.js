import http from './http';

const serviceService = {
  create: service => http.post('/api/service/', service),

  update: (id, service) => http.put(`/api/service/${id}`, service),

  delete: id => http.delete(`/api/service/${id}`),

  get: (id = '') => http.get(`/api/service/${id}`),

  getAll: () => http.get('/api/service/'),
};

export default serviceService;
