import positionService from '@/services/position';
import * as types from './types';

const create = ({ commit }, form) =>
  new Promise((resolve, reject) => {
    positionService
      .create(form)
      .then(position => {
        commit(types.CREATE_SUCCESS, { position });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const update = ({ commit }, position) =>
  new Promise((resolve, reject) => {
    positionService
      .update(position.id, position)
      .then(() => {
        commit(types.UPDATE_SUCCESS, { position });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const remove = ({ commit }, position) =>
  new Promise((resolve, reject) => {
    positionService
      .delete(position.id)
      .then(() => {
        commit(types.DELETE_SUCCESS, { position });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetch = ({ commit }, { id }) =>
  new Promise((resolve, reject) => {
    positionService
      .get(id)
      .then(position => {
        commit(types.FETCH_SUCCESS, { position });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetchAll = ({ commit }) =>
  new Promise((resolve, reject) => {
    positionService
      .getAll()
      .then(positions => {
        commit(types.FETCH_ALL_SUCCESS, { positions });
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
