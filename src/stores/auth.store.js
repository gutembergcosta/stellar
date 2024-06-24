import { defineStore } from 'pinia';

import { DataModelService } from "@/services/DataModelService";
import router from "@/router";

const dataModelService = new DataModelService();

const baseUrl = 'login';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    userInfo : JSON.parse(localStorage.getItem('userData')),
    dataForm : {
      email: null,
      password: null,
    },
  }),
  getters: {
    userTipo: (state) => state.userInfo.tipo,
    userNome: (state) => state.userInfo.nome,
  },
  actions:{
    async login(){
      
      const response = await dataModelService.post(`${baseUrl}`, this.dataForm);

      if (response.status === 200 && response.data != 'Unauthorised') {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userData', JSON.stringify(response.data.userData));
        router.push('/item/lista');
      }
    
      if (response.status === 422 || response.data == 'Unauthorised') {
        alert('Login inválido')
      }
      
      if (response.status === 500 ) {
        alert('Erro!!')
      }
    },
    sair(){
      var result = confirm("Deseja sair do sistema?");
        if (result) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        router.push('/login');
      }
    },


  },
  
});