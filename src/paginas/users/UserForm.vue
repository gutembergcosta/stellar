
<script setup>

import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

import { useUserStore } from '@/stores/user.store';
import ModalUpdatePassword from './ModalUpdatePassword.vue'; // Adjust the path as needed



const userStore = useUserStore();

const route = useRoute();

userStore.getById(route.params.id)

const { 
  showPreloaderForm,
  showInputSenha,
  dataForm,
  isSubmitting,
  erros,
  showErros,
} = storeToRefs(userStore);



</script>

<template>
  <div class="col-md-6">
    <div class="alert alert-danger alert-dismissible fade" :class="{'show' : showErros, 'd-none' : !showErros }"  role="alert">
      <ListaErros :lista="erros"  />
      <button @click="{ showErros = false; }" type="button" class="btn-close" aria-label="Close"></button>
    </div>
    <PreLoader v-if="showPreloaderForm" />
    <form v-if="!showPreloaderForm" autocomplete="off" @submit.prevent="userStore.save">
      <CardBase titulo="Formulário">
        <div class="row">
          <div class="col-md-6 mb-2">
            <label class="form-label">Nome:</label>
            <input type="text" class="form-control" v-model="dataForm.nome">
          </div>
          <div class="col-md-6 mb-2">
            <label class="form-label">Email:</label>
            <input type="email" class="form-control" v-model="dataForm.email">
          </div>
          <div v-if="showInputSenha" class="col-md-6 mb-2">
            <label class="form-label">Senha:</label>
            <input type="password" class="form-control" v-model="dataForm.password">
          </div>
          <div class="col-md-12 d-flex justify-content-between">
            <button type="submit" class="btn btn-primary"  :disabled="isSubmitting">
              <TextoBtn texto="Salvar" :submitting="isSubmitting" />
            </button>
            <button v-if="!showInputSenha" type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
              Alterar senha
            </button>
          </div>
        </div>
      </CardBase>
    </form>
  </div>
  <ModalUpdatePassword />
</template>

<style scoped>
</style>

