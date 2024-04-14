import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";



import { VaCard } from "vuestic-ui";

import TopoDefault from '@/blocos/TopoDefault.vue';
import FooterPage from '@/blocos/FooterPage.vue';
import SideBar from '@/blocos/SideBar.vue';
import TituloPage from '@/blocos/TituloPage.vue';
import UploadUnico from '@/blocos/uploadArquivo/UploadUnico.vue';
import UploadGaleria from '@/blocos/uploadGaleria/UploadGaleria.vue';



createApp(App).use(router).mount('#app')

const app = createApp(App);

// Register the component globally
app.component('VaCard', VaCard);

app.component('TopoDefault', TopoDefault);
app.component('FooterPage', FooterPage);
app.component('SideBar', SideBar);
app.component('TituloPage', TituloPage);
app.component('UploadGaleria', UploadGaleria);
app.component('UploadUnico', UploadUnico);


app.use(router);
app.use(createVuestic());



// Mount the app
app.mount('#app');


