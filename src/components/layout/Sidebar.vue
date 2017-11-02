<template>
  <v-navigation-drawer app
                       persistent
                       enable-resize-watcher
                       clipped
                       v-model="visible">
    <v-list dense
            class="pt-0">
      <v-list-tile v-for="item in items"
                   :key="item.title"
                   :to="{ name: item.routeName}">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'cb-sidebar',
  props: ['show', 'items'],
  computed: {
    visible: {
      get() {
        return this.show;
      },
      set(visible) {
        this.$emit('resize', visible);
      },
    },
  },
};
</script>

