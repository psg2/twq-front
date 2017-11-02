import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  user: null,
  loggedIn: false,
  error: null,
  loading: false,
};

export default {
  state,
  actions,
  getters,
  mutations,
};
