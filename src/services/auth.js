import http from './http';

const authService = {
  login: user => http.post('/api/auth/login', user),
};

export default authService;
