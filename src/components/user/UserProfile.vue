<template>
  <div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input"
               type="email"
               placeholder="Email"
               :value="user.email">
      </div>
    </div>
    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input"
               type="email"
               placeholder="Nome"
               :value="user.name">
      </div>
    </div>
    <label class="label">Categorias</label>
    <div class="field is-grouped">
      <p class="categories">
        <span class="tag is-info is-medium"
              v-for="(category, index) in user.categories"
              :key="category.id">{{category.name}}
          <button class="delete is-small"
                  @click="removeCategory(index)"></button>
        </span>
      </p>
      <div class="control">
        <div class="select">
          <select v-model="selected">
            <option value="">Categorias</option>
            <option v-for="category in categoryList"
                    :key="category.id"
                    :value="category.id">{{category.name}}</option>
          </select>
        </div>
      </div>
      <div class="control">
        <button class="button is-info"
                @click="addCategory">Adicionar</button>
      </div>
    </div>

    <div class="field">
      <label class="label">Confirmar Senha</label>
      <div class="control">
        <input class="input"
               type="password"
               v-model="password"
               placeholder="Senha">
      </div>
    </div>
    <div class="field">
      <div class="control has-text-centered">
        <button class="button is-success"
                @click="submit">Atualizar</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash';

export default {
  name: 'userProfile',
  data() {
    return {
      password: '',
      selected: '',
      categoryList: _.filter(this.categories, category => !_.some(this.user.categories, ['name', category.name])),
    };
  },
  methods: {
    addCategory() {
      if (this.selected) {
        const index = _.findIndex(this.categoryList, category => category.id === this.selected);
        this.user.categories.push(this.categoryList[index]);
        this.categoryList = _.filter(this.categoryList, category => category.id !== this.selected);
        this.selected = '';
      }
    },
    removeCategory(index) {
      this.categoryList.push(this.user.categories[index]);
      this.user.categories.splice(index, 1);
    },
    submit() {
      this.$emit('submit', { user: this.user, password: this.password });
    },
  },
  props: ['user', 'categories'],
};
</script>

<style lang="scss" scoped>
.tag {
  margin-right: 5px;
}
</style>