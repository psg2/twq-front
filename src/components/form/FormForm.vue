<template>
    <v-form @submit.prevent="submit()"
            novalidate>
        <v-text-field label="Nome"
                      v-model="name"
                      :error-messages="errors.collect('nome')"
                      v-validate="'required'"
                      required
                      data-vv-name="nome"
                      autofocus></v-text-field>
        <div class="form-group">
            <v-switch v-model="hasLimit"
                      hide-details></v-switch>
            <v-text-field label="Tempo Limite"
                          v-model="limit"
                          :disabled="!hasLimit"></v-text-field>
        </div>
        <v-select :items="scales"
                  v-model="scale"
                  :rules="[v => !!v || 'The scale field is required']"
                  label="Escala"
                  :error-messages="errors.collect('scale')"
                  v-validate="'required'"
                  required
                  clearable
                  data-vv-name="scale"></v-select>
        <v-layout v-for="(question, index) in questions"
                  :key="index"
                  row>
            <div class="question">
                <span class="close"
                      @click="removeQuestion(index)">
                    X
                </span>
                <v-text-field label="Texto da Questão"
                              multi-line></v-text-field>
                <v-layout>
                    <v-flex 6xs>
                        <v-select :items="constructos"
                                  v-model="question.constructo"
                                  label="Constructo"
                                  clearable></v-select>
                    </v-flex>
                    <v-flex 6xs>
                        <v-switch v-model="question.flipped"
                                  label="Valores invertidos"
                                  hide-details></v-switch>
                    </v-flex>
                </v-layout>
            </div>
        </v-layout>
        <div>
            <v-btn @click="addQuestion">
                Adicionar Questão
            </v-btn>
        </div>
        <v-btn>
            Cancelar
        </v-btn>
        <v-btn type="submit">
            Criar
        </v-btn>
    </v-form>
</template>

<script>
export default {
  name: 'twq-form-form',
  props: ['form'],
  data() {
    return {
      name: (this.form && this.form.name) || '',
      hasLimit: false,
      limit: '',
      scale: '',
      scales: ['Escala Likert'],
      questions: [],
      constructos: [
        'COMUNICAÇÃO',
        'COORDENAÇÃO',
        'SUPORTE MUTÚO',
        'ESFORÇO',
        'COESÃO',
        'BALANÇO DA CONTRIBUIÇÃO DOS MEMBROS',
      ],
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.$emit('submit', {
            name: this.name,
          });
        }
      });
    },
    addQuestion() {
      this.questions.push({
        text: '',
        flipped: false,
        constructo: '',
      });
    },
    removeQuestion(index) {
      this.questions.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  display: flex;
  align-items: center;

  :last-child {
    flex: auto;
  }
}

.question {
  width: 100%;
  border: 0.5px solid #999999;
  padding: 20px;
  position: relative;

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 20px;
  }
}
</style>
