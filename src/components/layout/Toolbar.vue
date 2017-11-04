<template>
  <v-toolbar app
             clipped-left
             fixed>
    <v-toolbar-side-icon v-if="sideAction"
                         @click.stop="sideAction"></v-toolbar-side-icon>
    <v-toolbar-title class="pointer">
      <router-link :to="{ name: 'Companies List' }"
                   tag="span"
                   class="navbar-brand">
        <strong>TWQ APP</strong>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-menu open-on-hover
              bot
              offset-y>
        <v-btn flat
               slot="activator">{{ name }}</v-btn>
        <v-list>
          <v-list-tile @click.stop>
            <v-list-tile-title>Perfil</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-title>Sair</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'cb-toolbar',
  props: ['name', 'sideAction', 'logout'],
};
</script>

<style lang="scss" scoped>
nav {
  z-index: 1001;
}
</style>
