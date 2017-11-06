<template>
  <v-card>
    <twq-report-list :reports="reports"
                     :select="select"
                     @comparison="onComparison">
    </twq-report-list>
  </v-card>
</template>

<script>
import ReportList from '@/components/report/ReportList';
import * as actions from '@/store/modules/report/types';
import { mapGetters } from 'vuex';

export default {
  name: 'twq-report-list-page',
  components: {
    'twq-report-list': ReportList,
  },
  computed: {
    ...mapGetters({
      reports: 'getReports',
    }),
  },
  methods: {
    select(report) {
      this.$router.push({
        name: 'Report Profile',
        params: { reportId: report.id },
      });
    },
    onComparison({ reportAId, reportBId }) {
      this.$router.push({
        name: 'Report Comparison',
        params: { reportAId, reportBId },
      });
    },
  },
  created() {
    this.$store.dispatch(actions.FETCH_ALL);
  },
};
</script>

