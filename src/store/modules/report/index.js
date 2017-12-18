import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  ids: [],
  entities: {},
  selectedId: null,
  reportAId: null,
  reportBId: null,
};

export default {
  state,
  actions,
  getters,
  mutations,
};
