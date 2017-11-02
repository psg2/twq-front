import projectService from '@/services/project';
import * as types from './types';

const create = ({ commit }, form) =>
  new Promise((resolve, reject) => {
    projectService
      .create(form)
      .then(project => {
        commit(types.CREATE_SUCCESS, { project });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const update = ({ commit }, project) =>
  new Promise((resolve, reject) => {
    projectService
      .update(project.id, project)
      .then(() => {
        commit(types.UPDATE_SUCCESS, { project });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const remove = ({ commit }, project) =>
  new Promise((resolve, reject) => {
    projectService
      .delete(project.id)
      .then(() => {
        commit(types.DELETE_SUCCESS, { project });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetch = ({ commit }, { id }) =>
  new Promise((resolve, reject) => {
    projectService
      .get(id)
      .then(project => {
        commit(types.FETCH_SUCCESS, { project });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetchAll = ({ commit }) =>
  new Promise((resolve, reject) => {
    projectService
      .getAll()
      .then(projects => {
        commit(types.FETCH_ALL_SUCCESS, { projects });
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
