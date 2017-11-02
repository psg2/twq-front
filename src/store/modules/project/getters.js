const getters = {
  getProjects: state => state.ids.map(id => state.entities[id]),
  getSelectedProject: state => state.entities[state.selectedId],
};

export default getters;
