<template>
  <v-card>
    <v-card-text>
      <h4>Name: {{ project.name }}</h4>
      <h5>Status: {{ project.status }}</h5>
      <h5>Price: {{ project.price || 'Undefined' }}</h5>
      <h5 :class="{'red--text': isLate(project) }">
        Schedule: {{ project.start | date('D of MMMM, YYYY') }} - {{ project.end | date('D of MMMM, YYYY') }}
      </h5>
      <h5>Comercial: {{ ( project.comercial && project.comercial.name ) || 'Undefined' }}
      </h5>
      <h5>Manager: {{ ( project.manager && project.manager.name ) || 'Undefined' }}</h5>
      <div>
        <h5>Categories:
          <v-chip v-for="category in project.categories"
                  :key="category.id">{{category.name}}</v-chip>
        </h5>
      </div>
      <h5>Developers:</h5>
      <v-list>
        <v-list-group v-for="developer in project.developers"
                      :key="developer.id">
          <v-list-tile slot="item">
            <v-list-tile-content>
              <v-list-tile-title>{{ developer.developer.name }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="developer.categories">
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-for="category in developer.categories"
                       :key="category.id">
            <v-list-tile-content>
              <v-list-tile-title>{{ category.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-card-text>
    <div>
      <v-btn color="green"
             dark
             absolute
             top
             right
             fab
             @click="edit">
        <v-icon>mode_edit</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import isLate from '@/helpers/isLate';
import filters from '@/filters';
import { mapGetters } from 'vuex';

export default {
  name: 'cb-project-profile-page',
  computed: {
    ...mapGetters({
      project: 'getSelectedProject',
    }),
  },
  filters: {
    date: filters.date,
  },
  methods: {
    isLate,
    edit() {
      this.$router.push({ name: 'Edit Project', params: { id: this.project.id } });
    },
  },
};
</script>

