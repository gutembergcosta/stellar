
<script setup>

  import { useAuthStore } from '@/stores/auth.store';

  const authStore = useAuthStore();

</script>
<template>
  <div class="main">
    <div class="mx-auto" style="width: 350px; margin-top: 100px;">
      <CardLogin titulo="Login">
        <form @submit.prevent="authStore.login">
          <div class="mb-3">
            <input v-model="authStore.dataForm.email" type="email" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <input v-model="authStore.dataForm.password" type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-primary w-100">Entrar</button>
          <div class="sign-up mt-4">
            Don't have an account? <a href="#">Create One</a>
          </div>
        </form>
      </CardLogin>
    </div>
  </div>
</template>


<style scoped></style>