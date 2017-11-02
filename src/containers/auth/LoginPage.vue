<template>
  <v-login @submit="onSubmit" :loading="loading">
  </v-login>
</template>

<script>
import { mapState } from 'vuex';
import { LOGIN } from '@/store/modules/auth/types';
import Login from '@/components/auth/Login';

export default {
  name: 'loginPage',
  components: {
    'v-login': Login,
  },
  computed: mapState({
    loading: state => state.auth.loading,
  }),
  methods: {
    onSubmit(form) {
      this.$store.commit(LOGIN);
      this.$store.dispatch(LOGIN, form).then(() => this.$router.push({ name: 'Home' }));
    },
  },
};
</script>
