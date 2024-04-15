<template>
	<SideBar/>
  <div class="main" id="main">
    <TopoDefault/>
    <div class="container area-admin">
      <TituloPage/>
      <div class="row">
        <div class="col-md-9">
          <CardBase titulo="Formulário">
            <div class="row">
              <div class="col-md-4 mb-3">
                <VaInput v-model="nome" placeholder="Default" label="Nome"/>
              </div>
              <div class="col-md-4 mb-3">
                <VaInput v-model="info" placeholder="Default" label="Info" />
              </div>
              <div class="col-md-4 mb-3">
                <VaSelect v-model="value" label="Categoria" :options="options" />
              </div>
              <div class="col-md-12 mt-2">
                <VaButton> Salvar </VaButton>
              </div>
            </div> 
          </CardBase>        
          <UploadGaleria tipo="galeria" tkn="tkn" infoTxt="Galeria"/>
        </div>
        <div class="col-md-3">
          <UploadUnico tipo="destaque" tkn="tkn" infoTxt="Imagem destaque" />
        </div>
      </div>
    </div>
  </div>
  <FooterPage/>
</template>
  
<script>
  

export default {
  data() {
    const options = [
      {
        text: "First",
        textBy: "First text by",
        value: "1",
        valueBy: "first",
      },
      {
        text: "Second",
        textBy: "Second text by",
        value: "2",
        valueBy: "second",
      },
      {
        text: "Third",
        textBy: "Third text by",
        value: "3",
        valueBy: "third",
      },
    ];
    return {
      nome: "",
      info: "",
      value: options[0],
      options,
      
    };
  },
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
  
<style scoped>
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
.linha-btn{
  padding: 0.75rem;
}
</style>
  