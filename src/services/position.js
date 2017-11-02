import http from './http';

const positionService = {
  create: position => http.post('/api/position/', position),

  update: (id, position) => http.put(`/api/position/${id}`, position),

  delete: id => http.delete(`/api/position/${id}`),

  get: (id = '') => http.get(`/api/position/${id}`),

  getAll: () => http.get('/api/position/'),
};

export default positionService;
