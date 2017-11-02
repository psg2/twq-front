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
    <cb-footer v-if="loggedIn"></cb-footer>
  </v-app>
</template>

<script>
import Breadcrumb from '@/components/shared/Breadcrumb';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import Toolbar from '@/components/layout/Toolbar';
import { LOGOUT } from '@/store/modules/auth/types';
import { mapGetters } from 'vuex';

export default {
  name: 'cb-dashboard',
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
          title: 'Home',
          icon: 'home',
          routeName: 'Home',
          visible: true,
        },
        {
          title: 'Projects',
          icon: 'work',
          routeName: 'Projects List',
          visible: true,
        },
        {
          title: 'Members',
          icon: 'group',
          routeName: 'Members List',
          visible: true,
        },
        {
          title: 'Services',
          icon: 'note',
          routeName: 'Services List',
          visible: true,
        },
        {
          title: 'Tasks',
          icon: 'assignment',
          routeName: 'Tasks List',
          visible: true,
        },
        {
          title: 'Positions',
          icon: 'contacts',
          routeName: 'Positions List',
          visible: true,
        },
      ];
    },
  },
  components: {
    'cb-breadcrumb': Breadcrumb,
    'cb-footer': Footer,
    'cb-sidebar': Sidebar,
    'cb-toolbar': Toolbar,
  },
};
</script>
