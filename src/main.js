import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Router from "./router/index.js";
import {useAuthStore} from "@/modules/auth/stores/authStore.js";

import './assets/css/style.css';
import 'primeicons/primeicons.css';


const app = createApp(App);
const pinia = createPinia();


app.use(Router);
app.use(pinia);

const auth = useAuthStore();
auth.reloadToken();

app.mount('#app');

