import { defineStore } from 'pinia';

import { uniqid } from '@/helpers/uniqid.js';

import { DataModelService } from "@/services/DataModelService";

const dataModelService = new DataModelService();

const baseUrl = 'users';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    showPreloaderForm: false,
    showPreloaderTabela: false,
    showInputSenha: true,
    lista: [],
    erros : [],
    showErros : false,
    isSubmitting : false,
    isSubmittingSenha : false,
    picked: null,
    dataForm : {
      ref: uniqid(),
      nome: null,
      email: null,
      password: null,
    },
    dataSenha: { 
      nova_senha : null
    }
  }),
  actions:{
    async listar(){
      this.showPreloaderTabela = true;
      this.lista = await dataModelService.get(baseUrl);
      this.showPreloaderTabela = false;
    },
    async deletar(id){
      if (confirm("Deseja realmente excluir este user!") == true) {
        await dataModelService.delete(`${baseUrl}/${id}`);
        this.listar()
        alert('User excluído com sucesso');
      }
    },
    async getById(id) {
      if (id) {
        try {
          this.showPreloaderForm = true;
          this.dataForm = await dataModelService.get(`${baseUrl}/${id}`);
          this.showPreloaderForm = false;
          this.showInputSenha = false;
          this.limpaFormSenha();          
        } catch (error) {
          alert('erro getById()')
        }
      }
    },
    async save(){
      this.isSubmitting = true;
      const dataFormId = this.dataForm.id ?? null;

      this.showErros = false;
      
      const response = (dataFormId) ? await dataModelService.put(`${baseUrl}/${dataFormId}?tipo=full`, this.dataForm) : await dataModelService.post(`${baseUrl}`, this.dataForm);
      console.log(response.status)
    
      if (response.status === 422) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        this.erros = Object.values(response.data.errors).map(arr => arr[0]);
        this.showErros = true;
      }
      if (response.status === 200 ) {
        alert('Usuário salvo com sucesso');
        this.listar();
      }
      if (response.status === 500 ) {
        alert('Falha ao salvar registro!')
      }
      this.isSubmitting = false;
    },

    async savePassword(id){
   
      this.isSubmittingSenha = true;

      const urlUpdate =  `acesso/${id}?tipo=acesso` ;
      
      const response = await dataModelService.put(urlUpdate, this.dataSenha);
      
      console.log(response.status)
    
      if (response.status === 422) {
        alert('O campo senha é obrigatório!')
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

      this.isSubmittingSenha = false;
    },

    limpaForm(){
      this.dataForm = {
        ref: uniqid(),
        nome: null,
        email: null,
        password: null,
      };
      this.showInputSenha = true;
    },

    limpaFormSenha(){
      this.dataSenha= { 
        nova_senha : null
      };
    },

    novo(){
      this.limpaForm();
      this.limpaFormSenha()
      
    },

    redirecionar(id){
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      this.getById(id);
    },

    closeModal() {
      const modalElement = document.getElementById('closeModalPassword');
      this.limpaFormSenha();
      modalElement.click();
    }
  },
  
});