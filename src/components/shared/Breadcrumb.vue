<template>
  <v-toolbar flat
             dense
             class="mb-3">
    <h6 class="mb-0">{{name}}</h6>
    <v-spacer></v-spacer>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item v-for="item in items"
                          :to="{ 'name': item.name}"
                          exact
                          :key="item.name">
        {{ item.name }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
  </v-toolbar>
</template>

<script>
import * as _ from 'lodash';

export default {
  name: 'cb-breadcrumb',
  computed: {
    name() {
      return this.$route.name;
    },
    items() {
      const matched = _.filter(this.$route.matched, match => match.name);
      const items = _.map(matched, match => (
        { name: match.name, disabled: this.$route.name === match.name }
      ));
      return items;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: transparent !important;
}
</style>