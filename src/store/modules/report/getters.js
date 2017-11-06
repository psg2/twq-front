const getters = {
  getReports: state => state.ids.map(id => state.entities[id]),
  getSelectedReport: state => state.entities[state.selectedId],
  getReportA: state => state.entities[state.reportAId],
  getReportB: state => state.entities[state.reportBId],
};

export default getters;
