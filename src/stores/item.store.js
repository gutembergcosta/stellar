import { defineStore } from 'pinia';

import { uniqid } from '@/helpers/uniqid.js';
import { DataModelService } from "@/services/DataModelService";
import router from "@/router";

const dataModelService = new DataModelService();

export const useItemStore = defineStore({
  id: 'users',
  state: () => ({
    showPreloader: true,
    dataFormList: [],
    erros : [],
    showErros : false,
    render : false,
    dataForm : {
      ref: uniqid(),
      nome: null,
      categoria_id: 0,
      info: null,
      email: null,
      texto: '<p>Content of the editor.</p>',
    },
  }),
  actions:{
    async listar(){
      this.dataFormList = await dataModelService.get('dataForm');
      this.showPreloader = false;
    },
    async deletar(id){
      if (confirm("Deseja realmente excluir este dataForm!") == true) {
        await dataModelService.delete(`/dataForm/${id}`);
        this.showPreloader = true;
        this.listar()
        alert('Item excluído com sucesso');
      }
    },
    async getById(id) {
      if (id) {
        try {
          this.dataForm = await dataModelService.get(`item/${id}`);
          this.showPreloader = false;
          this.render = true;
        } catch (error) {
          alert('erro getById()')
        }
      }
    },
    async save(){
      const dataFormId = this.dataForm.id ?? null;

      this.showErros = false;
      
      const response = (dataFormId) ? await dataModelService.put(`item/${dataFormId}`, this.dataForm) : await dataModelService.post(`item`, this.dataForm);
      console.log(response.status)
    
      if (response.status === 422) {
        this.erros = response.data.errors;
        this.showErros = true;
      }
      if (response.status === 200 ) {
        router.push({ name: "Itens" });
      }
      if (response.status === 500 ) {
        alert('Falha ao salvar registro!')
      }
    },

  },
  
});