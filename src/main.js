import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AutoComplete from './components/autocomplete/AutoComplete';
import Accordion from './components/accordion/Accordion';
import AccordionTab from './components/accordion/AccordionTab';
import Button from './components/button/Button';
import Calendar from './components/calendar/Calendar';
import Card from './components/card/Card';
import Chart from './components/chart/Chart';
import Checkbox from './components/checkbox/Checkbox';
import Chips from './components/chips/Chips';
import Dialog from './components/dialog/Dialog';
import Dropdown from './components/dropdown/Dropdown';
import Editor from './components/editor/Editor';
import Fieldset from './components/fieldset/Fieldset';
import FileUpload from './components/fileupload/FileUpload';
import FullCalendar from './components/fullcalendar/FullCalendar';
import InputSwitch from './components/inputswitch/InputSwitch';
import InputText from './components/inputtext/InputText';
import Listbox from './components/listbox/Listbox';
import Message from './components/message/Message';
import MultiSelect from './components/multiselect/MultiSelect';
import OverlayPanel from './components/overlaypanel/OverlayPanel';
import Paginator from './components/paginator/Paginator';
import Panel from './components/panel/Panel';
import Password from './components/password/Password';
import ProgressBar from './components/progressbar/ProgressBar';
import Rating from './components/rating/Rating';
import RadioButton from './components/radiobutton/RadioButton';
import SelectButton from './components/selectbutton/SelectButton';
import Slider from './components/slider/Slider';
import Sidebar from './components/sidebar/Sidebar';
import SplitButton from './components/splitbutton/SplitButton';
import Spinner from './components/spinner/Spinner';
import Textarea from './components/textarea/Textarea';
import Toast from './components/toast/Toast';
import ToastService from './components/toast/ToastService';
import Toolbar from './components/toolbar/Toolbar';
import TabView from './components/tabview/TabView';
import TabPanel from './components/tabview/TabPanel';
import ToggleButton from './components/togglebutton/ToggleButton';
import TriStateCheckbox from './components/tristatecheckbox/TriStateCheckbox';
import ValidationMessage from './components/validationmessage/ValidationMessage';

import CodeHighlight from './views/codehighlight/CodeHighlight';

import './assets/styles/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';

Vue.use(ToastService);

Vue.config.productionTip = false;

Vue.component('Accordion', Accordion);
Vue.component('AccordionTab', AccordionTab);
Vue.component('AutoComplete', AutoComplete);
Vue.component('Button', Button);
Vue.component('Calendar', Calendar);
Vue.component('Card', Card);
Vue.component('Chart', Chart);
Vue.component('Checkbox', Checkbox);
Vue.component('Chips', Chips);
Vue.component('Dialog', Dialog);
Vue.component('Dropdown', Dropdown);
Vue.component('Editor', Editor);
Vue.component('Fieldset', Fieldset);
Vue.component('FileUpload', FileUpload);
Vue.component('FullCalendar', FullCalendar);
Vue.component('InputSwitch', InputSwitch);
Vue.component('InputText', InputText);
Vue.component('Listbox', Listbox);
Vue.component('Message', Message);
Vue.component('MultiSelect', MultiSelect);
Vue.component('OverlayPanel', OverlayPanel);
Vue.component('Paginator', Paginator);
Vue.component('Panel', Panel);
Vue.component('Password', Password);
Vue.component('ProgressBar', ProgressBar);
Vue.component('RadioButton', RadioButton);
Vue.component('Rating', Rating);
Vue.component('SelectButton', SelectButton);
Vue.component('Slider', Slider);
Vue.component('Sidebar', Sidebar);
Vue.component('Spinner', Spinner);
Vue.component('SplitButton', SplitButton);
Vue.component('TabView', TabView);
Vue.component('TabPanel', TabPanel);
Vue.component('Textarea', Textarea);
Vue.component('Toast', Toast);
Vue.component('Toolbar', Toolbar);
Vue.component('ToggleButton', ToggleButton);
Vue.component('TriStateCheckbox', TriStateCheckbox);
Vue.component('ValidationMessage', ValidationMessage);

Vue.component('CodeHighlight', CodeHighlight);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
