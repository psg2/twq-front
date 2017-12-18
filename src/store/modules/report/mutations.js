import Vue from 'vue';
import * as types from './types';

const fetchSuccess = (state, { report }) => {
  if (state.ids.indexOf(report.id) === -1) {
    state.ids.push(report.id);
  }
  Vue.set(state.entities, report.id, report);
};

const fetchAllSuccess = (state, { reports }) => {
  state.ids = reports.map(report => report.id);
  reports.forEach(report => {
    Vue.set(state.entities, report.id, report);
  });
};

const select = (state, { id }) => {
  state.selectedId = id;
};

const selectComparison = (state, { idA, idB }) => {
  state.reportAId = idA;
  state.reportBId = idB;
};

export default {
  [types.FETCH_SUCCESS]: fetchSuccess,
  [types.FETCH_ALL_SUCCESS]: fetchAllSuccess,
  [types.SELECT]: select,
  [types.SELECT_COMPARISON]: selectComparison,
};
