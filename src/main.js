import Vue from 'vue';
import App from './App.vue';
import router from './router';
import InputText from './components/inputtext/InputText';

import './assets/styles/primevue.css';
import 'primeflex/primeflex.css';

Vue.config.productionTip = false;

Vue.component('p-inputtext', InputText);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
