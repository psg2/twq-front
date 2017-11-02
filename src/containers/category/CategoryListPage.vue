<template>
  <v-card>
    <cb-category-list :categories="categories"
                      :select="select">
    </cb-category-list>
    <div>
      <v-btn color="green"
             dark
             absolute
             top
             right
             fab
             :to="{name: 'Create Category'}">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import CategoryList from '@/components/category/CategoryList';
import * as actions from '@/store/modules/category/types';
import { mapGetters } from 'vuex';


export default {
  name: 'cb-category-list-page',
  components: {
    'cb-category-list': CategoryList,
  },
  computed: {
    ...mapGetters({
      categories: 'getCategories',
    }),
  },
  methods: {
    select(category) {
      this.$router.push({ name: 'Category Profile', params: { id: category.id } });
    },
  },
  created() {
    this.$store.dispatch(actions.FETCH_ALL);
  },
};
</script>

<style lang="scss" scoped>

</style>

