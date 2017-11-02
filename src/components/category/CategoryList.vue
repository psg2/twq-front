<template>
  <v-data-table :headers="headers"
                :items="categories"
                class="elevation-1">
    <template slot="items"
              scope="props">
      <tr @click="select(props.item)"
          class="pointer">
        <td class="text-xs-left">{{ props.item.name }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'cb-category-list',
  props: ['categories', 'select'],
  data() {
    return {
      headers: [{ text: 'Name', value: 'name', sortable: false, align: 'left' }],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>

