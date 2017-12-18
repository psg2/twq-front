import Vue from 'vue';
import * as types from './types';

const createSuccess = (state, { team }) => {
  state.ids.push(team.id);
  Vue.set(state.entities, team.id, team);
};

const updateSuccess = (state, { team }) => {
  Vue.set(state.entities, team.id, team);
};

const deleteSuccess = (state, { team }) => {
  state.ids = state.ids.filter(id => id !== team.id);
  Vue.delete(state.entities, team.id);
};

const fetchSuccess = (state, { team }) => {
  if (state.ids.indexOf(team.id) === -1) {
    state.ids.push(team.id);
  }
  Vue.set(state.entities, team.id, team);
};

const fetchAllSuccess = (state, { teams }) => {
  state.ids = teams.map(team => team.id);
  teams.forEach(team => {
    Vue.set(state.entities, team.id, team);
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
