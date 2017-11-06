<template>
  <div class="report-container">
    <v-layout row
              class="text-xs-center">
      <v-flex>
        <h3>{{report.team}}</h3>
      </v-flex>
      <v-flex>
        <h3>{{report.form}}</h3>
      </v-flex>
      <v-flex>
        <h3>{{report.date}}</h3>
      </v-flex>
    </v-layout>
    <div class="chart-data-filter">
      <v-layout row>
        <v-flex xs4>
          <h5>Constructos</h5>
          <v-checkbox :label="label.name"
                      v-for="label in labels"
                      v-model="label.show"
                      :key="label.name"
                      light
                      hide-details></v-checkbox>

        </v-flex>
        <v-flex xs8>
          <div class="chart-container">
            <v-radar-chart :chartData="data"></v-radar-chart>
          </div>
        </v-flex>
      </v-layout>
      <div class="text-xs-center">
        <v-btn>Baixar</v-btn>
      </div>
    </div>

  </div>
</template>

<script>
import RadarChart from '@/components/charts/RadarChart';
// import * as _ from 'lodash';

function generateRandomColor() {
  return `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
}

function generateRandomData(length, max) {
  return [...new Array(length)].map(() => Math.random() * max);
}

function generateMembersArray(length, constructos, max) {
  return [...new Array(length)].map((item, index) => ({
    label: `Member ${index + 1}`,
    backgroundColor: 'transparent',
    borderColor: generateRandomColor(),
    data: generateRandomData(constructos, max),
  }));
}

export default {
  name: 'twq-report-profile',
  components: {
    'v-radar-chart': RadarChart,
  },
  props: ['report'],
  data() {
    const max = 5;
    const constructos = 6;
    const members = 6;
    return {
      labels: [
        { name: 'Comunicação', show: true },
        { name: 'Coordenação', show: true },
        { name: 'Suporte Mútuo', show: true },
        { name: 'Esforço', show: true },
        { name: 'Coesão', show: true },
        { name: 'Balanço da Contribuição dos Membros', show: true },
      ],
      datasets: generateMembersArray(members, constructos, max),
    };
  },
  computed: {
    data() {
      return {
        labels: this.labels
          .filter(label => label.show)
          .map(label => label.name),
        datasets: this.datasets,
      };
    },
    count() {
      return 0;
    },
  },
};
</script>


<style lang="scss" scoped>
.report-container {
  padding: 20px;
}

.chart-container {
  width: 600px;
  height: auto;
  margin: 0 auto;
}
</style>
