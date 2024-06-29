<script>
	export default {
		props: {
			texto: {
				type: String,
				required: true
			},
		},
	}
</script>
<template>
  <span>{{ texto }}</span>
</template>