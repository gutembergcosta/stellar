import { defineStore } from 'pinia';

import { uniqid } from '@/helpers/uniqid.js';
import { DataModelService } from "@/services/DataModelService";
import router from "@/router";

const dataModelService = new DataModelService();

const baseUrl = 'users';

export const useUserStore = defineStore({
  id: 'users',
  state: () => ({
    showPreloader: false,
    lista: [],
    erros : [],
    showErros : false,
    dataForm : {
      ref: uniqid(),
      nome: null,
      password: null,
      email: null,
      nova_senha: null,
    },
    dataSenha: { 
      userId: null,
      nova_senha : null
    }
  }),
  actions:{
    async listar(){
      this.showPreloader = true;
      this.lista = await dataModelService.get(baseUrl);
      this.showPreloader = false;
    },
    async deletar(id){
      if (confirm("Deseja realmente excluir este item!") == true) {
        await dataModelService.delete(`${baseUrl}/${id}`);
        this.listar()
        alert('Item excluído com sucesso');
      }
    },
    async getById(id) {
      if (id) {
        try {
          this.showPreloader = true;
          this.dataForm = await dataModelService.get(`${baseUrl}/${id}`);
          this.showPreloader = false;
          this.render = true;
        } catch (error) {
          alert('erro getById()')
        }
      }
    },

    async save(){

      this.showPreloader = true;
      const dataFormId = this.dataForm.id ?? null;

      this.showErros = false;
      
      const response = (dataFormId) ? await dataModelService.put(`${baseUrl}/${dataFormId}`, this.dataForm) : await dataModelService.post(`${baseUrl}`, this.dataForm);
      console.log(response.status)
    
      if (response.status === 422) {
        this.erros = response.data.errors;
        this.showErros = true;
      }
      if (response.status === 200 ) {
        router.push({ name: "ItemList" });
      }
      if (response.status === 500 ) {
        alert('Falha ao salvar registro!')
      }
      this.showPreloader = false;
    },

    async savePassword(){
   
      const dataFormId = this.dataForm.id;

      const urlUpdate =  `acesso/${dataFormId}` ;

      this.showErrosUpdatePassword = false;
      
      const response = await dataModelService.put(urlUpdate, this.dataSenha);
      
      console.log(response.status)
    
      if (response.status === 422) {
        this.showErrosUpdatePassword = true;
        this.errosUpdatePassword = response.data.errors;
      }
      if (response.status === 200 ) {
        alert('Senha alterada com sucesso');
        this.closeModal();
        this.dataSenha = { 
          userId: null,
          nova_senha : null
        }
      }
      if (response.status === 500 ) {
        alert('Falha ao salvar registro!')
      }
    },

    novo(){
      router.push({ name: "UserAdd" });
    },

    closeModal() {
      const modalElement = document.getElementById('closeModalPassword');
      modalElement.click();
    }
  },
  
});