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
    errosUpdatePassword : [],
    showErrosUpdatePassword : false,
    showErros : false,
    tipoForm : 'add',
    tituloPagina: 'Lista de usuários',
    dataForm : {
      ref: uniqid(),
      nome: null,
      categoria_id: 0,
      info: null,
      email: null,
      texto: '<p>Content of the editor.</p>',
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
        this.showPreloader = true;
        await dataModelService.delete(`${baseUrl}/${id}`);
        this.listar()
        alert('User excluído com sucesso');
      }
    },
    async getById(id) {
      if (id) {
        try {
          this.showPreloader = true;
          this.dataForm = await dataModelService.get(`${baseUrl}/${id}`);
          this.showPreloader = false;
          this.tituloForm = 'Editar usuário';
          this.tipoForm = 'editar';
        } catch (error) {
          alert('erro getById()')
        }
      }else{
        this.tituloForm = 'Adicionar novo usuário'
      }
    },
    async save(){
      const dataFormId = this.dataForm.id ?? null;

      const urlUpdate = `${baseUrl}/${dataFormId}` ;

      alert(urlUpdate);

      this.showErros = false;
      
      const response = (dataFormId) ? await dataModelService.put(urlUpdate, this.dataForm) : await dataModelService.post(`${baseUrl}`, this.dataForm);
      
      console.log(response.status)
    
      if (response.status === 422) {
        this.erros = response.data.errors;
        this.showErros = true;
      }
      if (response.status === 200 ) {
        router.push({ name: "UserList" });
      }
      if (response.status === 500 ) {
        alert('Falha ao salvar registro!')
      }
    },
    async savePassword(){
   
      const dataFormId = this.dataSenha.userId;

      const urlUpdate =  `acesso/${dataFormId}` ;

      alert(urlUpdate);

      this.showErrosUpdatePassword = false;
      
      const response = await dataModelService.put(urlUpdate, this.dataSenha);
      
      console.log(response.status)
    
      if (response.status === 422) {
        this.showErrosUpdatePassword = true;
        this.errosUpdatePassword = response.data.errors;
      }
      if (response.status === 200 ) {
        alert('deu certo');
        //router.push({ name: "UserList" });
      }
      if (response.status === 500 ) {
        alert('Falha ao salvar registro!')
      }
    },
  },
  
});