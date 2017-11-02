<template>
  <v-card>
    <cb-task-list :tasks="tasks"
                  :select="select">
    </cb-task-list>
    <div>
      <v-btn color="green"
             dark
             absolute
             top
             right
             fab
             :to="{name: 'Create Task'}">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import TaskList from '@/components/task/TaskList';
import * as actions from '@/store/modules/task/types';
import { mapGetters } from 'vuex';

export default {
  name: 'cb-task-list-page',
  components: {
    'cb-task-list': TaskList,
  },
  methods: {
    select(task) {
      this.$router.push({ name: 'Task Profile', params: { id: task.id } });
    },
  },
  computed: {
    ...mapGetters({
      tasks: 'getTasks',
    }),
  },
  created() {
    this.$store.dispatch(actions.FETCH_ALL);
  },
};
</script>
