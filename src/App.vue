<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style src="vuetify/dist/vuetify.min.css"></style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');

html,
body {
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

#app {
  height: 100%;
}

.pointer {
  cursor: pointer;
}
</style>
