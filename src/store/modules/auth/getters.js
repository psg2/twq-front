const getter = {
  getUser: state => state.user,
  getLoggedIn: state => state.loggedIn,
  getIsAdmin: (state, getters) =>
    getters.getUser && getters.getUser.role === 'admin',
};

export default getter;
