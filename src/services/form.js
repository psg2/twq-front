// import http from './http';

let forms = [
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
  {
    id: 2,
    name: 'Form 2',
    limit: '5 hours',
    scale: 'Escala Likert',
    author: '42124',
    created_at: '11/03/2017',
    updated_at: '20/10/2017',
    questions: [{ text: 'Texto da Questão 1', flipped: true, constructo: 'COESÃO' }],
  },
  {
    id: 3,
    name: 'Form 3',
    limit: '5 hours',
    scale: 'Escala Likert',
    author: '42124',
    created_at: '11/03/2017',
    updated_at: '20/10/2017',
    questions: [{ text: 'Texto da Questão 1', flipped: true, constructo: 'COESÃO' }],
  },
  {
    id: 4,
    name: 'Form 4',
    limit: '5 hours',
    scale: 'Escala Likert',
    author: '42124',
    created_at: '11/03/2017',
    updated_at: '20/10/2017',
    questions: [{ text: 'Texto da Questão 1', flipped: true, constructo: 'COESÃO' }],
  },
];

const formService = {
  create: form => {
    form.id = Math.floor(Math.random() * 100);
    forms.push(form);
    return new Promise(resolve => resolve(form));
    // http.post('/api/form/', form);
  },

  update: (id, form) => {
    const index = forms.findIndex(comp => comp.id === id);
    forms[index] = { ...forms[index], ...form };
    return new Promise(resolve => resolve(forms[index]));
    // http.put(`/api/form/${id}`, form);
  },

  delete: id => {
    forms = forms.filter(form => form.id !== id);
    return new Promise(resolve => resolve());
    // http.delete(`/api/form/${id}`)
  },

  get: id => {
    const index = forms.findIndex(form => String(form.id) === String(id));
    return new Promise(resolve => resolve(forms[index]));
    // http.get(`/api/form/${id}`);
  },

  getAll: () => new Promise(resolve => resolve(forms)),
  // http.get('/api/form/')
};

export default formService;
