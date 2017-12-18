import companyService from '@/services/company';
import * as types from './types';

const create = ({ commit }, form) =>
  new Promise((resolve, reject) => {
    companyService
      .create(form)
      .then(company => {
        commit(types.CREATE_SUCCESS, { company });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const update = ({ commit }, company) =>
  new Promise((resolve, reject) => {
    companyService
      .update(company.id, company)
      .then(() => {
        commit(types.UPDATE_SUCCESS, { company });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const remove = ({ commit }, company) =>
  new Promise((resolve, reject) => {
    companyService
      .delete(company.id)
      .then(() => {
        commit(types.DELETE_SUCCESS, { company });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetch = ({ commit }, { id }) =>
  new Promise((resolve, reject) => {
    companyService
      .get(id)
      .then(company => {
        commit(types.FETCH_SUCCESS, { company });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetchAll = ({ commit }) =>
  new Promise((resolve, reject) => {
    companyService
      .getAll()
      .then(companies => {
        commit(types.FETCH_ALL_SUCCESS, { companies });
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
