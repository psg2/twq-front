<template>
  <div class="companies-container">
    <v-layout row
              wrap>
      <v-flex xs4
              v-for="company in companies"
              :key="company.name"
              @click="select(company)">
        <v-card class="white--text blue-grey lighten-2 company pointer">
          <v-card-title primary-title>
            <div class="headline">{{company.name}}</div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'twq-company-list',
  props: ['companies', 'select'],
};
</script>

<style lang="scss" scoped>
.companies-container {
  display: flex;
  padding: 30px;
}

.company {
  margin: 10px;
}
</style>

