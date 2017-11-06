import Vue from 'vue';
import * as types from './types';

const createSuccess = (state, { form }) => {
  state.ids.push(form.id);
  Vue.set(state.entities, form.id, form);
};

const updateSuccess = (state, { form }) => {
  Vue.set(state.entities, form.id, form);
};

const deleteSuccess = (state, { form }) => {
  state.ids = state.ids.filter(id => id !== form.id);
  Vue.delete(state.entities, form.id);
};

const fetchSuccess = (state, { form }) => {
  if (state.ids.indexOf(form.id) === -1) {
    state.ids.push(form.id);
  }
  Vue.set(state.entities, form.id, form);
};

const fetchAllSuccess = (state, { forms }) => {
  state.ids = forms.map(form => form.id);
  forms.forEach(form => {
    Vue.set(state.entities, form.id, form);
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
