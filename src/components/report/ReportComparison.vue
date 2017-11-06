<template>
  <div class="report-container">
    <v-layout row
              wrap>
      <v-flex xs12
              class="text-xs-center">
        <h5>Constructos</h5>
      </v-flex>
      <v-flex xs4
              v-for="label in labels"
              :key="label.name">
        <v-checkbox :label="label.name"
                    v-model="label.show"
                    light
                    hide-details></v-checkbox>
      </v-flex>
    </v-layout>
    <div class="comparison-container">
      <v-layout row>
        <v-flex xs6>
          <div class="chart-container">
            <v-radar-chart :chartData="dataA"
                           :options="optionsA"></v-radar-chart>
          </div>
        </v-flex>
        <v-flex xs6>
          <div class="chart-container">
            <v-radar-chart :chartData="dataB"
                           :options="optionsB"></v-radar-chart>
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
  name: 'twq-report-comparison',
  components: {
    'v-radar-chart': RadarChart,
  },
  props: ['reportA', 'reportB'],
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
      datasetsA: generateMembersArray(members, constructos, max),
      datasetsB: generateMembersArray(members, constructos, max),
      optionsA: {
        title: {
          display: true,
          fontSize: 18,
          text: `${this.reportA.team} - ${this.reportA.form} - ${this.reportA
            .date} `,
        },
      },
      optionsB: {
        title: {
          display: true,
          fontSize: 18,
          text: `${this.reportB.team} - ${this.reportB.form} - ${this.reportB
            .date} `,
        },
      },
    };
  },
  computed: {
    filteredLabels() {
      return this.labels.filter(label => label.show).map(label => label.name);
    },
    dataA() {
      return {
        labels: this.filteredLabels,
        datasets: this.datasetsA,
      };
    },
    dataB() {
      return {
        labels: this.filteredLabels,
        datasets: this.datasetsB,
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
