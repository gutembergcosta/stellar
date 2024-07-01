
<script setup>

import { useUserStore } from '@/stores/user.store';
import { storeToRefs } from "pinia";

const userStore = useUserStore();

const { 
  dataForm,
  isSubmittingSenha,
} = storeToRefs(userStore);


</script>

<template>
	<!-- Button trigger modal -->
	<div  class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" style="max-width: 300px;">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Atualizar senha</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
          <AlertaErros v-if="userStore.showErrosUpdatePassword" :errosLista="userStore.errosUpdatePassword" scrollToTop='s' />
					<form autocomplete="off" @submit.prevent v-if="!userStore.showPreloader">
            <div class="row">
              <div class="col-md-12">
                <label class="form-label">Nova senha:</label>
                <input type="text" class="form-control"  v-model="userStore.dataSenha.nova_senha" >
              </div>
            </div>
          </form>
				</div>
				<div class="modal-footer">
					<button id="closeModalPassword" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="submit" class="btn btn-primary" @click="userStore.savePassword(dataForm.id)" :disabled="isSubmittingSenha">
            <TextoBtn texto="Salvar" :submitting="isSubmittingSenha" />
          </button>
        </div>
			</div>
		</div>
	</div>
<!-- Modal -->
	
</template>


<style scoped>	
</style>