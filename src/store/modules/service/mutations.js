import Vue from 'vue';
import * as types from './types';

const createSuccess = (state, { service }) => {
  state.ids.push(service.id);
  Vue.set(state.entities, service.id, service);
};

const updateSuccess = (state, { service }) => {
  Vue.set(state.entities, service.id, service);
};

const deleteSuccess = (state, { service }) => {
  state.ids = state.ids.filter(id => id !== service.id);
  Vue.delete(state.entities, service.id);
};

const fetchSuccess = (state, { service }) => {
  if (state.ids.indexOf(service.id) === -1) {
    state.ids.push(service.id);
  }
  Vue.set(state.entities, service.id, service);
};

const fetchAllSuccess = (state, { services }) => {
  state.ids = services.map(service => service.id);
  services.forEach(service => {
    Vue.set(state.entities, service.id, service);
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
