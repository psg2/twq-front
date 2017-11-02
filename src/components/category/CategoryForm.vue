<template>
  <v-form @submit.prevent="submit"
          novalidate>
    <v-text-field label="Name"
                  type="text"
                  v-model="name"
                  :error-messages="errors.collect('name')"
                  v-validate="'required'"
                  required
                  data-vv-name="name"
                  autofocus></v-text-field>
    <v-btn @click="submit">
      Submit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'cb-member-form',
  props: ['category'],
  data() {
    return {
      name: (this.category && this.category.name) || '',
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.$emit('submit', { name: this.name });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

