
<script setup>

import {defineProps}  from 'vue';



const props = defineProps({
  lista: Object,
});


</script>

<template>
  <ul class="erros">
    <li v-for="(item, i) in props.lista" :key="i">
      {{ item }}
    </li>
  </ul>
</template>



<style scoped>	
.erros{
  margin: 0;
  padding-left: 15px;
}
</style>