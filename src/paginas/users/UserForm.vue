

<script setup>
import { useRoute } from "vue-router";
import ModalUpdatePassword from './ModalUpdatePassword.vue'; // Adjust the path as needed

import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();

const route = useRoute();

userStore.getById(route.params.id)

userStore.action = 'password'

</script>

<template>
  <SideBar />
  <div class="main" id="main">
    <TopoDefault />
    <div class="container area-admin">
      <TituloPage :nome="userStore.tituloForm" />
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <AlertaErros v-if="userStore.showErros" :errosLista="userStore.erros" scrollToTop='s' />
          <PreLoader v-if="userStore.showPreloader" />
          <form autocomplete="off" @submit.prevent="userStore.save" v-if="!userStore.showPreloader">
            <CardBase titulo="Formulário">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Nome:</label>
                  <input type="text" class="form-control" v-model="userStore.dataForm.nome" >
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Email:</label>
                  <input type="email" class="form-control" v-model="userStore.dataForm.email">
                </div>
                <div class="col-md-6 mb-3" v-if="userStore.tipoForm == 'add'">
                  <label class="form-label">Password:</label>
                  <input type="text" class="form-control" v-model="userStore.dataForm.password" >
                </div>
                <div class="col-md-12 d-flex justify-content-between">
                  <button type="submit" class="btn btn-primary">Salvar</button>
                  <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Alterar senha</button>
                </div>
              </div>
            </CardBase>
          </form>
          <ModalUpdatePassword :userId="route.params.id" />
        </div>
      </div>
    </div>
  </div>
  <FooterPage />
</template>


<style scoped></style>