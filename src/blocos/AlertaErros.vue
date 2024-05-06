<template>
	<!-- Button trigger modal -->
	<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <ul class="erros">
      <li v-for="(item, i) in errorMessages" :key="i">
        {{ item[0] }}
      </li>
    </ul>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
<!-- Modal -->
	
</template>

<script setup>

import {defineProps, ref,onMounted}  from 'vue';

const errorMessages = ref([]);
const scrollTop = ref(false);

const props = defineProps({
  errosLista: Object,
  scrollToTop: String,
})

onMounted(async () => {
  errorMessages.value = props.errosLista;
  scrollTop.value = props.scrollToTop;
  if(scrollTop.value == 's'){
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }else{
    alert('falso')
  }
});

</script>

<style scoped>	
.erros{
  margin: 0;
  padding-left: 15px;
}
</style>