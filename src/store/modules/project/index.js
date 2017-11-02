import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  ids: [],
  entities: {},
  selectedId: null,
};

export default {
  state,
  actions,
  getters,
  mutations,
};
