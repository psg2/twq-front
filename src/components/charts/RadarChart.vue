<script>
import { Radar, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Radar,
  mixins: [reactiveProp],
  name: 'v-radar-chart',
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
