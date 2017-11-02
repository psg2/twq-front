<template>
  <v-card>
    <v-card-text>
      <cb-category-form @submit="onSubmit">
      </cb-category-form>
    </v-card-text>
  </v-card>
</template>

<script>
import CategoryForm from '@/components/category/CategoryForm';
import * as actions from '@/store/modules/category/types';

export default {
  name: 'cb-create-category-page',
  components: {
    'cb-category-form': CategoryForm,
  },
  methods: {
    onSubmit(form) {
      this.$store.dispatch(actions.CREATE, form)
        .then(() => this.$router.push({ name: 'Categories List' }));
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

