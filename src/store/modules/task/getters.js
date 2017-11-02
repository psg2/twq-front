const getters = {
  getTasks: state => state.ids.map(id => state.entities[id]),
  getSelectedTask: state => state.entities[state.selectedId],
};

export default getters;
