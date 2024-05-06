<template>
  <SideBar />
  <div class="main" id="main">
    <TopoDefault />
    <div class="container area-admin">
      <TituloPage />
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <a href="novo" class="btn btn-primary">Adicionar Novo</a>
          </div>
          <CardBase titulo="Lista">
            
            <table class="table" if="lista.length > 0">
              <thead>
                <tr>
                  <th style="width: 30px" >ID</th>
                  <th scope="col">Nome</th>
                  <th style="width: 50px" scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in lista" :key="index">
                  <th scope="row">{{ item.id }}</th>
                  <td> <a :href="'editar/' + item.id">{{ item.nome }}</a> </td>
                  <td>
                    <button @click.prevent=deletar(item.id) class="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBase>
        </div>
      </div>
    </div>
  </div>
  <FooterPage />
</template>

<!--

  
-->

<script setup>
import { ref, onMounted } from 'vue';

import { DataModelService } from "@/services/DataModelService";


const dataModelService = new DataModelService();

const lista = ref([]);
const urlDelete = 'item/delete';

const deletar = async(id) => {
  if (confirm("Deseja realmente excluir este item!") == true) {
    await dataModelService.delete(`/${urlDelete}/${id}`);
    alert('Item excluído com sucesso');
    listar();
  }
};

const listar = async () => {
  lista.value = await dataModelService.get('item/list');
}

onMounted(async () => {
  listar();
});
</script>

<style scoped></style>@/services/DataModelService