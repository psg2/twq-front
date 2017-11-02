import serviceService from '@/services/service';
import * as types from './types';

const create = ({ commit }, form) =>
  new Promise((resolve, reject) => {
    serviceService
      .create(form)
      .then(service => {
        commit(types.CREATE_SUCCESS, { service });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const update = ({ commit }, service) =>
  new Promise((resolve, reject) => {
    serviceService
      .update(service.id, service)
      .then(() => {
        commit(types.UPDATE_SUCCESS, { service });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const remove = ({ commit }, service) =>
  new Promise((resolve, reject) => {
    serviceService
      .delete(service.id)
      .then(() => {
        commit(types.DELETE_SUCCESS, { service });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetch = ({ commit }, { id }) =>
  new Promise((resolve, reject) => {
    serviceService
      .get(id)
      .then(service => {
        commit(types.FETCH_SUCCESS, { service });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetchAll = ({ commit }) =>
  new Promise((resolve, reject) => {
    serviceService
      .getAll()
      .then(services => {
        commit(types.FETCH_ALL_SUCCESS, { services });
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
