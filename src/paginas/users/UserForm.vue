

<script setup>
import { useRoute } from "vue-router";
import ModalUpdatePassword from './ModalUpdatePassword.vue'; // Adjust the path as needed
import { storeToRefs } from "pinia";
import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();

const { 
  erros, 
  showPreloader,
  dataForm,
} = storeToRefs(userStore);

const route = useRoute();

userStore.getById(route.params.id)

</script>

<template>
  <SideBar />
  <div class="main" id="main">
    <TopoDefault />
    <div class="container area-admin">
      <TituloPage :nome="tituloForm" />
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <AlertaErros v-if="showErros" :errosLista="erros" scrollToTop='s' />
          <PreLoader v-if="showPreloader" />
          <form autocomplete="off" @submit.prevent="save" v-if="!showPreloader">
            <CardBase titulo="Formulário">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Nome:</label>
                  <input type="text" class="form-control" v-model="dataForm.nome" >
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Email:</label>
                  <input type="email" class="form-control" v-model="dataForm.email">
                </div>
                <div class="col-md-6 mb-3" v-if="tipoForm == 'add'">
                  <label class="form-label">Password:</label>
                  <input type="text" class="form-control" v-model="dataForm.password" >
                </div>
                <div class="col-md-12 d-flex justify-content-between">
                  <button type="submit" class="btn btn-primary">Salvar</button>
                  <button v-if="route.params.id" type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
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