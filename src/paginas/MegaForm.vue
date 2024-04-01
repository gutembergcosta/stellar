<template>
	<SideBar/>
	<div class="main" id="main">
		<TopoDefault/>

    <div class="container">
      <div class="row">
        <div class="col-md-6">col-md-6</div>
        <div class="col-md-6">col-md-6</div>
      </div>
    </div>

	</div>  
</template>
  
  <script>
  

export default {
  methods: {
    alterarTexto() {
      // Acesse o elemento pelo id
      const elemento = document.getElementById('elementoParaManipular');

      // Faça a manipulação que deseja
      if (elemento) {
        elemento.textContent = 'Novo Texto!';
      }
    }
  }
}
</script>
  
<style>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc; 
}

.panel {
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
}
</style>
  