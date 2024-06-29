<script setup>

import { ref } from 'vue'
  const logoImg = ref(require('@/assets/img/logo-dark.png'))
</script>

<template>
<div class="w-100">
	<div class="topo d-flex justify-content-center\">
    <img :src="logoImg" class="logo d-block mx-auto" />
	</div>
</div>   
</template>



<style scoped>
	.topo{
		background: white;
		height: 60px
	}

  .logo{width: 150px;}
</style>