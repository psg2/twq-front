const getters = {
  getUsers: state => state.ids.map(id => state.entities[id]),
};

export default getters;
