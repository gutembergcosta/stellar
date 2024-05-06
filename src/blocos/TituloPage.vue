<template>
	<div class="row">
		<div class="col-md-12 py-3">
			<h1 >{{ route.name }}</h1>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();


</script>