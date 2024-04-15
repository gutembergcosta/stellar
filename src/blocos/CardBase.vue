<template>
	<div class="card mb-4">
		<div class="card-header">{{titulo}}</div>
		<div class="card-body"><slot></slot></div>
	</div>
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
