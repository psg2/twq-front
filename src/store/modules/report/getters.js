const getters = {
  getReports: state => state.ids.map(id => state.entities[id]),
  getSelectedReport: state => state.entities[state.selectedId],
};

export default getters;
