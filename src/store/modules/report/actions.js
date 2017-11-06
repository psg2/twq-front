import reportService from '@/services/report';
import * as types from './types';

const fetch = ({ commit }, { id }) =>
  new Promise((resolve, reject) => {
    reportService
      .get(id)
      .then(report => {
        commit(types.FETCH_SUCCESS, { report });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const fetchAll = ({ commit }) =>
  new Promise((resolve, reject) => {
    reportService
      .getAll()
      .then(reports => {
        commit(types.FETCH_ALL_SUCCESS, { reports });
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

export default {
  [types.FETCH]: fetch,
  [types.FETCH_ALL]: fetchAll,
};
