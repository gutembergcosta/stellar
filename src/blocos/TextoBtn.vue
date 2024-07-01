<script>
	export default {
		props: {
			texto: {
				type: String,
				required: true
			},
			submitting: {
				type: Boolean,
				required: true
			},
		},
	}
</script>
<template>
  <span v-if="submitting">
    <img class="filter" :src="require('@/assets/img/loading.svg')" alt="Description">
    Aguarde...
  </span>
  <span v-if="!submitting">
    {{ texto }}
  </span>
</template>

<style scoped>
.filter{
  filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(95deg) brightness(106%) contrast(101%);
}
</style>