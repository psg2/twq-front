import * as types from './types';

const login = state => {
  state.loading = true;
};

const loginSuccess = (state, { user }) => {
  state.user = user;
  state.loggedIn = true;
  state.loading = false;
  state.error = null;
};

const loginFailure = (state, { error }) => {
  state.error = error;
  state.loading = false;
};

const logout = state => {
  state.loggedIn = false;
  state.user = null;
  state.error = null;
};

const updateSuccess = (state, { user }) => {
  state.user = user;
};

const updateFailure = (state, { error }) => {
  state.error = error;
};

export default {
  [types.LOGIN]: login,
  [types.LOGIN_SUCCESS]: loginSuccess,
  [types.LOGIN_FAILURE]: loginFailure,
  [types.LOGOUT]: logout,
  [types.UPDATE_SUCCESS]: updateSuccess,
  [types.UPDATE_FAILURE]: updateFailure,
};
