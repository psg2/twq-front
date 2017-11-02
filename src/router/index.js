import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '@/containers/Dashboard';
import Home from '@/containers/Home';
import LoginPage from '@/containers/auth/LoginPage';

import CategoriesPage from '@/containers/category/CategoriesPage';
import CreateCategoryPage from '@/containers/category/CreateCategoryPage';
import CategoryListPage from '@/containers/category/CategoryListPage';
import EditCategoryPage from '@/containers/category/EditCategoryPage';
import CategoryProfilePage from '@/containers/category/CategoryProfilePage';

import PositionsPage from '@/containers/position/PositionsPage';
import CreatePositionPage from '@/containers/position/CreatePositionPage';
import PositionListPage from '@/containers/position/PositionListPage';
import EditPositionPage from '@/containers/position/EditPositionPage';
import PositionProfilePage from '@/containers/position/PositionProfilePage';

import ProjectsPage from '@/containers/project/ProjectsPage';
import CreateProjectPage from '@/containers/project/CreateProjectPage';
import ProjectListPage from '@/containers/project/ProjectListPage';
import EditProjectPage from '@/containers/project/EditProjectPage';
import ProjectProfilePage from '@/containers/project/ProjectProfilePage';

import ServicesPage from '@/containers/service/ServicesPage';
import CreateServicePage from '@/containers/service/CreateServicePage';
import ServiceListPage from '@/containers/service/ServiceListPage';
import EditServicePage from '@/containers/service/EditServicePage';
import ServiceProfilePage from '@/containers/service/ServiceProfilePage';

import TasksPage from '@/containers/task/TasksPage';
import CreateTaskPage from '@/containers/task/CreateTaskPage';
import TaskListPage from '@/containers/task/TaskListPage';
import EditTaskPage from '@/containers/task/EditTaskPage';
import TaskProfilePage from '@/containers/task/TaskProfilePage';

import UserProfile from '@/containers/user/UserProfile';

import MembersPage from '@/containers/member/MembersPage';
import CreateMemberPage from '@/containers/member/CreateMemberPage';
import MemberListPage from '@/containers/member/MemberListPage';

import AuthGuard from './guards/auth';
import PositionExists from './guards/positionExists';
import ProjectExists from './guards/projectExists';
import ServiceExists from './guards/serviceExists';
import TaskExists from './guards/taskExists';
import CategoryExists from './guards/categoryExists';
// import LoadCategories from './guards/loadCategories';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Dashboard,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
        },
        {
          path: 'categories',
          component: CategoriesPage,
          children: [
            {
              path: '',
              name: 'Categories List',
              component: CategoryListPage,
            },
            {
              path: 'add',
              name: 'Create Category',
              component: CreateCategoryPage,
            },
            {
              path: 'edit/:id',
              name: 'Edit Category',
              component: EditCategoryPage,
              beforeEnter: CategoryExists,
            },
            {
              path: ':id',
              name: 'Category Profile',
              component: CategoryProfilePage,
              beforeEnter: CategoryExists,
            },
          ],
        },
        {
          path: 'positions',
          component: PositionsPage,
          children: [
            {
              path: '',
              name: 'Positions List',
              component: PositionListPage,
            },
            {
              path: 'add',
              name: 'Create Position',
              component: CreatePositionPage,
            },
            {
              path: 'edit/:id',
              name: 'Edit Position',
              component: EditPositionPage,
              beforeEnter: PositionExists,
            },
            {
              path: ':id',
              name: 'Position Profile',
              component: PositionProfilePage,
              beforeEnter: PositionExists,
            },
          ],
        },
        {
          path: 'projects',
          component: ProjectsPage,
          children: [
            {
              path: '',
              name: 'Projects List',
              component: ProjectListPage,
            },
            {
              path: 'add',
              name: 'Create Project',
              component: CreateProjectPage,
            },
            {
              path: 'edit/:id',
              name: 'Edit Project',
              component: EditProjectPage,
              beforeEnter: ProjectExists,
            },
            {
              path: ':id',
              name: 'Project Profile',
              component: ProjectProfilePage,
              beforeEnter: ProjectExists,
            },
          ],
        },
        {
          path: 'services',
          component: ServicesPage,
          children: [
            {
              path: '',
              name: 'Services List',
              component: ServiceListPage,
            },
            {
              path: 'add',
              name: 'Create Service',
              component: CreateServicePage,
            },
            {
              path: 'edit/:id',
              name: 'Edit Service',
              component: EditServicePage,
              beforeEnter: ServiceExists,
            },
            {
              path: ':id',
              name: 'Service Profile',
              component: ServiceProfilePage,
              beforeEnter: ServiceExists,
            },
          ],
        },
        {
          path: 'tasks',
          component: TasksPage,
          children: [
            {
              path: '',
              name: 'Tasks List',
              component: TaskListPage,
            },
            {
              path: 'add',
              name: 'Create Task',
              component: CreateTaskPage,
            },
            {
              path: 'edit/:id',
              name: 'Edit Task',
              component: EditTaskPage,
              beforeEnter: TaskExists,
            },
            {
              path: ':id',
              name: 'Task Profile',
              component: TaskProfilePage,
              beforeEnter: TaskExists,
            },
          ],
        },
        {
          path: '/members',
          component: MembersPage,
          children: [
            {
              path: '',
              name: 'Members List',
              component: MemberListPage,
            },
            {
              path: 'add',
              name: 'Create Member',
              component: CreateMemberPage,
            },
            {
              path: 'edit/:id',
              name: 'Edit Member',
            },
            {
              path: ':id',
              name: 'Member Profile',
            },
          ],
        },
        {
          path: '/me',
          name: 'UserProfile',
          component: UserProfile,
          // beforeEnter: LoadCategories,
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
