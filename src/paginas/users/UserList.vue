
<script setup>

import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();
const { showPreloaderTabela, lista } = storeToRefs(userStore);

userStore.listar();

</script>

<template>
    
  <div class="col-md-6">
    <PreLoader v-if="showPreloaderTabela" />
    <CardBase v-if="!showPreloaderTabela" titulo="Lista">
      <table class="table tabela-base" if="lista.length">
        <thead>
          <tr>
            <th style="width: 30px" >ID</th>
            <th scope="col">Nome</th>
            <th style="width: 50px" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in lista" :key="index">
            <th scope="row">{{ user.id }}</th>
            <td>
              <a @click="userStore.redirecionar(user.id)" >{{ user.nome }}</a> 
            </td>
            <td>
              <button @click.prevent=userStore.deletar(user.id) class="btn btn-sm btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </CardBase>
  </div>
     
</template>

<!--

  
-->


<style scoped></style>@/services/DataModelService