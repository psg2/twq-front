import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  ids: [],
  entities: {},
  loaded: false,
};

export default {
  state,
  actions,
  getters,
  mutations,
};
