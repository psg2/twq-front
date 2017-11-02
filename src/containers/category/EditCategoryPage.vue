<template>
  <v-card>
    <v-card-text>
      <cb-category-form @submit="onSubmit"
                        :category="category">
      </cb-category-form>
    </v-card-text>
  </v-card>
</template>

<script>
import CategoryForm from '@/components/category/CategoryForm';
import * as actions from '@/store/modules/category/types';
import { mapGetters } from 'vuex';

export default {
  name: 'cb-edit-category-page',
  components: {
    'cb-category-form': CategoryForm,
  },
  computed: {
    ...mapGetters({
      category: 'getSelectedCategory',
    }),
  },
  methods: {
    onSubmit(form) {
      this.$store.dispatch(actions.UPDATE, { ...form, id: this.category.id })
        .then(() => this.$router.push({ name: 'Categories List' }));
    },
  },
};
</script>

