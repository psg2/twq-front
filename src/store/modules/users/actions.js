import userService from '@/services/user';
import * as types from './types';

const loadCollection = ({ commit }) =>
  new Promise((resolve, reject) => {
    userService
      .getUsers()
      .then(users => {
        commit(types.LOAD_COLLECTION_SUCCESS, { users });
        resolve();
      })
      .catch(error => {
        commit(types.LOAD_COLLECTION_FAILURE);
        reject(error);
      });
  });

export default {
  [types.LOAD_COLLECTION]: loadCollection,
};
