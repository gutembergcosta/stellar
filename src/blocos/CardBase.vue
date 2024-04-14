<template>

  <VaCard class="card-base mb-4">
    <VaCardTitle class="titulo mb-4">{{titulo}}</VaCardTitle>
    <VaCardContent>
			<slot></slot>
    </VaCardContent>
  </VaCard>          
          
</template>
  
<script>
	export default {
		props: {
			titulo: {
				type: String,
				required: true
			},
		},
	}
</script>

<style scoped>
.card-base{

}

.titulo{
	
}
</style>
  
  