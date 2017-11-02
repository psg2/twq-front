import memberService from '@/services/member';
import * as types from './types';

const create = ({ commit }, form) =>
  new Promise((resolve, reject) => {
    memberService
      .create(form)
      .then(member => {
        commit(types.CREATE_SUCCESS, { member });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const update = ({ commit }, member) =>
  new Promise((resolve, reject) => {
    memberService
      .update(member.id, member)
      .then(() => {
        commit(types.UPDATE_SUCCESS, { member });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const remove = ({ commit }, member) =>
  new Promise((resolve, reject) => {
    memberService
      .delete(member.id)
      .then(() => {
        commit(types.DELETE_SUCCESS, { member });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetch = ({ commit }, { id }) =>
  new Promise((resolve, reject) => {
    memberService
      .get(id)
      .then(member => {
        commit(types.FETCH_SUCCESS, { member });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetchAll = ({ commit }) =>
  new Promise((resolve, reject) => {
    memberService
      .getAll()
      .then(members => {
        commit(types.FETCH_ALL_SUCCESS, { members });
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
