<template>
	<div class="card mb-4">
		<div class="card-header bg-white">
      <h3 class="fs-5 mb-0">
        {{titulo}}
      </h3>
    </div>
		<div class="card-body"><slot></slot></div>
	</div>
</template>

<style lang="scss" scoped >
.card{

  border-radius: 3px;
  background-color: #fff;
  margin-bottom: 30px;
  box-shadow: 0 1px 1px rgba(0,0,0,.05);
  border: none;

  .card-header{
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
  }
  
}


</style>
  
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
