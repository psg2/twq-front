import Vue from 'vue';
import * as types from './types';

const loadCollectionSuccess = (state, { users }) => {
  users.forEach(user => {
    if (state.ids.indexOf(user.id) === -1) {
      state.ids.push(user.id);
    }
    Vue.set(state.entities, user.id, user);
  });
  state.loaded = true;
};

const loadCollectionFailure = state => {
  state.loaded = false;
};

export default {
  [types.LOAD_COLLECTION_SUCCESS]: loadCollectionSuccess,
  [types.LOAD_COLLECTION_FAILURE]: loadCollectionFailure,
};
