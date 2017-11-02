<template>
  <v-card>
    <v-card-text>
      <h4>Name: {{ category.name }}</h4>
    </v-card-text>
    <div>
      <v-btn color="green"
             dark
             absolute
             top
             right
             fab
             @click="edit">
        <v-icon>mode_edit</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'cb-category-profile-page',
  computed: {
    ...mapGetters({
      category: 'getSelectedCategory',
    }),
  },
  methods: {
    edit() {
      this.$router.push({ name: 'Edit Category', params: { id: this.category.id } });
    },
  },
};
</script>

