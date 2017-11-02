const getters = {
  getPositions: state => state.ids.map(id => state.entities[id]),
  getSelectedPosition: state => state.entities[state.selectedId],
};

export default getters;
