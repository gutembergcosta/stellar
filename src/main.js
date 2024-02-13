import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import TopoDefault from '@/blocos/TopoDefault.vue';
import FooterPage from '@/blocos/FooterPage.vue';
import SideBar from '@/blocos/SideBar.vue';
import TituloPage from '@/blocos/TituloPage.vue';
import UploadGaleria from '@/blocos/UploadGaleria.vue';



createApp(App).use(router).mount('#app')

const app = createApp(App);

// Register the component globally
app.component('TopoDefault', TopoDefault);
app.component('FooterPage', FooterPage);
app.component('SideBar', SideBar);
app.component('TituloPage', TituloPage);
app.component('UploadGaleria', UploadGaleria);


app.use(router);



// Mount the app
app.mount('#app');


