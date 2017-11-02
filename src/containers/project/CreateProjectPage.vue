<template>
  <v-card>
    <v-card-text>
      <cb-project-form @submit="onSubmit"
                       :members="members"
                       :services="services"
                       :tasks="tasks">
      </cb-project-form>
    </v-card-text>
  </v-card>
</template>

<script>
import ProjectForm from '@/components/project/ProjectForm';
import * as actions from '@/store/modules/project/types';
import * as memberActions from '@/store/modules/member/types';
import * as serviceActions from '@/store/modules/service/types';
import * as taskActions from '@/store/modules/task/types';
import { mapGetters } from 'vuex';

export default {
  name: 'cb-create-project-page',
  components: {
    'cb-project-form': ProjectForm,
  },
  computed: {
    ...mapGetters({
      members: 'getMembers',
      services: 'getServices',
      tasks: 'getTasks',
    }),
  },
  methods: {
    onSubmit(form) {
      this.$store
        .dispatch(actions.CREATE, form)
        .then(() => this.$router.push({ name: 'Projects List' }));
    },
  },
  created() {
    this.$store.dispatch(serviceActions.FETCH_ALL);
    this.$store.dispatch(memberActions.FETCH_ALL);
    this.$store.dispatch(taskActions.FETCH_ALL);
  },
};
</script>

<style lang="scss" scoped>

</style>

