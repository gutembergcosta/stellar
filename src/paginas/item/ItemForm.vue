<template>
	<SideBar/>
  <div class="main" id="main">
    <TopoDefault/>
    <div class="container area-admin">
      <TituloPage/>
      <div class="row">
        <div class="col-md-9">
          <AlertaErros v-if="showErros" :errosLista="erros" scrollToTop='s' />
          <CardBase titulo="Formulário">
              <form>
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="pwd" class="form-label">Categoria:</label>
                    <select class="form-select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label">Email:</label>
                    <input type="email" class="form-control" placeholder="Enter password" name="pswd">
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
                    <label for="comment">Comments:</label>
                    <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                  </div>
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
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal 02</button>
          <ModalBase myprop="teste"/>
        </div>
      </div>
    </div>
  </div>
  <FooterPage/>
</template>
  showErros.value = false;
  if (response.status === 422) {
    erros.value = response.data.errors;
    showErros.value = true;
  }

</script>
  
<style scoped>

</style>
  