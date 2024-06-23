
<script setup>

import { storeToRefs } from 'pinia';
import { useItemStore } from '@/stores/item.store';

const itemStore = useItemStore();
const { lista } = storeToRefs(itemStore);

itemStore.listar();

</script>

<template>
  <SideBar />
  <div class="main" id="main">
    <TopoDefault />
    <div class="container area-admin">
      <TituloPage nome="Lista de usuários" />
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <a href="novo" class="btn btn-primary">Adicionar Novo</a>
          </div>
          <PreLoader v-if="itemStore.showPreloader" />
          <CardBase v-if="!itemStore.showPreloader" titulo="Lista">
            
            <table class="table" if="lista.length">
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
                    <button @click.prevent=itemStore.deletar(item.id) class="btn btn-sm btn-danger">Delete</button>
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


<style scoped></style>@/services/DataModelService