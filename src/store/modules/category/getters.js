const getters = {
  getCategories: state => state.ids.map(id => state.entities[id]),
  getSelectedCategory: state => state.entities[state.selectedId],
};

export default getters;
