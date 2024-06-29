
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

<template>
	<div class="card py-4">
		<div class="card-body">
      <div class="">
          <img class="logo d-block mx-auto pt-4" src="@/assets/img/logo-dark.png">

      </div>
      <p class="fs-5 text-center py-3">Painel de controle</p>
      <slot></slot>
    </div>
	</div>
</template>

<style scoped>
.logo{
  width: 220px;
}

.card{
  border-radius: 0;
  border-color: white;

}
</style>
  
