<template>
  <v-card>
    <cb-member-list :members="members">
    </cb-member-list>
    <div v-if="isAdmin">
      <v-btn color="green"
             dark
             absolute
             top
             right
             fab
             :to="{name: 'Create Member'}">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import MemberList from '@/components/member/MemberList';
import * as actions from '@/store/modules/member/types';
import { mapGetters } from 'vuex';


export default {
  name: 'cb-member-list-page',
  components: {
    'cb-member-list': MemberList,
  },
  computed: {
    ...mapGetters({
      members: 'getMembers',
      isAdmin: 'getIsAdmin',
    }),
  },
  created() {
    this.$store.dispatch(actions.FETCH_ALL);
  },
};
</script>

<style lang="scss" scoped>

</style>

