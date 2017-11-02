<template>
  <v-card>
    <v-card-text>
      <cb-task-form @submit="onSubmit">
      </cb-task-form>
    </v-card-text>
  </v-card>
</template>

<script>
import TaskForm from '@/components/task/TaskForm';
import * as actions from '@/store/modules/task/types';

export default {
  name: 'cb-create-task-page',
  components: {
    'cb-task-form': TaskForm,
  },
  methods: {
    onSubmit(form) {
      this.$store
        .dispatch(actions.CREATE, form)
        .then(() => this.$router.push({ name: 'Tasks List' }));
    },
  },
};
</script>

