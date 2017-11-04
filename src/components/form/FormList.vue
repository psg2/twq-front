<template>
  <v-data-table :headers="headers"
                :items="tempForms"
                class="elevation-1">
    <template slot="items"
              scope="props"
              class="red--text">
      <tr>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.limit }}</td>
        <td class="text-xs-left">{{ props.item.author }}</td>
        <td class="text-xs-left">{{ props.item.created_at }}</td>
        <td class="text-xs-left">{{ props.item.updated_at }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'twq-form-list',
  props: ['forms'],
  data() {
    return {
      headers: [
        { text: 'Nome', value: 'name', sortable: false, align: 'left' },
        {
          text: 'Limite de Tempo',
          value: 'status',
          sortable: false,
          align: 'left',
        },
        { text: 'Autor', value: 'price', sortable: false, align: 'left' },
        {
          text: 'Data de Criação',
          value: 'start',
          sortable: false,
          align: 'left',
        },
        {
          text: 'Última Atualização',
          value: 'delivery',
          sortable: false,
          align: 'left',
        },
      ],
      tempForms: [
        {
          name: 'Form X',
          limit: '5 hours',
          author: '42124',
          created_at: '11/03/2017',
          updated_at: '20/10/2017',
        },
        {
          name: 'Form X',
          limit: '5 hours',
          author: '42124',
          created_at: '11/03/2017',
          updated_at: '20/10/2017',
        },
        {
          name: 'Form X',
          limit: '5 hours',
          author: '42124',
          created_at: '11/03/2017',
          updated_at: '20/10/2017',
        },
        {
          name: 'Form X',
          limit: '5 hours',
          author: '42124',
          created_at: '11/03/2017',
          updated_at: '20/10/2017',
        },
      ],
    };
  },
};
</script>


