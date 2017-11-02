import taskService from '@/services/task';
import * as types from './types';

const create = ({ commit }, form) =>
  new Promise((resolve, reject) => {
    taskService
      .create(form)
      .then(task => {
        commit(types.CREATE_SUCCESS, { task });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const update = ({ commit }, task) =>
  new Promise((resolve, reject) => {
    taskService
      .update(task.id, task)
      .then(() => {
        commit(types.UPDATE_SUCCESS, { task });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const remove = ({ commit }, task) =>
  new Promise((resolve, reject) => {
    taskService
      .delete(task.id)
      .then(() => {
        commit(types.DELETE_SUCCESS, { task });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetch = ({ commit }, { id }) =>
  new Promise((resolve, reject) => {
    taskService
      .get(id)
      .then(task => {
        commit(types.FETCH_SUCCESS, { task });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetchAll = ({ commit }) =>
  new Promise((resolve, reject) => {
    taskService
      .getAll()
      .then(tasks => {
        commit(types.FETCH_ALL_SUCCESS, { tasks });
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
