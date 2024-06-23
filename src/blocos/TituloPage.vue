<template>
	<div class="row">
		<div class="col-md-12 py-3">
			<h1 >{{ nome }}</h1>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			nome: {
				type: String,
				required: false
			},
		},
	}
</script>
