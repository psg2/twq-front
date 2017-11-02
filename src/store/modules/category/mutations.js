import Vue from 'vue';
import * as types from './types';

const createSuccess = (state, { category }) => {
  state.ids.push(category.id);
  Vue.set(state.entities, category.id, category);
};

const updateSuccess = (state, { category }) => {
  Vue.set(state.entities, category.id, category);
};

const deleteSuccess = (state, { category }) => {
  state.ids = state.ids.filter(id => id !== category.id);
  Vue.delete(state.entities, category.id);
};

const loadSuccess = (state, { category }) => {
  if (state.ids.indexOf(category.id) === -1) {
    state.ids.push(category.id);
  }
  Vue.set(state.entities, category.id, category);
};

const loadCollectionSuccess = (state, { categories }) => {
  state.ids = categories.map(category => category.id);
  categories.forEach(category => {
    Vue.set(state.entities, category.id, category);
  });
};

const select = (state, { id }) => {
  state.selectedId = id;
};

export default {
  [types.CREATE_SUCCESS]: createSuccess,
  [types.UPDATE_SUCCESS]: updateSuccess,
  [types.DELETE_SUCCESS]: deleteSuccess,
  [types.FETCH_SUCCESS]: loadSuccess,
  [types.FETCH_ALL_SUCCESS]: loadCollectionSuccess,
  [types.SELECT]: select,
};
