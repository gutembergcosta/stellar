<template>
  <SideBar />
  <div class="main" id="main">
    <TopoDefault />
    <div class="container area-admin">
      <TituloPage />
      <div class="row">
        <div class="col-md-9">
          <AlertaErros v-if="showErros" :errosLista="erros" scrollToTop='s' />
          <CardBase titulo="Formulário">
            <form autocomplete="off" @submit.prevent="sendForm">
              <div class="row">
                
                <div class="col-md-4 mb-3">
                  <label class="form-label">Nome:</label>
                  <input type="text" class="form-control" v-model="dataForm.nome" placeholder="Enter email">
                </div>
                <div class="col-md-4 mb-3">
                  <label class="form-label">Info:</label>
                  <input type="text" class="form-control" v-model="dataForm.info">
                </div>
                <div class="col-md-4 mb-3">
                  <label for="pwd" class="form-label">Categoria:</label>
                  <select class="form-select" v-model="dataForm.categoria_id">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div class="col-md-4 mb-3">
                  <label class="form-label">Email:</label>
                  <input type="email" class="form-control" v-model="dataForm.email">
                </div>


                <div class="col-md-12 mb-3">
                  <div class="form-check  mb-3">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="remember"> Remember me
                    </label>
                  </div>
                  <div class="form-check  mb-3">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="remember"> Remember me
                    </label>
                  </div>
                  <div class="form-check  mb-3">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="remember"> Remember me
                    </label>
                  </div>
                </div>

                <div class="col-md-12 mb-3">
                  <label for="comment">Texto:</label>
                  <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                </div>
                <div class="col-md-12">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </CardBase>
          <UploadGaleria v-if="render" tipo="galeria" :tkn="dataForm.ref" infoTxt="Galeria" />
        </div>
        <div class="col-md-3">
          <UploadUnico v-if="render" tipo="destaque" :tkn="dataForm.ref" infoTxt="Imagem destaque" />
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch
            demo modal</button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch
            demo modal 02</button>
          <ModalBase myprop="teste" />
        </div>
      </div>
    </div>
  </div>
  <FooterPage />
</template>


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
const render = ref(false);
const dataForm = ref({
  ref: uniqid(),
  nome: null,
  categoria_id: 0,
  info: null,
  email: null,
  texto: null,
});

const itemId = route.params.id;

/* requests */

onMounted(async () => {
  if (itemId) {
    dataForm.value = await dataModelService.get(`item/${itemId}`);
    console.log(dataForm.value)
  }
  render.value = true;
});

/* Funções */

const sendForm = async () => {

  showErros.value = false;
  const response = (itemId) ? await dataModelService.put(`item/save/${itemId}`, dataForm.value) : await dataModelService.post(`item/save`, dataForm.value);
  console.log(response.status)

  if (response.status === 422) {
    erros.value = response.data.errors;
    showErros.value = true;
  }

  if (response.status === 200 ) {
    alert(response.data);
    router.push({ name: "Itens" });
  }

  if (response.status === 500 ) {
    alert('Falha ao salvar registro!')
  }

};

</script>

<style scoped></style>