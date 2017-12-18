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
    team: 'Team 2',
    date: '11/03/2017',
  },
  {
    id: 3,
    form: 'Form 1',
    team: 'Team 3',
    date: '11/03/2017',
  },
  {
    id: 4,
    form: 'Form 1',
    team: 'Team 4',
    date: '11/03/2017',
  },
];

const reportService = {
  get: id => {
    const index = reports.findIndex(report => String(report.id) === String(id));
    return new Promise(resolve => resolve(reports[index]));
    // http.get(`/api/report/${id}`);
  },

  getAll: () => new Promise(resolve => resolve(reports)),
  // http.get('/api/report/')
};

export default reportService;
