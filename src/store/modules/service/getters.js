const getters = {
  getServices: state => state.ids.map(id => state.entities[id]),
  getSelectedService: state => state.entities[state.selectedId],
};

export default getters;
