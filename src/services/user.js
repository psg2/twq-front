import http from './http';

const userService = {
  update: ({ user, password }) => http.put('/api/user/me', { user, password }),

  getAll: () => http.get('api/user/'),
};

export default userService;
