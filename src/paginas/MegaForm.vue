<template>
	<SideBar/>
  <div class="main" id="main">
    <TopoDefault/>
    <div class="container area-admin">
      <TituloPage/>
      <div class="row">
        <div class="col-md-9">
          <CardBase titulo="Formulário">
              <form action="/action_page.php">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                  </div>
                  <div class="col-md-12 mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                  </div>
                  <div class="col-md-12 mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <div class="form-check  mb-3">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember"> Remember me
                      </label>
                    </div>
                    <div class="form-check  mb-3">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember"> Remember me
                      </label>
                    </div>
                    <div class="form-check  mb-3">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember"> Remember me
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <div class="form-check  mb-3">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="remember"> Remember me
                      </label>
                    </div>
                    <div class="form-check  mb-3">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="remember"> Remember me
                      </label>
                    </div>
                    <div class="form-check  mb-3">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="remember"> Remember me
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <label for="pwd" class="form-label">Categoria:</label>
                    <select class="form-select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div class="col-md-12 mb-3">
                    <label for="comment">Comments:</label>
                    <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                  </div>
                  <div class="col-md-12 mb-3"></div>
                  <div class="col-md-12 mb-3"></div>
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </div> 
              </form>
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
  