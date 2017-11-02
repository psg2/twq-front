<template>
  <v-card>
    <v-card-text>
      <v-form @submit.prevent="submit"
              novalidate>
        <v-text-field label="Name"
                      type="text"
                      v-model="member.name"
                      :error-messages="errors.collect('name')"
                      v-validate="'required'"
                      required
                      data-vv-name="name"></v-text-field>
        <v-text-field label="Email"
                      type="email"
                      suffix="@citi.org.br"
                      v-model="member.email"
                      :error-messages="errors.collect('email')"
                      v-validate="'required'"
                      required
                      data-vv-name="email"></v-text-field>
        <v-text-field label="Password"
                      type="password"
                      v-model="member.password"
                      :error-messages="errors.collect('password')"
                      v-validate="'required|min:8'"
                      required
                      data-vv-name="password"></v-text-field>
        <v-select :items="positions"
                  v-model="member.position"
                  :rules="[v => !!v || 'The position field is required']"
                  item-text="name"
                  item-value="id"
                  autocomplete
                  label="Position"
                  :error-messages="errors.collect('position')"
                  v-validate="'required'"
                  required
                  data-vv-name="position"></v-select>
        <v-btn @click="submit"
               type="submit">
          Submit
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'cb-member-form',
  props: ['positions'],
  data() {
    return {
      member: {
        name: '',
        email: '',
        password: '',
        position: '',
      },
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.$emit('submit', {
            name: this.member.name,
            email: `${this.member.email}@citi.org.br`,
            password: this.member.password,
            position: this.member.position,
          });
        }
      });
    },
  },
};
</script>


