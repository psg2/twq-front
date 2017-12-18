<template>
  <v-app>
    <cb-toolbar v-if="loggedIn"
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
  },
  components: {
    'cb-breadcrumb': Breadcrumb,
    'cb-toolbar': Toolbar,
  },
};
</script>
