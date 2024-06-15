<template>
  <div class="main">
    <div class="mx-auto" style="width: 350px; margin-top: 100px;">
      <CardBase titulo="Login">
        <form @submit.prevent="sendForm">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input v-model="dataForm.email" type="email" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="dataForm.password" type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-primary w-100">Entrar</button>
          <div class="sign-up mt-4 d-none">
            Don't have an account? <a href="#">Create One</a>
          </div>
        </form>
      </CardBase>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DataModelService } from "@/services/DataModelService";
import router from "@/router";

const dataModelService = new DataModelService();
const showErros = ref(false);
const dataForm = ref({
  email: null,
  password: null,
});

/* Funções */

const sendForm = async () => {

  showErros.value = false;
  const response = await dataModelService.post(`login`, dataForm.value);
  console.log(response.status)

  if (response.status === 422) {
    alert('Login inválido')
  }

  if (response.status === 200 && response.data != 'Unauthorised') {

    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('userData', response.data.userData);

    router.push('/item/lista');

  } else {
    alert('Login inválido')
  }

  if (response.status === 500) {
    alert('Falha ao salvar registro!')
  }

};

</script>

<style scoped></style>