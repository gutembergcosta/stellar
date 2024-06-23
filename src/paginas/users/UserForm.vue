

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { DataModelService } from "@/services/DataModelService";

const dataModelService = new DataModelService();

import { uniqid } from '@/helpers/uniqid.js';

const route = useRoute();
const router = useRouter();

/* Dados cadastrais */

const erros = ref([]);
const showErros = ref(false);
const showPreloader = ref(true);

const dataForm = ref({
  ref: uniqid(),
  nome: null,
  password: null,
  email: null,
});





const itemId = route.params.id;

/* requests */

onMounted(async () => {
  if (itemId) {
    dataForm.value = await dataModelService.get(`item/${itemId}`);
    showPreloader.value = false;
  }

});

/* Funções */

const sendForm = async () => {

  showErros.value = false;
  const response = (itemId) ? await dataModelService.put(`users/${itemId}`, dataForm.value) : await dataModelService.post(`users`, dataForm.value);
  console.log(response.status)

  if (response.status === 422) {
    erros.value = response.data.errors;
    showErros.value = true;
  }

  if (response.status === 200 ) {
    alert(response.data);
    router.push({ name: "Usuários" });
  }

  if (response.status === 500 ) {
    alert('Falha ao salvar registro!')
  }

};

</script>

<template>
  <SideBar />
  <div class="main" id="main">
    <TopoDefault />
    <div class="container area-admin">
      <TituloPage />
      <div class="row">
        <div class="col-md-8">
          <AlertaErros v-if="showErros" :errosLista="erros" scrollToTop='s' />
          <PreLoader v-if="showPreloader" />
          <form autocomplete="off" @submit.prevent="sendForm" v-if="!showPreloader">
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
                <div class="col-md-6 mb-3">
                  <label class="form-label">Password:</label>
                  <input type="text" class="form-control" v-model="dataForm.password" >
                </div>
                <div class="col-md-12">
                  <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
              </div>
            </CardBase>
          </form>
        </div>
      </div>
    </div>
  </div>
  <FooterPage />
</template>


<style scoped></style>