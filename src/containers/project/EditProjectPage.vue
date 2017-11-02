<template>
  <v-card>
    <v-card-text>
      <cb-project-form @submit="onSubmit"
                       :project="project"
                       :members="members"
                       :categories="categories">
      </cb-project-form>
    </v-card-text>
  </v-card>
</template>

<script>
import ProjectForm from '@/components/project/ProjectForm';
import * as actions from '@/store/modules/project/types';
import * as fromMembers from '@/store/modules/member/types';
import * as fromCategories from '@/store/modules/category/types';
import { mapGetters } from 'vuex';

export default {
  name: 'cb-edit-project-page',
  components: {
    'cb-project-form': ProjectForm,
  },
  computed: {
    ...mapGetters({
      project: 'getSelectedProject',
      members: 'getMembers',
      categories: 'getCategories',
    }),
  },
  methods: {
    onSubmit(form) {
      this.$store.dispatch(actions.UPDATE, { ...form, id: this.project.id })
        .then(() => this.$router.push({ name: 'Projects List' }));
    },
  },
  created() {
    this.$store.dispatch(fromCategories.FETCH_ALL);
    this.$store.dispatch(fromMembers.FETCH_ALL);
  },
};
</script>

