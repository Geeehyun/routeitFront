import { createApp } from 'vue';
import '../css/style.css';
import App from '../../App.vue';
import Router from "../../router/index.js";
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(Router);
app.mount('#app');

