const getters = {
  getCompanies: state => state.ids.map(id => state.entities[id]),
  getSelectedCompany: state => state.entities[state.selectedId],
};

export default getters;
