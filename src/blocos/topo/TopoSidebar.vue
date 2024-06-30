<script setup>

import { ref } from 'vue'
  const logoImg = ref(require('@/assets/img/logo-dark.png'))
</script>

<template>
	<div class="d-flex justify-content-center align-items-center topo ">
    <img :src="logoImg" class="logo d-block" />
	</div>
</template>



<style scoped>
	.topo{
		background: white;
		height: 60px;
    width: 250px;
    
	}

  .logo{
    width: 150px;
    height: fit-content;
  }
</style>