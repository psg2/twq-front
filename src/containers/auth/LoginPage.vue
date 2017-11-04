<template>
  <v-login @submit="onSubmit">
  </v-login>
</template>

<script>
import { LOGIN } from '@/store/modules/auth/types';
import Login from '@/components/auth/Login';

export default {
  name: 'loginPage',
  components: {
    'v-login': Login,
  },
  methods: {
    onSubmit(form) {
      this.$store.commit(LOGIN);
      this.$store
        .dispatch(LOGIN, form)
        .then(() => this.$router.push({ name: 'Company List' }));
    },
  },
};
</script>
