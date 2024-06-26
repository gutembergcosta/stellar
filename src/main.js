import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from "pinia";

import TopoDefault from '@/blocos/topo/TopoDefault.vue';
import FooterPage from '@/blocos/FooterPage.vue';
import SideBar from '@/blocos/sidebar/SideBar.vue';
import TituloPage from '@/blocos/TituloPage.vue';
import CardBase from '@/blocos/CardBase.vue';
import SliderPrincipal from '@/blocos/SliderPrincipal.vue';
import AlertaErros from '@/blocos/AlertaErros.vue';
import ModalBase from '@/blocos/ModalBase.vue';
import CardLogin from '@/blocos/CardLogin.vue';
import PreLoader from '@/blocos/PreLoader.vue';
import ListaErros from '@/blocos/ListaErros.vue';
import TextoBtn from '@/blocos/TextoBtn.vue';
import Bs5Carousel from '@/blocos/Bs5Carousel.vue';
import UploadGaleria from '@/blocos/uploadGaleria/UploadGaleria.vue';
import LogOut from '@/blocos/topo/LogOut.vue';
import UploadUnico from '@/blocos/uploadArquivo/UploadUnico.vue';
import { MaskInput } from 'vue-3-mask';
import VueNumberFormat from 'vue-number-format'
import CKEditor from '@ckeditor/ckeditor5-vue';


import '@/assets/estilos.css'

createApp(App).use(router).mount('#app')

const pinia = createPinia();

const app = createApp(App);

// Register the component globally
app.component('TopoDefault', TopoDefault);
app.component('FooterPage', FooterPage);
app.component('SideBar', SideBar);
app.component('TituloPage', TituloPage);
app.component('UploadGaleria', UploadGaleria);
app.component('UploadGaleria', UploadGaleria);
app.component('UploadUnico', UploadUnico);
app.component('CardBase', CardBase);
app.component('ModalBase', ModalBase);
app.component('AlertaErros', AlertaErros);
app.component('MaskInput', MaskInput);
app.component('SliderPrincipal', SliderPrincipal);
app.component('PreLoader', PreLoader);
app.component('TextoBtn', TextoBtn);
app.component('Bs5Carousel', Bs5Carousel);
app.component('LogOut', LogOut);
app.component('CardLogin', CardLogin);
app.component('ListaErros', ListaErros);

app.use(router);
app.use( CKEditor );
app.use( pinia );
app.use(VueNumberFormat, {prefix: 'US$ ', decimal: ',', thousand: '.'})

app.mount('#app');