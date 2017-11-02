<template>
  <v-form @submit.prevent="submit()"
          novalidate>
    <v-text-field label="Name"
                  v-model="name"
                  :error-messages="errors.collect('name')"
                  v-validate="'required'"
                  required
                  data-vv-name="name"
                  autofocus></v-text-field>
    <v-text-field label="Start Date"
                  v-model="start"
                  :mask="dateMask"
                  :error-messages="errors.collect('start')"
                  v-validate="'required|date_format:DDMMYYYY'"
                  required
                  data-vv-name="start"></v-text-field>
    <v-text-field label="Delivery Date"
                  v-model="end"
                  :mask="dateMask"
                  :error-messages="errors.collect('end')"
                  v-validate="'required|date_format:DDMMYYYY'"
                  required
                  data-vv-name="end"></v-text-field>
    <v-text-field label="Price"
                  v-model="price"
                  :error-messages="errors.collect('price')"
                  v-validate="'required|decimal'"
                  required
                  data-vv-name="price"></v-text-field>
    <v-select :items="statuses"
              v-model="status"
              :rules="[v => !!v || 'The status field is required']"
              label="Status"
              :error-messages="errors.collect('status')"
              v-validate="'required'"
              required
              clearable
              data-vv-name="status"></v-select>
    <v-select :items="members"
              v-model="comercial"
              item-text="name"
              item-value="id"
              :rules="[v => !!v || 'The comercial field is required']"
              auto
              label="Comercial"
              :error-messages="errors.collect('comercial')"
              v-validate="'required'"
              required
              clearable
              data-vv-name="comercial">
      <template slot="selection"
                scope="data">
        <span class="default-color">
          {{ data.item.name }} ({{ data.item.position && data.item.position.name }})
        </span>
      </template>
      <template slot="item"
                scope="data">
        <v-list-tile-content>
          <v-list-tile-title>{{data.item.name}}</v-list-tile-title>
          <v-list-tile-sub-title>{{ data.item.position && data.item.position.name }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </template>
    </v-select>
    <v-select :items="members"
              v-model="manager"
              item-text="name"
              item-value="id"
              :rules="[v => !!v || 'The manager field is required']"
              auto
              label="Manager"
              :error-messages="errors.collect('manager')"
              v-validate="'required'"
              required
              clearable
              data-vv-name="manager">
      <template slot="selection"
                scope="data">
        <span class="default-color">
          {{ data.item.name }} ({{ data.item.position && data.item.position.name }})
        </span>
      </template>
      <template slot="item"
                scope="data">
        <v-list-tile-content>
          <v-list-tile-title>{{data.item.name}}</v-list-tile-title>
          <v-list-tile-sub-title>{{ data.item.position && data.item.position.name }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </template>
    </v-select>
    <v-select :items="services"
              v-model="projectService"
              item-text="name"
              item-value="id"
              label="Service"
              :rules="[v => !!v || 'The service field is required']"
              autocomplete
              clearable
              :error-messages="errors.collect('services')"
              v-validate="'required'"
              required
              data-vv-name="services"></v-select>
    <v-layout v-for="(collaboration, index) in collaborations"
              :key="index"
              row>
      <v-flex xs5>
        <v-select :items="members"
                  v-model="collaborations[index].collaborator"
                  item-text="name"
                  item-value="id"
                  label="Developer"
                  auto
                  :rules="[v => !!v || `The collaborator ${index+1} field is required`]"
                  :error-messages="errors.collect(`collaborator ${index+1}`)"
                  v-validate="'required'"
                  required
                  clearable
                  :data-vv-name="`collaborator ${index+1}`">
          <template slot="selection"
                    scope="data">
            <span class="default-color">
              {{ data.item.name }} ({{ data.item.position && data.item.position.name }})
            </span>
          </template>
          <template slot="item"
                    scope="data">
            <v-list-tile-content>
              <v-list-tile-title>{{data.item.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{ data.item.position && data.item.position.name }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </template>
        </v-select>
      </v-flex>
      <v-flex xs5>
        <v-select :items="tasks"
                  multiple
                  v-model="collaborations[index].tasks"
                  :rules="[v => !!v || `The collaborator ${index+1} tasks field is required`]"
                  :error-messages="errors.collect(`developer ${index+1} categories`)"
                  item-text="name"
                  item-value="id"
                  label="Tasks"
                  clearable
                  autocomplete
                  v-validate="'required'"
                  required
                  :data-vv-name="`collaborator ${index+1} tasks`"></v-select>
      </v-flex>
      <v-flex xs2>
        <v-btn @click="removeDev(index)">
          X
        </v-btn>
      </v-flex>
    </v-layout>
    <v-btn @click="addDev">
      Add Collaborator
    </v-btn>
    <v-btn type="submit">
      Submit
    </v-btn>
  </v-form>
</template>

<script>
import dateFromText from '@/helpers/dateFromText';
import depopulate from '@/helpers/depopulate';
import filters from '@/filters';

export default {
  name: 'projectForm',
  props: ['members', 'services', 'tasks', 'project'],
  data() {
    return {
      dateMask: '##/##/####',
      statuses: ['Andamento', 'Entregue'],
      name: (this.project && this.project.name) || '',
      status: (this.project && this.project.status) || '',
      comercial:
        (this.project && this.project.comercial && depopulate(this.project.comercial)) || '',
      manager: (this.project && this.project.manager && depopulate(this.project.manager)) || '',
      start:
        (this.project && this.project.start && filters.date(this.project.start, 'DDMMYYYY')) || '',
      end: (this.project && this.project.end && filters.date(this.project.end, 'DDMMYYYY')) || '',
      price: (this.project && this.project.price) || '',
      projectService:
        (this.project && this.project.service && depopulate(this.project.service)) || '',
      collaborations:
        (this.project &&
          this.project.collaborations &&
          this.project.collaborations.map(collaboration => ({
            collaborator: depopulate(collaboration.collaborator),
            tasks: depopulate(collaboration.tasks),
          }))) ||
        [],
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.$emit('submit', {
            name: this.name,
            status: this.status,
            price: this.price,
            service: this.projectService,
            manager: this.manager,
            comercial: this.comercial,
            collaborations: this.collaborations.map(collaboration => ({
              collaborator: collaboration.collaborator,
              tasks: collaboration.tasks,
            })),
            start: dateFromText(this.start),
            end: dateFromText(this.end),
          });
        }
      });
    },
    addDev() {
      this.collaborations.push({
        collaborator: '',
        tasks: [],
      });
    },
    removeDev(index) {
      this.collaborations.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.categories {
  margin-right: 10px;
}

.default-color {
  color: rgba(0, 0, 0, 0.87);
}
</style>

