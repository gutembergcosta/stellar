
<script setup>

import {defineProps, computed,}  from 'vue';

const props = defineProps({
  errosLista: Object,
  scrollToTop: String,
  showErros: Boolean,
});





if(props.scrollToTop == 's'){
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

const errorMessages = computed(() => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  return Object.values(props.errosLista).map(arr => arr[0]);
});

</script>

<template>
	<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <ul v-if="showErros" class="erros">
      <li v-for="(item, i) in errorMessages" :key="i">
        {{ item }}
      </li>
    </ul>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</template>


<style scoped>	
.erros{
  margin: 0;
  padding-left: 15px;
}
</style>