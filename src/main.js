import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Accordion from './components/accordion/Accordion';
import AccordionTab from './components/accordion/AccordionTab';
import Button from './components/button/Button';
import Card from './components/card/Card';
import Checkbox from './components/checkbox/Checkbox';
import Chips from './components/chips/Chips';
import Dropdown from './components/dropdown/Dropdown';
import Editor from './components/editor/Editor';
import FullCalendar from './components/fullcalendar/FullCalendar';
import InputSwitch from './components/inputswitch/InputSwitch';
import InputText from './components/inputtext/InputText';
import Fieldset from './components/fieldset/Fieldset';
import MultiSelect from './components/multiselect/MultiSelect';
import Listbox from './components/listbox/Listbox';
import Panel from './components/panel/Panel';
import Password from './components/password/Password';
import ProgressBar from './components/progressbar/ProgressBar';
import Rating from './components/rating/Rating';
import RadioButton from './components/radiobutton/RadioButton';
import SelectButton from './components/selectbutton/SelectButton';
import Slider from './components/slider/Slider';
import Spinner from './components/spinner/Spinner';
import Textarea from './components/textarea/Textarea';
import Toolbar from './components/toolbar/Toolbar';
import TabView from './components/tabview/TabView';
import TabPanel from './components/tabview/TabPanel';
import ToggleButton from './components/togglebutton/ToggleButton';
import TriStateCheckbox from './components/tristatecheckbox/TriStateCheckbox';

import './assets/styles/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

Vue.config.productionTip = false;

Vue.component('p-accordion', Accordion);
Vue.component('p-accordionTab', AccordionTab);
Vue.component('p-button', Button);
Vue.component('p-card', Card);
Vue.component('p-checkbox', Checkbox);
Vue.component('p-chips', Chips);
Vue.component('p-dropdown', Dropdown);
Vue.component('p-editor', Editor);
Vue.component('p-fullCalendar', FullCalendar);
Vue.component('p-inputSwitch', InputSwitch);
Vue.component('p-inputtext', InputText);
Vue.component('p-listbox', Listbox);
Vue.component('p-fieldset', Fieldset);
Vue.component('p-multiSelect', MultiSelect);
Vue.component('p-panel', Panel);
Vue.component('p-password', Password);
Vue.component('p-progressBar', ProgressBar);
Vue.component('p-radioButton', RadioButton);
Vue.component('p-rating', Rating);
Vue.component('p-selectButton', SelectButton);
Vue.component('p-slider', Slider);
Vue.component('p-spinner', Spinner);
Vue.component('p-tabView', TabView);
Vue.component('p-tabPanel', TabPanel);
Vue.component('p-textarea', Textarea);
Vue.component('p-toolbar', Toolbar);
Vue.component('p-toggleButton', ToggleButton);
Vue.component('p-triStateCheckbox', TriStateCheckbox);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
