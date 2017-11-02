<template>
  <v-card>
    <v-card-text>
      <cb-position-form @submit="onSubmit">
      </cb-position-form>
    </v-card-text>
  </v-card>
</template>

<script>
import PositionForm from '@/components/position/PositionForm';
import * as actions from '@/store/modules/position/types';

export default {
  name: 'cb-create-position-page',
  components: {
    'cb-position-form': PositionForm,
  },
  methods: {
    onSubmit(form) {
      this.$store
        .dispatch(actions.CREATE, form)
        .then(() => this.$router.push({ name: 'Positions List' }));
    },
  },
};
</script>

