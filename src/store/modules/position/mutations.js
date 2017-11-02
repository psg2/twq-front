import Vue from 'vue';
import * as types from './types';

const createSuccess = (state, { position }) => {
  state.ids.push(position.id);
  Vue.set(state.entities, position.id, position);
};

const updateSuccess = (state, { position }) => {
  Vue.set(state.entities, position.id, position);
};

const deleteSuccess = (state, { position }) => {
  state.ids = state.ids.filter(id => id !== position.id);
  Vue.delete(state.entities, position.id);
};

const fetchSuccess = (state, { position }) => {
  if (state.ids.indexOf(position.id) === -1) {
    state.ids.push(position.id);
  }
  Vue.set(state.entities, position.id, position);
};

const fetchAllSuccess = (state, { positions }) => {
  state.ids = positions.map(position => position.id);
  positions.forEach(position => {
    Vue.set(state.entities, position.id, position);
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
