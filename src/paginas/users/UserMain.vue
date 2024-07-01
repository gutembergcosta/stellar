
<script setup>

import UserForm from './UserForm.vue'
import UserList from './UserList.vue'
import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();

</script>

<template>
  <TopoDefault />
  <SideBar />
  <div class="main" id="main">
    
    <div class="container area-admin">
      <TituloPage nome="Lista de itens" />
      <div class="row">
        <div class="mb-3 flex">
          <a @click="userStore.novo" class="btn btn-primary">Adicionar Novo</a>
        </div>
        <UserForm/>
        <UserList/>
      </div>
    </div>
  </div>
  <FooterPage />
</template>

<!--

  
-->


<style scoped></style>@/services/DataModelService