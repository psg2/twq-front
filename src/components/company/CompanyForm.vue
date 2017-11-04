<template>
    <v-form @submit.prevent="submit()"
            novalidate>
        <v-text-field label="Nome"
                      v-model="name"
                      :error-messages="errors.collect('nome')"
                      v-validate="'required'"
                      required
                      data-vv-name="nome"
                      autofocus></v-text-field>
        <v-btn type="button">
            Cancelar
        </v-btn>
        <v-btn type="submit">
            Criar
        </v-btn>
    </v-form>
</template>

<script>
export default {
  name: 'twq-company-form',
  props: ['company'],
  data() {
    return {
      name: (this.company && this.company.name) || '',
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.$emit('submit', {
            name: this.name,
          });
        }
      });
    },
  },
};
</script>

