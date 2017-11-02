import http from './http';

const taskService = {
  create: task => http.post('/api/task/', task),

  update: (id, task) => http.put(`/api/task/${id}`, task),

  delete: id => http.delete(`/api/task/${id}`),

  get: (id = '') => http.get(`/api/task/${id}`),

  getAll: () => http.get('/api/task/'),
};

export default taskService;
