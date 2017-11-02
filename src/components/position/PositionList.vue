<template>
  <v-data-table :headers="headers"
                :items="positions"
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
  name: 'cb-position-list',
  props: ['positions', 'select'],
  data() {
    return {
      headers: [{ text: 'Name', value: 'name', sortable: false, align: 'left' }],
    };
  },
};
</script>

