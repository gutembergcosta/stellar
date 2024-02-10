<template>
  <div class="container-scroller">
		<TopoDefault/>
		<div class="container-fluid page-body-wrapper">
			<SideBar/>
					<div class="main-panel">
							<div class="content-wrapper">
								<TitularPage/>
			<form class="forms-sample">
				<div class="row">
					<div class="col-9 grid-margin stretch-card">
						<div class="card">
							<div class="card-body">
								<h4 class="card-title">Formulário base</h4>
								<p class="card-description">Instrução adicional </p>
								
									<div class="form-group">
										<label for="exampleInputName1">Name</label>
										<input type="text" class="form-control" id="exampleInputName1" placeholder="Name">
									</div>
									<div class="form-group">
										<label for="exampleInputEmail3">Email address</label>
										<input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email">
									</div>
									<div class="form-group">
										<label for="exampleInputPassword4">Password</label>
										<input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password">
									</div>
									<div class="form-group">
										<label for="exampleSelectGender">Gender</label>
										<select class="form-control" id="exampleSelectGender">
											<option>Male</option>
											<option>Female</option>
										</select>
									</div>
									<div class="form-group">
										<label>File upload</label>
										<input type="file" name="img[]" class="file-upload-default">
										<div class="input-group col-xs-12">
											<input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image">
											<span class="input-group-append">
											<button class="file-upload-browse btn btn-primary" type="button">Upload</button>
											</span>
										</div>
									</div>
									<div class="form-group">
										<label for="exampleInputCity1">City</label>
										<input type="text" class="form-control" id="exampleInputCity1" placeholder="Location">
									</div>
									<div class="form-group">
										<label for="exampleTextarea1">Textarea</label>
										<textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
									</div>
									<button type="submit" class="btn btn-primary mr-2">Submit</button>
									<button class="btn btn-light">Cancel</button>
								
							</div>
						</div>
					</div>
					<div class="col-3 grid-margin ">
						<div class="card">
							<div class="card-body">
								<h4 class="card-title">Formulário base</h4>
								<p class="card-description">Instrução adicional </p>
								<form class="forms-sample">
									<div class="form-group">
										<label for="exampleInputName1">Name</label>
										<input type="text" class="form-control" id="exampleInputName1" placeholder="Name">
									</div>
									
									<button type="submit" class="btn btn-primary mr-2">Submit</button>
									<button class="btn btn-light">Cancel</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</form>
							</div>
							<FooterPage/>
							
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
  