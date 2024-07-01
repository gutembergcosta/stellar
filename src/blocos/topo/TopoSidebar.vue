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
	}

  .logo{
    width: 130px;
    height: fit-content;
  }

  @media screen and (min-width: 900px) {
    .topo{
      height: 60px;
      width: 250px;
      
    }
  }
  @media screen and (max-width: 900px) {
    .topo{
      height: 50px;
      width: 200px;
      
    }
    .logo{
      position: relative;
      right: 30px;
    }
  }
</style>