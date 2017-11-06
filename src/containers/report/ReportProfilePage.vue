<template>
  <v-card>
    <twq-report-profile :report="report">
    </twq-report-profile>
  </v-card>
</template>

<script>
import ReportProfile from '@/components/report/ReportProfile';
import { mapGetters } from 'vuex';

export default {
  name: 'twq-report-profile-page',
  components: {
    'twq-report-profile': ReportProfile,
  },
  computed: {
    ...mapGetters({
      report: 'getSelectedReport',
    }),
  },
};
</script>

