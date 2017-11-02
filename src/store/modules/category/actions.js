import categoryService from '@/services/category';
import * as types from './types';

const create = ({ commit }, form) =>
  new Promise((resolve, reject) => {
    categoryService
      .create(form)
      .then(category => {
        commit(types.CREATE_SUCCESS, { category });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const update = ({ commit }, category) =>
  new Promise((resolve, reject) => {
    categoryService
      .update(category.id, category)
      .then(() => {
        commit(types.UPDATE_SUCCESS, { category });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const remove = ({ commit }, category) =>
  new Promise((resolve, reject) => {
    categoryService
      .delete(category.id)
      .then(() => {
        commit(types.DELETE_SUCCESS, { category });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetch = ({ commit }, { id }) =>
  new Promise((resolve, reject) => {
    categoryService
      .get(id)
      .then(category => {
        commit(types.FETCH_SUCCESS, { category });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetchAll = ({ commit }) =>
  new Promise((resolve, reject) => {
    categoryService
      .getAll()
      .then(categories => {
        commit(types.FETCH_ALL_SUCCESS, { categories });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

export default {
  [types.CREATE]: create,
  [types.UPDATE]: update,
  [types.DELETE]: remove,
  [types.FETCH]: fetch,
  [types.FETCH_ALL]: fetchAll,
};
