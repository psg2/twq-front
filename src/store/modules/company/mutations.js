import Vue from 'vue';
import * as types from './types';

const createSuccess = (state, { company }) => {
  state.ids.push(company.id);
  Vue.set(state.entities, company.id, company);
};

const updateSuccess = (state, { company }) => {
  Vue.set(state.entities, company.id, company);
};

const deleteSuccess = (state, { company }) => {
  state.ids = state.ids.filter(id => id !== company.id);
  Vue.delete(state.entities, company.id);
};

const fetchSuccess = (state, { company }) => {
  if (state.ids.indexOf(company.id) === -1) {
    state.ids.push(company.id);
  }
  Vue.set(state.entities, company.id, company);
};

const fetchAllSuccess = (state, { companies }) => {
  state.ids = companies.map(company => company.id);
  companies.forEach(company => {
    Vue.set(state.entities, company.id, company);
  });
};

const select = (state, { id }) => {
  state.selectedId = id;
};

export default {
  [types.CREATE_SUCCESS]: createSuccess,
  [types.UPDATE_SUCCESS]: updateSuccess,
  [types.DELETE_SUCCESS]: deleteSuccess,
  [types.FETCH_SUCCESS]: fetchSuccess,
  [types.FETCH_ALL_SUCCESS]: fetchAllSuccess,
  [types.SELECT]: select,
};
