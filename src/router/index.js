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
import EditFormPage from '@/containers/form/EditFormPage';

import ReportsPage from '@/containers/report/ReportsPage';
import ReportListPage from '@/containers/report/ReportListPage';
import ReportProfilePage from '@/containers/report/ReportProfilePage';
import ReportComparisonPage from '@/containers/report/ReportComparisonPage';

import TeamsPage from '@/containers/team/TeamsPage';
import TeamListPage from '@/containers/team/TeamListPage';
import CreateTeamPage from '@/containers/team/CreateTeamPage';
import EditTeamPage from '@/containers/team/EditTeamPage';

import AuthGuard from '@/router/guards/auth';
import FormExists from '@/router/guards/formExists';
import TeamExists from '@/router/guards/teamExists';
import CompanyExists from '@/router/guards/companyExists';
import ReportExists from '@/router/guards/reportExists';
import ReportComparisonExists from '@/router/guards/reportComparisonExists';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Dashboard,
      redirect: { name: 'Companies List' },
      children: [
        {
          path: 'companies',
          name: 'Companies List',
          component: CompanyListPage,
        },
        {
          path: 'companies/add',
          name: 'Create Company',
          component: CreateCompanyPage,
        },
      ],
      meta: {
        requireLoggedIn: true,
      },
    },
    {
      path: '/company/:companyId',
      component: CompanyDashboard,
      name: 'Company Panel',
      redirect: { name: 'Forms List' },
      beforeEnter: CompanyExists,
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
            {
              path: 'edit/:formId',
              component: EditFormPage,
              name: 'Edit Form',
              beforeEnter: FormExists,
            },
          ],
        },
        {
          path: 'reports',
          component: ReportsPage,
          children: [
            {
              path: '',
              component: ReportListPage,
              name: 'Reports List',
            },
            {
              path: ':reportId',
              component: ReportProfilePage,
              name: 'Report Profile',
              beforeEnter: ReportExists,
            },
            {
              path: 'comparison/:reportAId/:reportBId',
              component: ReportComparisonPage,
              name: 'Report Comparison',
              beforeEnter: ReportComparisonExists,
            },
          ],
        },
        {
          path: 'teams',
          component: TeamsPage,
          children: [
            {
              path: '',
              component: TeamListPage,
              name: 'Teams List',
            },
            {
              path: 'create',
              component: CreateTeamPage,
              name: 'Create Team',
            },
            {
              path: 'edit/:TeamId',
              component: EditTeamPage,
              name: 'Edit Team',
              beforeEnter: TeamExists,
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
