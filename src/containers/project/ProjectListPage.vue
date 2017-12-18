<template>
  <v-card>
    <cb-project-list :projects="projects"
                     :select="select">
    </cb-project-list>
    <div>
      <v-btn color="green"
             dark
             absolute
             top
             right
             fab
             :to="{name: 'Create Project'}">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import ProjectList from '@/components/project/ProjectList';
import * as actions from '@/store/modules/project/types';
import { mapGetters } from 'vuex';

export default {
  name: 'cb-project-list-page',
  components: {
    'cb-project-list': ProjectList,
  },
  methods: {
    select(project) {
      this.$router.push({
        name: 'Project Profile',
        params: { id: project.id },
      });
    },
  },
  computed: {
    ...mapGetters({
      projects: 'getProjects',
    }),
  },
  created() {
    this.$store.dispatch(actions.FETCH_ALL);
  },
};
</script>

<style lang="scss" scoped>

</style>

