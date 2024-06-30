
<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useItemStore } from '@/stores/item.store';

const itemStore = useItemStore();

const route = useRoute();

const dataForm02 = ref({
  data: '10/01/2022',
  telefone: '10/01/2022',
  hora: '10:00',
  preco: 'R$ 123,45',
  texto: '<h1>oi</h1>',
  number: {
    decimal: ',',
    separator: '.',
    prefix: 'R$ ',
    precision: 2,
  },
});

const editor = ClassicEditor;
const editorConfig = {

};

itemStore.getById(route.params.id)

const { 
  showPreloader,
  dataForm,
  isSubmitting,
  erros,
  render,
  showErros,
} = storeToRefs(itemStore);

alert(dataForm.tkn)

</script>

<template>
  <TopoDefault />
  <SideBar />
  <div class="main" id="main">
    <div class="container area-admin">
      <TituloPage nome="Título" />
      <div class="row">
        <div class="col-md-9">
          <div class="alert alert-danger alert-dismissible fade" :class="{'show' : showErros, 'd-none' : !showErros }"  role="alert">
            <ListaErros :lista="erros"  />
            <button @click="{ showErros = false; }" type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <PreLoader v-if="showPreloader" />
          <form v-if="!showPreloader" autocomplete="off" @submit.prevent="itemStore.save">
            <CardBase titulo="Formulário">
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
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="remember"> Remember me
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="remember"> Remember me
                    </label>
                  </div>
                  <div class="form-check">
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
                  <button type="submit" class="btn btn-primary"  :disabled="isSubmitting">
                    <TextoBtn texto="Salvar" :submitting="isSubmitting" />
                  
                  </button>
                </div>
              </div>
            </CardBase>
            <CardBase titulo="Formulário">
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label class="form-label">Data:</label>
                  <input type="date" class="form-control" v-model="dataForm02.data" placeholder="Enter email">
                </div>
                <div class="col-md-4 mb-3">
                  <label class="form-label">Hora:</label>
                  <MaskInput class="form-control"  v-model="dataForm02.hora" mask="##:##" />
                </div>
                <div class="col-md-4 mb-3">
                  <label class="form-label">Telefone:</label>
                  <MaskInput class="form-control"  v-model="dataForm02.telefone" mask="(##) #####-####" />
                </div>
                <div class="col-md-4 mb-3">
                  <label class="form-label">Telefone:</label>
                  <VueNumberFormat class="form-control"
                    v-model:value="dataForm02.preco" 
                    :options="{ precision: 2, prefix: 'R$ ', isInteger: true }"
                  ></VueNumberFormat>
                </div>
                <EditorTexto nameInput="texto"
                texto="dataForm.texto" /> 
                <div class="col-md-12 mb-3">
                  <label class="form-label">ckeditor:</label>
                  <ckeditor :editor="editor" v-model="dataForm.texto" :config="editorConfig"></ckeditor>
                </div>
              </div>
            </CardBase>
            <UploadGaleria v-if="render" tipo="galeria"  :tkn="dataForm.ref" infoTxt="Galeria" />
          </form>
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



<style scoped>


</style>

