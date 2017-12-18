<template>
  <v-card>
    <v-card-text>
      <twq-form-form @submit="onSubmit"
                     :form="form"
                     :cancel="cancel"
                     submitText="Atualizar">
      </twq-form-form>
    </v-card-text>
  </v-card>
</template>

<script>
import FormForm from '@/components/form/FormForm';
import * as actions from '@/store/modules/form/types';
import { mapGetters } from 'vuex';

export default {
  name: 'twq-edit-form-page',
  components: {
    'twq-form-form': FormForm,
  },
  computed: {
    ...mapGetters({
      form: 'getSelectedForm',
    }),
  },
  methods: {
    onSubmit(form) {
      this.$store
        .dispatch(actions.UPDATE, form)
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

