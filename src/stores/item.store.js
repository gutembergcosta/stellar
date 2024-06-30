import { defineStore } from 'pinia';

import { uniqid } from '@/helpers/uniqid.js';

import { DataModelService } from "@/services/DataModelService";
import router from "@/router";

const dataModelService = new DataModelService();

const baseUrl = 'item';

export const useItemStore = defineStore({
  id: 'item',
  state: () => ({
    showPreloader: false,
    lista: [],
    erros : [],
    showErros : false,
    render : false,
    isSubmitting : false,
    picked: null,
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
      this.isSubmitting = true;
      const dataFormId = this.dataForm.id ?? null;

      this.showErros = false;
      
      const response = (dataFormId) ? await dataModelService.put(`${baseUrl}/${dataFormId}`, this.dataForm) : await dataModelService.post(`${baseUrl}`, this.dataForm);
      console.log(response.status)
    
      if (response.status === 422) {
        this.erros = response.data.errors;
        this.showErros = true;
      }
      if (response.status === 200 ) {
        alert('Item salvo com sucesso');
        router.push({ name: "ItemList" });
      }
      if (response.status === 500 ) {
        alert('Falha ao salvar registro!')
      }
      this.isSubmitting = false;
    },
    novo(){
      router.push({ name: "ItemAdd" });
    }
  },
  
});