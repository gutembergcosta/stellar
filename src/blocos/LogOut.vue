
<script setup>
  import { useAuthStore } from '@/stores/auth.store';
  const authStore = useAuthStore();
</script>

<template>
  <button class="btn" @click="authStore.sair">
    <i class="fa-solid fa-arrow-right-from-bracket"></i>
  </button>
</template>



<style scoped>


</style>

