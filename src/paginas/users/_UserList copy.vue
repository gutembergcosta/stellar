
<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();
const { lista } = storeToRefs(userStore);

userStore.listar();

</script>

<template>
  <SideBar />
  <div class="main" id="main">
    <TopoDefault />
    <div class="container area-admin">
      <TituloPage :nome="userStore.tituloPagina" />
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <a @click="userStore.novo" class="btn btn-primary">Adicionar Novo</a>
          </div>
          <CardBase titulo="Usuários">
            <PreLoader v-if="userStore.showPreloader" />
            <table v-if="!userStore.showPreloader" class="table" if="lista.length > 0">
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
                  <td> <a :href="'editar/' + user.id">{{ user.nome }}</a> </td>
                  <td>
                    <button @click.prevent=deletar(user.id) class="btn btn-sm btn-danger">Delete</button>
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