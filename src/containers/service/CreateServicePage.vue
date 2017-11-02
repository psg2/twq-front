<template>
    <v-card>
        <v-card-text>
            <cb-service-form @submit="onSubmit">
            </cb-service-form>
        </v-card-text>
    </v-card>
</template>

<script>
import ServiceForm from '@/components/service/ServiceForm';
import * as actions from '@/store/modules/service/types';

export default {
  name: 'cb-create-service-page',
  components: {
    'cb-service-form': ServiceForm,
  },
  methods: {
    onSubmit(form) {
      this.$store
        .dispatch(actions.CREATE, form)
        .then(() => this.$router.push({ name: 'Services List' }));
    },
  },
};
</script>

