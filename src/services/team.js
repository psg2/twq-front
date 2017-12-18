// import http from './http';

let teams = [
  {
    id: 1,
    name: 'Form 1',
    limit: '5 hours',
    scale: 'Escala Likert',
    author: '42124',
    created_at: '11/03/2017',
    updated_at: '20/10/2017',
    questions: [{ text: 'Texto da Questão 1', flipped: true, constructo: 'COESÃO' }],
  },
];

const teamService = {
  create: team => {
    team.id = Math.floor(Math.random() * 100);
    teams.push(team);
    return new Promise(resolve => resolve(team));
    // http.post('/api/team/', team);
  },

  update: (id, team) => {
    const index = teams.findIndex(comp => comp.id === id);
    teams[index] = { ...teams[index], ...team };
    return new Promise(resolve => resolve(teams[index]));
    // http.put(`/api/team/${id}`, team);
  },

  delete: id => {
    teams = teams.filter(team => team.id !== id);
    return new Promise(resolve => resolve());
    // http.delete(`/api/team/${id}`)
  },

  get: id => {
    const index = teams.findIndex(team => team.id === id);
    return new Promise(resolve => resolve(teams[index]));
    // http.get(`/api/team/${id}`);
  },

  getAll: () => new Promise(resolve => resolve(teams)),
  // http.get('/api/team/')
};

export default teamService;
