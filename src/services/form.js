import http from './http';

const projectService = {
  create: project => http.post('/api/project/', project),

  update: (id, project) => http.put(`/api/project/${id}`, project),

  delete: id => http.delete(`/api/project/${id}`),

  get: id => http.get(`/api/project/${id}`),

  getAll: () => http.get('/api/project/'),
};

export default projectService;
