import Vue from 'vue';
import * as types from './types';

const createSuccess = (state, { member }) => {
  state.ids.push(member.id);
  Vue.set(state.entities, member.id, member);
};

const updateSuccess = (state, { member }) => {
  Vue.set(state.entities, member.id, member);
};

const deleteSuccess = (state, { member }) => {
  state.ids = state.ids.filter(id => id !== member.id);
  Vue.delete(state.entities, member.id);
};

const loadSuccess = (state, { member }) => {
  if (state.ids.indexOf(member.id) === -1) {
    state.ids.push(member.id);
  }
  Vue.set(state.entities, member.id, member);
};

const loadCollectionSuccess = (state, { members }) => {
  state.ids = members.map(member => member.id);
  members.forEach(member => {
    Vue.set(state.entities, member.id, member);
  });
};

const select = (state, { member }) => {
  state.selectedId = member.id;
};

export default {
  [types.CREATE_SUCCESS]: createSuccess,
  [types.UPDATE_SUCCESS]: updateSuccess,
  [types.DELETE_SUCCESS]: deleteSuccess,
  [types.FETCH_SUCCESS]: loadSuccess,
  [types.FETCH_ALL_SUCCESS]: loadCollectionSuccess,
  [types.SELECT]: select,
};
