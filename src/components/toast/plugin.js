import Vue from 'vue';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

Vue.use(ToastService);
Vue.component('Toast', Toast);