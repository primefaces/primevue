import Vue from 'vue';
import App from './App.vue';
import router from './router';
import InputText from './components/inputtext/InputText';
import ListBox from './components/listbox/ListBox';
import Button from './components/button/Button';

import './assets/styles/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

Vue.config.productionTip = false;

Vue.component('p-inputtext', InputText);
Vue.component('p-button', Button);
Vue.component('p-listBox', ListBox);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
