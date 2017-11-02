<template>
  <div class="application--light login-container">
    <v-card class="text-xs-center elevation-24">
      <img class="brand"
           src="static/img/logo.png"
           alt="">
      <v-form @submit.prevent="submit"
              novalidate>
        <v-text-field label="Email"
                      v-model="email"
                      suffix="@citi.org.br">
        </v-text-field>
        <v-text-field label="Password"
                      v-model="password"
                      type="password">
        </v-text-field>
        <v-btn :loading="loading"
               type="submit">
          Entrar
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: ['loading'],
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {
      this.$emit('submit', {
        email: `${this.email}@citi.org.br`,
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
  background: #8cba4e;
}

.card {
  border-radius: 10px;
  padding: 50px;
  width: 600px;
  height: auto;
  margin: auto;
  background: white;
}

.brand {
  width: 150px;
}
</style>

