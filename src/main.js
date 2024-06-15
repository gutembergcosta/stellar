import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import TopoDefault from '@/blocos/TopoDefault.vue';
import FooterPage from '@/blocos/FooterPage.vue';
import SideBar from '@/blocos/SideBar.vue';
import TituloPage from '@/blocos/TituloPage.vue';
import CardBase from '@/blocos/CardBase.vue';
import SliderPrincipal from '@/blocos/SliderPrincipal.vue';
import AlertaErros from '@/blocos/AlertaErros.vue';
import ModalBase from '@/blocos/ModalBase.vue';
import Bs5Carousel from '@/blocos/Bs5Carousel.vue';
import UploadGaleria from '@/blocos/uploadGaleria/UploadGaleria.vue';
import UploadUnico from '@/blocos/uploadArquivo/UploadUnico.vue';
import { MaskInput } from 'vue-3-mask';
import VueNumberFormat from 'vue-number-format'
import CKEditor from '@ckeditor/ckeditor5-vue';

import '@/assets/estilos.css'

createApp(App).use(router).mount('#app')

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
app.component('Bs5Carousel', Bs5Carousel);

app.use(router);
app.use( CKEditor );
app.use(VueNumberFormat, {prefix: 'US$ ', decimal: ',', thousand: '.'})

app.mount('#app');