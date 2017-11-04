import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '@/containers/Dashboard';
import CompanyDashboard from '@/containers/CompanyDashboard';
// import Home from '@/containers/Home';
import LoginPage from '@/containers/auth/LoginPage';

import CompanyListPage from '@/containers/company/CompanyListPage';
import CreateCompanyPage from '@/containers/company/CreateCompanyPage';

import FormsPage from '@/containers/form/FormsPage';
import FormListPage from '@/containers/form/FormListPage';
import CreateFormPage from '@/containers/form/CreateFormPage';

import AuthGuard from '@/router/guards/auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'Companies List',
          component: CompanyListPage,
        },
        {
          path: 'add',
          name: 'Create Company',
          component: CreateCompanyPage,
        },
      ],
      meta: {
        requireLoggedIn: true,
      },
    },
    {
      path: '/company/:id',
      component: CompanyDashboard,
      children: [
        {
          path: 'forms',
          component: FormsPage,
          children: [
            {
              path: '',
              component: FormListPage,
              name: 'Forms List',
            },
            {
              path: 'create',
              component: CreateFormPage,
              name: 'Create Form',
            },
          ],
        },
      ],
      meta: {
        requireLoggedIn: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      meta: {
        requireLoggedOut: true,
      },
    },
  ],
});

router.beforeEach(AuthGuard);

export default router;
