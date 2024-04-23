<template>
  <div class="main" >
    <div class="mx-auto" style="width: 350px; margin-top: 100px;">
      <CardBase titulo="Login">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
            <div class="sign-up mt-4">
                Don't have an account? <a href="#">Create One</a>
            </div>
        </form>
      </CardBase>        
    </div>
  </div>
</template>
  
<script>

</script>
  
<style scoped>

</style>
  