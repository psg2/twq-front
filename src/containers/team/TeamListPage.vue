<template>
  <v-card>
    <twq-team-list :teams="teams"
                   :select="select"
                   :remove="remove">
    </twq-team-list>
    <div>
      <v-btn color="blue-grey"
             dark
             absolute
             top
             right
             fab
             :to="{name: 'Create Team'}">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import TeamList from '@/components/team/TeamList';
import * as actions from '@/store/modules/team/types';
import { mapGetters } from 'vuex';

export default {
  name: 'twq-team-list-page',
  components: {
    'twq-team-list': TeamList,
  },
  computed: {
    ...mapGetters({
      teams: 'getTeams',
    }),
  },
  methods: {
    select(team) {
      this.$router.push({ name: 'Edit Team', params: { teamId: team.id } });
    },
    remove(team) {
      this.$store.dispatch(actions.DELETE, team);
    },
  },
  created() {
    this.$store.dispatch(actions.FETCH_ALL);
  },
};
</script>

