import teamService from '@/services/team';
import * as types from './types';

const create = ({ commit }, team) =>
  new Promise((resolve, reject) => {
    teamService
      .create(team)
      .then(newTeam => {
        commit(types.CREATE_SUCCESS, { team: newTeam });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const update = ({ commit }, team) =>
  new Promise((resolve, reject) => {
    teamService
      .update(team.id, team)
      .then(() => {
        commit(types.UPDATE_SUCCESS, { team });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const remove = ({ commit }, team) =>
  new Promise((resolve, reject) => {
    teamService
      .delete(team.id)
      .then(() => {
        commit(types.DELETE_SUCCESS, { team });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetch = ({ commit }, { id }) =>
  new Promise((resolve, reject) => {
    teamService
      .get(id)
      .then(team => {
        commit(types.FETCH_SUCCESS, { team });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetchAll = ({ commit }) =>
  new Promise((resolve, reject) => {
    teamService
      .getAll()
      .then(teams => {
        commit(types.FETCH_ALL_SUCCESS, { teams });
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
