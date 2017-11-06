// import http from './http';

const reports = [
  {
    id: 1,
    form: 'Form 1',
    team: 'Team 1',
    date: '11/03/2017',
  },
  {
    id: 2,
    form: 'Form 1',
    team: 'Team 1',
    date: '11/03/2017',
  },
  {
    id: 3,
    form: 'Form 1',
    team: 'Team 1',
    date: '11/03/2017',
  },
  {
    id: 4,
    form: 'Form 1',
    team: 'Team 1',
    date: '11/03/2017',
  },
];

const reportService = {
  get: id => {
    const index = reports.findIndex(report => report.id === id);
    return new Promise(resolve => resolve(reports[index]));
    // http.get(`/api/report/${id}`);
  },

  getAll: () => new Promise(resolve => resolve(reports)),
  // http.get('/api/report/')
};

export default reportService;
