<template>
  <cb-member-form @submit="onSubmit"
                  :positions="positions">
  </cb-member-form>
</template>

<script>
import MemberForm from '@/components/member/MemberForm';
import * as actions from '@/store/modules/member/types';
import * as positionsActions from '@/store/modules/position/types';
import { mapGetters } from 'vuex';

export default {
  name: 'cb-create-member-page',
  components: {
    'cb-member-form': MemberForm,
  },
  computed: {
    ...mapGetters({
      positions: 'getPositions',
    }),
  },
  methods: {
    onSubmit(form) {
      this.$store
        .dispatch(actions.CREATE, form)
        .then(() => this.$router.push({ name: 'Members List' }));
    },
  },
  created() {
    this.$store.dispatch(positionsActions.FETCH_ALL);
  },
};
</script>

<style lang="scss" scoped>

</style>

