
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();


const sair = () => {
  var result = confirm("Deseja sair do sistema?");
    if (result) {

    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');

    router.push('/login');
  }

};

</script>

<template>
  <button class="btn" @click="sair">
    <i class="fa-solid fa-arrow-right-from-bracket"></i>
  </button>
</template>



<style scoped>


</style>

