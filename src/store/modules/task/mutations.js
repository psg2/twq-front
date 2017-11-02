import Vue from 'vue';
import * as types from './types';

const createSuccess = (state, { task }) => {
  state.ids.push(task.id);
  Vue.set(state.entities, task.id, task);
};

const updateSuccess = (state, { task }) => {
  Vue.set(state.entities, task.id, task);
};

const deleteSuccess = (state, { task }) => {
  state.ids = state.ids.filter(id => id !== task.id);
  Vue.delete(state.entities, task.id);
};

const fetchSuccess = (state, { task }) => {
  if (state.ids.indexOf(task.id) === -1) {
    state.ids.push(task.id);
  }
  Vue.set(state.entities, task.id, task);
};

const fetchAllSuccess = (state, { tasks }) => {
  state.ids = tasks.map(task => task.id);
  tasks.forEach(task => {
    Vue.set(state.entities, task.id, task);
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
