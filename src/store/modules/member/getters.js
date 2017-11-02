const getters = {
  getMembers: state => state.ids.map(id => state.entities[id]),
  getSelectedMember: state => state.entities[state.selectedId],
};

export default getters;
