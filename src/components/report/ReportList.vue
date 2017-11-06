<template>
  <div>
    <v-data-table :headers="headers"
                  :items="reports"
                  class="elevation-1">
      <template slot="items"
                scope="props"
                class="red--text">
        <tr>
          <td class="text-xs-left">{{ props.item.form }}</td>
          <td class="text-xs-left">{{ props.item.team }}</td>
          <td class="text-xs-left">{{ props.item.date }}</td>
          <td class="text-xs-left">
            <v-icon @click="select(props.item)"
                    class="pointer">remove_red_eye</v-icon>
          </td>
          <td>
            <v-checkbox light
                        hide-details
                        v-model="ids"
                        :value="props.item.id"></v-checkbox>
          </td>
        </tr>
      </template>
    </v-data-table>

    <div class="text-xs-center">
      <v-btn color="info"
             v-if="count === 2"
             @click="compare">Comparar</v-btn>
      <h5 v-if="count > 2"
          class="red--text">Só é possível comparar com dois relatórios selecionados</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'twq-report-list',
  props: ['reports', 'select'],
  data() {
    return {
      ids: [],
      headers: [
        { text: 'Formulário', value: 'form', sortable: false, align: 'left' },
        { text: 'Equipe', value: 'team', sortable: false, align: 'left' },
        {
          text: 'Data',
          value: 'start',
          sortable: false,
          align: 'left',
        },
        {
          text: 'Ações',
          sortable: false,
          align: 'left',
        },
        {
          text: 'Comparação',
          sortable: false,
          align: 'center',
        },
      ],
    };
  },
  methods: {
    compare() {
      this.$emit('comparison', {
        reportAId: this.ids[0],
        reportBId: this.ids[1],
      });
    },
  },
  computed: {
    count() {
      return this.ids.length;
    },
  },
};
</script>


