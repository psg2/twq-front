<template>
  <v-card>
    <twq-form-list :forms="forms"
                   :select="select"
                   :remove="remove">
    </twq-form-list>
    <div>
      <v-btn color="blue-grey"
             dark
             absolute
             top
             right
             fab
             :to="{name: 'Create Form'}">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import FormList from '@/components/form/FormList';
import * as actions from '@/store/modules/form/types';
import { mapGetters } from 'vuex';

export default {
  name: 'twq-form-list-page',
  components: {
    'twq-form-list': FormList,
  },
  computed: {
    ...mapGetters({
      forms: 'getForms',
    }),
  },
  methods: {
    select(form) {
      this.$router.push({ name: 'Edit Form', params: { formId: form.id } });
    },
    remove(form) {
      this.$store.dispatch(actions.DELETE, form);
    },
  },
  created() {
    this.$store.dispatch(actions.FETCH_ALL);
  },
};
</script>

