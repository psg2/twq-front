<template>
  <v-card>
    <twq-report-comparison :reportA="reportA"
                           :reportB="reportB">
    </twq-report-comparison>
  </v-card>
</template>

<script>
import ReportComparison from '@/components/report/ReportComparison';
import { mapGetters } from 'vuex';

export default {
  name: 'twq-report-comparison-page',
  components: {
    'twq-report-comparison': ReportComparison,
  },
  computed: {
    ...mapGetters({
      reportA: 'getReportA',
      reportB: 'getReportB',
    }),
  },
};
</script>

