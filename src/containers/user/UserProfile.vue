<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">Perfil</p>
        <v-user-profile :user="user" :categories="categories" v-on:submit="submit"></v-user-profile>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfile from '@/components/user/UserProfile';
import { UPDATE } from '@/store/modules/auth/types';
import * as _ from 'lodash';

export default {
  name: 'userProfilePage',
  data() {
    return {
      user: _.cloneDeep(this.$store.getters.getUser),
      categories: _.cloneDeep(this.$store.getters.getCategories),
    };
  },
  components: {
    'v-user-profile': UserProfile,
  },
  methods: {
    submit({ user, password }) {
      this.$store.dispatch(UPDATE, { user, password });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

