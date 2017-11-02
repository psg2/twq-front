import userService from '@/services/user';
import * as types from './types';

const login = ({ commit }) =>
  new Promise(resolve => {
    commit(types.LOGIN_SUCCESS, {
      user: {
        name: 'User',
        email: 'user@gmail.com',
        role: 'member',
      },
    });
    resolve();
    // authService
    //   .login(authenticate)
    //   .then(({ token, user }) => {
    //     localStorage.setItem('token', token);
    //     commit(types.LOGIN_SUCCESS, { user });
    //     resolve();
    //   })
    //   .catch(error => {
    //     commit(types.LOGIN_FAILURE, { error });
    //     reject();
    //   });
  });

const logout = ({ commit }) =>
  new Promise((resolve, reject) => {
    try {
      localStorage.removeItem('token');
      commit(types.LOGOUT);
      resolve();
    } catch (err) {
      reject();
    }
  });

const update = ({ commit }, { user, password }) =>
  new Promise((resolve, reject) => {
    userService
      .update({ user, password })
      .then(() => {
        commit(types.UPDATE_SUCCESS, { user });
        resolve();
      })
      .catch(error => {
        commit(types.UPDATE_FAILURE, { error });
        reject();
      });
  });

export default {
  [types.LOGIN]: login,
  [types.LOGOUT]: logout,
  [types.UPDATE]: update,
};
