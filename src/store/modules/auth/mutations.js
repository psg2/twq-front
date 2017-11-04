import * as types from './types';

const login = state => {
  state.loading = true;
};

const loginSuccess = (state, { user }) => {
  state.user = user;
  state.loggedIn = true;
};

const logout = state => {
  state.loggedIn = false;
  state.user = null;
};

export default {
  [types.LOGIN]: login,
  [types.LOGIN_SUCCESS]: loginSuccess,
  [types.LOGOUT]: logout,
};
