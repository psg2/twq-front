import http from './http';

const categoryService = {
  create: category => http.post('/api/category/', category),

  update: (id, category) => http.put(`/api/category/${id}`, category),

  delete: id => http.delete(`/api/category/${id}`),

  get: id => http.get(`/api/category/${id}`),

  getAll: () => http.get('/api/category/'),
};

export default categoryService;
