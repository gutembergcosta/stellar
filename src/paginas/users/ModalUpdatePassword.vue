
<script setup>

import {defineProps}  from 'vue';
import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();

const props = defineProps({
  userId: Number   
})

userStore.getById(props.userId,'edit')

const saveSenha = () => {
  userStore.dataSenha.userId = props.userId
  userStore.savePassword();
}

</script>

<template>
	<!-- Button trigger modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="submit" class="btn btn-primary" @click="saveSenha" >Salvar nova senha</button>
				</div>
			</div>
		</div>
	</div>
<!-- Modal -->
	
</template>


<style scoped>	
</style>