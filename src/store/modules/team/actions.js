import formService from '@/services/form';
import * as types from './types';

const create = ({ commit }, form) =>
  new Promise((resolve, reject) => {
    formService
      .create(form)
      .then(newForm => {
        commit(types.CREATE_SUCCESS, { form: newForm });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const update = ({ commit }, form) =>
  new Promise((resolve, reject) => {
    formService
      .update(form.id, form)
      .then(() => {
        commit(types.UPDATE_SUCCESS, { form });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const remove = ({ commit }, form) =>
  new Promise((resolve, reject) => {
    formService
      .delete(form.id)
      .then(() => {
        commit(types.DELETE_SUCCESS, { form });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetch = ({ commit }, { id }) =>
  new Promise((resolve, reject) => {
    formService
      .get(id)
      .then(form => {
        commit(types.FETCH_SUCCESS, { form });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetchAll = ({ commit }) =>
  new Promise((resolve, reject) => {
    formService
      .getAll()
      .then(forms => {
        commit(types.FETCH_ALL_SUCCESS, { forms });
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
