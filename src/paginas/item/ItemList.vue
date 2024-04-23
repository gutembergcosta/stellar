<template>
	<SideBar/>
  <div class="main" id="main">
    <TopoDefault/>
    <div class="container area-admin">
      <TituloPage/>
      <div class="row">
        <div class="col-md-12">
          <CardBase titulo="Lista">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th style="width: 130px" scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>
                    <button class="btn btn-sm btn-primary me-2">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jane Smith</td>
                  <td>jane@example.com</td>
                  <td>
                    <button class="btn btn-sm btn-primary me-2">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Michael Johnson</td>
                  <td>michael@example.com</td>
                  <td>
                    <button class="btn btn-sm btn-primary me-2">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBase>        
        </div>
      </div>
    </div>
  </div>
  <FooterPage/>
</template>
  
<script>

</script>
  
<style scoped>

</style>
  