<template>
  <v-data-table :headers="headers"
                :items="members"
                class="elevation-1">
    <template slot="items"
              scope="props">
      <td class="text-xs-left">{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.position && props.item.position.name }}</td>
      <td class="text-xs-left">{{ props.item.active | active }}</td>
    </template>
  </v-data-table>
</template>

<script>
import filters from '@/filters';

export default {
  name: 'cb-member-list',
  props: ['members'],
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name', sortable: false, align: 'left' },
        { text: 'Position', value: 'position', sortable: false, align: 'left' },
        { text: 'Active', value: 'active', sortable: false, align: 'left' },
      ],
    };
  },
  filters: {
    active: filters.active,
  },
};
</script>

<style lang="scss" scoped>

</style>

