<template>
  <div>
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
                @click.stop="showDialog(index)">
            X
          </span>
          <v-text-field label="Texto da Questão"
                        v-model="question.text"
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
      <v-btn @click="cancel">
        Cancelar
      </v-btn>
      <v-btn type="submit">
        {{submitText}}
      </v-btn>
    </v-form>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="headline">Deletar Questão</v-card-title>
        <v-card-text>Tem certeza que deseja deletar a questão?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1"
                 flat="flat"
                 @click.native="dialog = false">Cancelar</v-btn>
          <v-btn color="green darken-1"
                 flat="flat"
                 @click.native="removeQuestion">Deletar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import * as _ from 'lodash';

export default {
  name: 'twq-form-form',
  props: ['form', 'cancel', 'submitText'],
  data() {
    return {
      dialog: false,
      selectedIndex: '',
      name: (this.form && this.form.name) || '',
      hasLimit: (this.form && this.form.limit) || false,
      limit: (this.form && this.form.limit) || '',
      scale: (this.form && this.form.scale) || false,
      scales: ['Escala Likert'],
      questions:
        (this.form &&
          this.form.questions &&
          _.cloneDeep(this.form.questions)) ||
        [],
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
            id: this.form && this.form.id,
            name: this.name,
            limit: this.limit,
            scale: this.scale,
            questions: this.questions,
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
    removeQuestion() {
      this.dialog = false;
      this.questions.splice(this.selectedIndex, 1);
    },
    showDialog(index) {
      this.dialog = true;
      this.selectedIndex = index;
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
  margin: 5px 0px;
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
