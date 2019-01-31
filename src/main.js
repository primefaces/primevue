import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AutoComplete from './components/autocomplete/AutoComplete';
import Accordion from './components/accordion/Accordion';
import AccordionTab from './components/accordion/AccordionTab';
import Button from './components/button/Button';
import Card from './components/card/Card';
import Chart from './components/chart/Chart';
import Checkbox from './components/checkbox/Checkbox';
import Chips from './components/chips/Chips';
import Dialog from './components/dialog/Dialog';
import Dropdown from './components/dropdown/Dropdown';
import Editor from './components/editor/Editor';
import FullCalendar from './components/fullcalendar/FullCalendar';
import InputSwitch from './components/inputswitch/InputSwitch';
import InputText from './components/inputtext/InputText';
import Fieldset from './components/fieldset/Fieldset';
import MultiSelect from './components/multiselect/MultiSelect';
import Listbox from './components/listbox/Listbox';
import OverlayPanel from './components/overlaypanel/OverlayPanel';
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

Vue.component('Accordion', Accordion);
Vue.component('AccordionTab', AccordionTab);
Vue.component('AutoComplete', AutoComplete);
Vue.component('Button', Button);
Vue.component('Card', Card);
Vue.component('Chart', Chart);
Vue.component('Checkbox', Checkbox);
Vue.component('Chips', Chips);
Vue.component('Dialog', Dialog);
Vue.component('Dropdown', Dropdown);
Vue.component('Editor', Editor);
Vue.component('FullCalendar', FullCalendar);
Vue.component('InputSwitch', InputSwitch);
Vue.component('InputText', InputText);
Vue.component('Listbox', Listbox);
Vue.component('Fieldset', Fieldset);
Vue.component('MultiSelect', MultiSelect);
Vue.component('OverlayPanel', OverlayPanel);
Vue.component('Panel', Panel);
Vue.component('Password', Password);
Vue.component('ProgressBar', ProgressBar);
Vue.component('RadioButton', RadioButton);
Vue.component('Rating', Rating);
Vue.component('SelectButton', SelectButton);
Vue.component('Slider', Slider);
Vue.component('Spinner', Spinner);
Vue.component('TabView', TabView);
Vue.component('TabPanel', TabPanel);
Vue.component('Textarea', Textarea);
Vue.component('Toolbar', Toolbar);
Vue.component('ToggleButton', ToggleButton);
Vue.component('TriStateCheckbox', TriStateCheckbox);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
