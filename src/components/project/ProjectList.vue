<template>
  <v-data-table :headers="headers"
                :items="projects"
                class="elevation-1">
    <template slot="items"
              scope="props"
              class="red--text">
      <tr @click="select(props.item)"
          class="pointer">
        <td class="text-xs-left"
            :class="{'red--text': isLate(props.item) }">{{ props.item.name }}</td>
        <td class="text-xs-left"
            :class="{'red--text': isLate(props.item) }">{{ props.item.status }}</td>
        <td class="text-xs-left"
            :class="{'red--text': isLate(props.item) }">{{ props.item.price }}</td>
        <td class="text-xs-left"
            :class="{'red--text': isLate(props.item) }">{{ props.item.start | date('D of MMMM, YYYY') }}</td>
        <td class="text-xs-left"
            :class="{'red--text': isLate(props.item) }">{{ props.item.end | date('D of MMMM, YYYY') }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import isLate from '@/helpers/isLate';
import filters from '@/filters';

export default {
  name: 'cb-project-list',
  props: ['projects', 'select'],
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name', sortable: false, align: 'left' },
        { text: 'Status', value: 'status', sortable: false, align: 'left' },
        { text: 'Price', value: 'price', sortable: false, align: 'left' },
        { text: 'Start', value: 'start', sortable: false, align: 'left' },
        { text: 'Delivery', value: 'delivery', sortable: false, align: 'left' },
      ],
    };
  },
  filters: {
    date: filters.date,
  },
  methods: {
    isLate,
  },
};
</script>

<style lang="scss" scoped>

</style>

