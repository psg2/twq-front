<template>
  <v-data-table :headers="headers"
                :items="tasks"
                class="elevation-1">
    <template slot="items"
              scope="props"
              class="red--text">
      <tr @click="select(props.item)"
          class="pointer">
        <td class="text-xs-left">{{ props.item.name }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'cb-task-list',
  props: ['tasks', 'select'],
  data() {
    return {
      headers: [{ text: 'Name', value: 'name', sortable: false, align: 'left' }],
    };
  },
};
</script>

