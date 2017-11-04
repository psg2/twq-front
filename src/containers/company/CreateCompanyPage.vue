<template>
  <v-card>
    <v-card-text>
      <twq-company-form @submit="onSubmit">
      </twq-company-form>
    </v-card-text>
  </v-card>
</template>

<script>
import CompanyForm from '@/components/company/CompanyForm';
import * as actions from '@/store/modules/company/types';

export default {
  name: 'twq-create-company-page',
  components: {
    'twq-company-form': CompanyForm,
  },
  methods: {
    onSubmit(form) {
      this.$store
        .dispatch(actions.CREATE, form)
        .then(() => this.$router.push({ name: 'Companies List' }));
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

