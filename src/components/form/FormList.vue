<template>
  <div>
    <v-data-table :headers="headers"
                  :items="forms"
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
          <td class="text-xs-left">
            <v-icon class="pointer"
                    @click.stop="showDialog(props.item)">delete</v-icon>
            <v-icon class="pointer"
                    @click="select(props.item)">mode_edit</v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="headline">Deletar Formulário</v-card-title>
        <v-card-text>Tem certeza que deseja deletar o formulário {{selectedForm.name}}?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1"
                 flat="flat"
                 @click.native="dialog = false">Cancelar</v-btn>
          <v-btn color="green darken-1"
                 flat="flat"
                 @click.native="confirmDialog">Deletar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'twq-form-list',
  props: ['forms', 'select', 'remove'],
  data() {
    return {
      dialog: false,
      selectedForm: '',
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
        {
          text: 'Ações',
          sortable: false,
          align: 'left',
        },
      ],
    };
  },
  methods: {
    showDialog(form) {
      this.dialog = true;
      this.selectedForm = form;
    },
    confirmDialog() {
      this.dialog = false;
      this.remove(this.selectedForm);
    },
  },
};
</script>


