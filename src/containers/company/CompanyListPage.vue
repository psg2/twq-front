<template>
  <v-card>
    <twq-company-list :companies="companies">
    </twq-company-list>
    <div>
      <v-btn color="blue-grey"
             dark
             absolute
             top
             right
             fab
             :to="{name: 'Create Company'}">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import CompanyList from '@/components/company/CompanyList';
import * as actions from '@/store/modules/company/types';
import { mapGetters } from 'vuex';

export default {
  name: 'twq-company-list-page',
  components: {
    'twq-company-list': CompanyList,
  },
  computed: {
    ...mapGetters({
      companies: 'getCompanies',
    }),
  },
  created() {
    this.$store.dispatch(actions.FETCH_ALL);
  },
};
</script>

