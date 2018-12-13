import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Accordion from './components/accordion/Accordion';
import AccordionTab from './components/accordion/AccordionTab';
import Button from './components/button/Button';
import InputText from './components/inputtext/InputText';
import Fieldset from './components/fieldset/Fieldset';
import ListBox from './components/listbox/ListBox';
import Panel from './components/panel/Panel';
import Textarea from './components/textarea/Textarea';
import Toolbar from './components/toolbar/Toolbar';
import TabView from './components/tabview/TabView';
import TabPanel from './components/tabview/TabPanel';

import './assets/styles/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

Vue.config.productionTip = false;

Vue.component('p-accordion', Accordion);
Vue.component('p-accordionTab', AccordionTab);
Vue.component('p-button', Button);
Vue.component('p-inputtext', InputText);
Vue.component('p-listBox', ListBox);
Vue.component('p-fieldset', Fieldset);
Vue.component('p-panel', Panel);
Vue.component('p-tabView', TabView);
Vue.component('p-tabPanel', TabPanel);
Vue.component('p-textarea', Textarea);
Vue.component('p-toolbar', Toolbar);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
