const getters = {
  getTeams: state => state.ids.map(id => state.entities[id]),
  getSelectedTeam: state => state.entities[state.selectedId],
};

export default getters;
