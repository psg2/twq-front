<template>
  <v-card>
    <v-card-text>
      <twq-form-form @submit="onSubmit"
                     :cancel="cancel"
                     submitText="Criar">
      </twq-form-form>
    </v-card-text>
  </v-card>
</template>

<script>
import FormForm from '@/components/form/FormForm';
import * as actions from '@/store/modules/form/types';

export default {
  name: 'twq-create-form-page',
  components: {
    'twq-form-form': FormForm,
  },
  methods: {
    onSubmit(form) {
      this.$store
        .dispatch(actions.CREATE, form)
        .then(() => this.$router.push({ name: 'Forms List' }));
    },
    cancel() {
      this.$router.push({ name: 'Forms List' });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

