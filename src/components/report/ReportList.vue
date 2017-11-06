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
            <v-icon @click="select(props.items)">remove_red_eye</v-icon>
          </td>
          <td>
            <v-checkbox light
                        hide-details></v-checkbox>
          </td>
        </tr>
      </template>
    </v-data-table>

    <div class="text-xs-center">
      <v-btn color="info"
             v-if="count === 2">Comparar</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'twq-report-list',
  props: ['reports', 'select'],
  data() {
    return {
      count: 0,
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
};
</script>


