
require('./bootstrap');
import { createApp } from 'vue'; 
import App from './components/App.vue';
import { createRouter, createWebHistory } from 'vue-router'; 
import VueAxios from 'vue-axios';
import axios from 'axios';
import { routes } from './routes';

const app = createApp(App); 

app.use(createRouter({
  history: createWebHistory(),
  routes: routes
}));

app.use(VueAxios, axios);
app.mount('#app');
