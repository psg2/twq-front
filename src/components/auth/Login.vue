<template>
  <div class="application--light login-container">
    <v-card class="elevation-24">
      <v-form @submit.prevent="submit"
              novalidate>
        <v-text-field label="Email"
                      v-model="email">
        </v-text-field>
        <v-text-field label="Password"
                      v-model="password"
                      type="password">
        </v-text-field>
        <v-btn type="submit">
          Entrar
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {
      this.$emit('submit', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: aliceblue;
}

.card {
  border-radius: 10px;
  padding: 50px;
  width: 600px;
  height: auto;
  margin: auto;
  background: white;
}
</style>

