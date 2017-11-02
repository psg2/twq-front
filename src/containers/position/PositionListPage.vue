<template>
  <v-card>
    <cb-position-list :positions="positions"
                      :select="select">
    </cb-position-list>
    <div>
      <v-btn color="green"
             dark
             absolute
             top
             right
             fab
             :to="{name: 'Create Position'}">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import PositionList from '@/components/position/PositionList';
import * as actions from '@/store/modules/position/types';
import { mapGetters } from 'vuex';

export default {
  name: 'cb-position-list-page',
  components: {
    'cb-position-list': PositionList,
  },
  methods: {
    select(position) {
      this.$router.push({ name: 'Position Profile', params: { id: position.id } });
    },
  },
  computed: {
    ...mapGetters({
      positions: 'getPositions',
    }),
  },
  created() {
    this.$store.dispatch(actions.FETCH_ALL);
  },
};
</script>
