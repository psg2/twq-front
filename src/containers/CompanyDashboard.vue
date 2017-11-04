<template>
  <v-app>
    <cb-sidebar v-if="loggedIn"
                :items="items"
                :show="showSidebar"
                @resize="resize"></cb-sidebar>
    <cb-toolbar v-if="loggedIn"
                :sideAction="toggleSidebar"
                :name="user.name"
                :logout="logout"></cb-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <cb-breadcrumb></cb-breadcrumb>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import Breadcrumb from '@/components/shared/Breadcrumb';
import Sidebar from '@/components/layout/Sidebar';
import Toolbar from '@/components/layout/Toolbar';
import { LOGOUT } from '@/store/modules/auth/types';
import { mapGetters } from 'vuex';

export default {
  name: 'twq-company-panel',
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    resize(visible) {
      this.showSidebar = visible;
    },
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: 'Login' });
      });
    },
  },
  computed: {
    ...mapGetters({
      loggedIn: 'getLoggedIn',
      user: 'getUser',
    }),
    items() {
      return [
        {
          title: 'Formulários',
          icon: 'assignment',
          routeName: 'Forms List',
          visible: true,
        },
        {
          title: 'Equipes',
          icon: 'group',
          routeName: 'Login',
          visible: true,
        },
        {
          title: 'Relatórios',
          icon: 'assessment',
          routeName: 'Login',
          visible: true,
        },
        {
          title: 'Empresas',
          icon: 'business',
          routeName: 'Login',
          visible: true,
        },
      ];
    },
  },
  components: {
    'cb-breadcrumb': Breadcrumb,
    'cb-sidebar': Sidebar,
    'cb-toolbar': Toolbar,
  },
};
</script>
