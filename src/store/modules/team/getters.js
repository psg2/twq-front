const getters = {
  getForms: state => state.ids.map(id => state.entities[id]),
  getSelectedForm: state => state.entities[state.selectedId],
};

export default getters;
