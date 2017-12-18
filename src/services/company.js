// import http from './http';

let companies = [
  {
    id: 1,
    name: 'Company 1',
  },
  {
    id: 2,
    name: 'Company 2',
  },
  {
    id: 3,
    name: 'Company 3',
  },
  {
    id: 4,
    name: 'Company 4',
  },
];

const companyService = {
  create: company => {
    company.id = Math.floor(Math.random() * 100);
    companies.push(company);
    return new Promise(resolve => resolve(company));
    // http.post('/api/company/', company);
  },

  update: (id, company) => {
    const index = companies.findIndex(comp => comp.id === id);
    companies[index] = { ...company[index], company };
    return new Promise(resolve => resolve(companies[index]));
    // http.put(`/api/company/${id}`, company);
  },

  delete: id => {
    companies = companies.filter(company => company.id !== id);
    return new Promise(resolve => resolve());
    // http.delete(`/api/company/${id}`)
  },

  get: id => {
    const index = companies.findIndex(company => String(company.id) === String(id));
    return new Promise(resolve => resolve(companies[index]));
    // http.get(`/api/company/${id}`);
  },

  getAll: () => new Promise(resolve => resolve(companies)),
  // http.get('/api/company/')
};

export default companyService;
