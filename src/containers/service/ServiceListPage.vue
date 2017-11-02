<template>
  <v-card>
    <cb-service-list :services="services"
                     :select="select">
    </cb-service-list>
    <div>
      <v-btn color="green"
             dark
             absolute
             top
             right
             fab
             :to="{name: 'Create Service'}">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import ServiceList from '@/components/service/ServiceList';
import * as actions from '@/store/modules/service/types';
import { mapGetters } from 'vuex';

export default {
  name: 'cb-service-list-page',
  components: {
    'cb-service-list': ServiceList,
  },
  methods: {
    select(service) {
      this.$router.push({ name: 'Service Profile', params: { id: service.id } });
    },
  },
  computed: {
    ...mapGetters({
      services: 'getServices',
    }),
  },
  created() {
    this.$store.dispatch(actions.FETCH_ALL);
  },
};
</script>
