import http from './http';

const memberService = {
  create: member => http.post('/api/member/', member),

  update: (id, member) => http.put(`/api/member/${id}`, member),

  delete: id => http.delete(`/api/member/${id}`),

  get: id => http.get(`/api/member/${id}`),

  getAll: () => http.get('/api/member/'),
};

export default memberService;
