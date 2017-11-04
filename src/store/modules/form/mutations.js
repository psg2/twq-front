import Vue from 'vue';
import * as types from './types';

const createSuccess = (state, { project }) => {
  state.ids.push(project.id);
  Vue.set(state.entities, project.id, project);
};

const updateSuccess = (state, { project }) => {
  Vue.set(state.entities, project.id, project);
};

const deleteSuccess = (state, { project }) => {
  state.ids = state.ids.filter(id => id !== project.id);
  Vue.delete(state.entities, project.id);
};

const fetchSuccess = (state, { project }) => {
  if (state.ids.indexOf(project.id) === -1) {
    state.ids.push(project.id);
  }
  Vue.set(state.entities, project.id, project);
};

const fetchAllSuccess = (state, { projects }) => {
  state.ids = projects.map(project => project.id);
  projects.forEach(project => {
    Vue.set(state.entities, project.id, project);
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
