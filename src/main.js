import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router'; // Importez la configuration du routeur

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router); // Ajoutez le routeur à l'application
app.mount('#app');
