import pkg from '@/package.json';
//import Aura from '@/presets/aura';
//import Lara from '@/presets/lara';
import { isArray, isDate, isFunction, isObject } from '@primeuix/utils/object';
import { services } from './services';

const PrimeVue = {
    version: '^4.0.1',
    description:
        'PrimeVue is an open source UI library for Vue featuring a rich set of 80+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, it integrates with PrimeBlock, which has 400+ ready to use UI blocks to build spectacular applications in no time.'
};

const app_dependencies = pkg ? pkg.devDependencies : {};

const core_dependencies = {
    vue: '^3.2.45',
    'vue-router': '^4.1.6',
    '@vitejs/plugin-vue': '^4.0.0',
    vite: '^4.0.0',
    primevue: PrimeVue.version || 'latest',
    primeicons: app_dependencies['primeicons'] || 'latest',
    tailwindcss: app_dependencies['tailwindcss'] || 'latest',
    autoprefixer: app_dependencies['autoprefixer'] || 'latest',
    postcss: app_dependencies['postcss'] || 'latest',
    'tailwindcss-primeui': app_dependencies['tailwindcss-primeui'] || 'latest'
};

// create-vue -> https://github.com/vuejs/create-vue
const getVueApp = (props = {}, sourceType) => {
    const path = 'src/';
    const { code: sources, title = 'primevue_demo', description = '', service, extPages, dependencies: deps, component, extFiles, embedded } = props;
    const dependencies = { ...core_dependencies, ...deps };

    const fileExtension = '.vue';
    const mainFileName = 'App';
    const sourceFileName = `${path}${mainFileName}${fileExtension}`;
    let element = '',
        imports = '',
        unstyled = '',
        themeSwitchCode = '',
        routeFiles = {};

    sources.routeFiles &&
        Object.entries(sources.routeFiles).forEach(([key, value]) => {
            routeFiles[`${path + key}`] = {
                content: value
            };
        });

    let extFilesSource = extFiles
        ? embedded
            ? extFiles['composition']
            : extFiles[sourceType.language]
            ? { ...extFiles[sourceType.language] }
            : Object.keys(extFiles)
                  .filter((k) => !sourceTypes.includes(k))
                  .reduce((result, current) => (result[current] = extFiles[current]) && result, {})
        : {};

    if (deps !== null && component !== null) {
        imports += `import ${component} from 'primevue/${component.toLowerCase()}';
`;
        element += `app.component('${component}', ${component});
`;
    }

    // main.js
    unstyled += `, unstyled: true, pt: Aura`;
    imports += `import ThemeSwitcher from './components/ThemeSwitcher.vue';
import Configurator from './components/Configurator.vue';
import Lara from './presets/lara';
import Aura from './presets/aura';
import appState from './plugins/appState.js';`;
    element += `app.component('ThemeSwitcher', ThemeSwitcher);
app.component('Configurator', Configurator);
app.use(appState);`;

    // App.vue
    themeSwitchCode = ''.concat(
        `<template>
    <ThemeSwitcher />`,
        sources.split('<template>')[1]
    );

    const files = {
        'package.json': {
            content: {
                name: title.toLowerCase().replaceAll(' ', '_'),
                description: `**${description}** ${PrimeVue.description}`,
                keywords: [],
                scripts: {
                    dev: 'vite',
                    build: 'vite build',
                    preview: 'vite preview'
                },
                dependencies,
                main: 'src/App.vue'
            }
        },
        'vite.config.js': {
            content: `import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});`
        },
        'index.html': {
            content: `<!DOCTYPE html>
<html lang="en" data-preset="noir">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="**${description}** ${PrimeVue.description}" />
        <!-- Added to show icons in the editor -->
        <link rel="stylesheet" href="https://unpkg.com/primeicons@${dependencies['primeicons'].replace(/[\^|~]/gi, '')}/primeicons.css">
        <title>PrimeVue Preset App</title>
    </head>
    <body>
        <div id="app"></div>
        <script type="module" src="/src/main.js"></script>
    </body>
</html>`
        },
        [`${path}main.js`]: {
            content: `
import "primeicons/primeicons.css";
import "./style.css";
import "./flags.css";

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import PrimeVue from "primevue/config";
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import AccordionTab from 'primevue/accordiontab';
import AnimateOnScroll from 'primevue/animateonscroll';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from "primevue/badgedirective";
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';
import ButtonGroup from 'primevue/buttongroup';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import CascadeSelect from 'primevue/cascadeselect';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DatePicker from 'primevue/datepicker';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice'
import Divider from 'primevue/divider';
import Dock from 'primevue/dock';
import Drawer from 'primevue/drawer';
import Dropdown from 'primevue/dropdown';
import DynamicDialog from 'primevue/dynamicdialog';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import FloatLabel from 'primevue/floatlabel';
import FocusTrap from 'primevue/focustrap';
import Galleria from 'primevue/galleria';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputChips from 'primevue/inputchips';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputOtp from 'primevue/inputotp';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MeterGroup from 'primevue/metergroup';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayBadge from 'primevue/overlaybadge';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import Popover from 'primevue/popover';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import Row from 'primevue/row';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import Skeleton from 'primevue/skeleton';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import Textarea from 'primevue/textarea';
import TieredMenu from 'primevue/tieredmenu';
import Timeline from 'primevue/timeline';
import ToggleButton from 'primevue/togglebutton';
import ToggleSwitch from 'primevue/toggleswitch';
import Tooltip from 'primevue/tooltip';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import VirtualScroller from 'primevue/virtualscroller';
${imports}

const app = createApp(App);

app.use(PrimeVue, { ripple: true ${unstyled} });
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);

app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('focustrap', FocusTrap);
app.directive('animateonscroll', AnimateOnScroll);

app.component('Accordion', Accordion);
app.component('AccordionPanel', AccordionPanel);
app.component('AccordionHeader', AccordionHeader);
app.component('AccordionContent', AccordionContent);
app.component('AccordionTab', AccordionTab);
app.component('AutoComplete', AutoComplete);
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('Badge', Badge);
app.component('BlockUI', BlockUI);
app.component('Breadcrumb', Breadcrumb);
app.component('Button', Button);
app.component('ButtonGroup', ButtonGroup);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('CascadeSelect', CascadeSelect);
app.component('Checkbox', Checkbox);
app.component('Chip', Chip);
app.component('Chips', Chips);
app.component('ColorPicker', ColorPicker);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ConfirmPopup', ConfirmPopup);
app.component('ContextMenu', ContextMenu);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DatePicker', DatePicker);
app.component('DeferredContent', DeferredContent);
app.component('Dialog', Dialog);
app.component('Divider', Divider);
app.component('Dock', Dock);
app.component('Drawer', Drawer);
app.component('Dropdown', Dropdown);
app.component('DynamicDialog', DynamicDialog);
app.component('Fieldset', Fieldset);
app.component('FileUpload', FileUpload);
app.component('FloatLabel', FloatLabel);
app.component('Galleria', Galleria);
app.component('IconField', IconField);
app.component('Image', Image);
app.component('InlineMessage', InlineMessage);
app.component('Inplace', Inplace);
app.component('InputChips', InputChips);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('InputIcon', InputIcon);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputOtp', InputOtp);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('Knob', Knob);
app.component('Listbox', Listbox);
app.component('MegaMenu', MegaMenu);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('Message', Message);
app.component('MeterGroup', MeterGroup);
app.component('MultiSelect', MultiSelect);
app.component('OrderList', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('OverlayBadge', OverlayBadge);
app.component('OverlayPanel', OverlayPanel);
app.component('Paginator', Paginator);
app.component('Panel', Panel);
app.component('PanelMenu', PanelMenu);
app.component('Password', Password);
app.component('PickList', PickList);
app.component('Popover', Popover);
app.component('ProgressBar', ProgressBar);
app.component('ProgressSpinner', ProgressSpinner);
app.component('RadioButton', RadioButton);
app.component('Rating', Rating);
app.component('Row', Row);
app.component('ScrollPanel', ScrollPanel);
app.component('ScrollTop', ScrollTop);
app.component('Select', Select);
app.component('SelectButton', SelectButton);
app.component('Slider', Slider);
app.component('Sidebar', Sidebar);
app.component('Skeleton', Skeleton);
app.component('SpeedDial', SpeedDial);
app.component('SplitButton', SplitButton);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Stepper', Stepper);
app.component('StepList', StepList);
app.component('StepPanels', StepPanels);
app.component('StepItem', StepItem);
app.component('Step', Step);
app.component('StepPanel', StepPanel);

app.component('TabMenu', TabMenu);
app.component('Tabs', Tabs);
app.component('TabList', TabList);
app.component('Tab', Tab);
app.component('TabPanels', TabPanels);
app.component('TabPanel', TabPanel);
app.component('Tag', Tag);
app.component('Textarea', Textarea);
app.component('Terminal', Terminal);
app.component('TieredMenu', TieredMenu);
app.component('Timeline', Timeline);
app.component('Toast', Toast);
app.component('Toolbar', Toolbar);
app.component('ToggleButton', ToggleButton);
app.component('ToggleSwitch', ToggleSwitch);
app.component('Tree', Tree);
app.component('TreeSelect', TreeSelect);
app.component('TreeTable', TreeTable);
app.component('VirtualScroller', VirtualScroller);
${element}

app.mount("#app");
`
        },
        [`${path}style.css`]: {
            content: tailwindConfig
        },
        [`${path}flags.css`]: {
            content: staticStyles.flags
        },
        [`${path}router.js`]: {
            content: `import { createRouter, createWebHistory } from "vue-router";
import ${mainFileName} from "./${mainFileName}${fileExtension}";

export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: ${mainFileName} }]
});`
        },
        [`${sourceFileName}`]: {
            content: themeSwitchCode
        },
        'public/logo.svg': {
            content: `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="139px" height="158px" viewBox="0 0 139 158" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 59.1 (86144) - https://sketch.com -->
    <title>head</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-3.000000, -7.000000)">
            <g id="head" transform="translate(3.000000, 7.000000)">
                <polygon id="chick-right" fill="#41B883" fill-rule="nonzero" points="102.295646 72.1832018 91.4643424 69.7770951 99.8886897 81.8076287 99.8886897 119.102283 128.772166 95.0412157 128.772166 54.1374014 115.533906 58.9496148"></polygon>
                <polygon id="chick-left" fill="#41B883" fill-rule="nonzero" transform="translate(27.078259, 86.619842) scale(-1, 1) translate(-27.078259, -86.619842) " points="19.255651 72.1832018 8.42434732 69.7770951 16.8486946 81.8076287 16.8486946 119.102283 45.7321712 95.0412157 45.7321712 54.1374014 32.4939111 58.9496148"></polygon>
                <polygon id="mask" fill="#41B883" points="40.9182584 84.2137354 50.5460839 69.7770951 56.5634749 73.3862552 80.6330387 73.3862552 86.6504296 69.7770951 96.2782551 84.2137354 96.2782551 138.351137 89.057386 149.178617 80.6330387 157.599991 56.5634749 157.599991 48.1391276 149.178617 40.9182584 138.351137"></polygon>
                <polygon id="bottom-chick-right" fill="#41B883" fill-rule="nonzero" points="99.8886897 141.960297 115.533906 126.320603 115.533906 110.680909 99.8886897 123.914496"></polygon>
                <polygon id="bottom-chick-left" fill="#41B883" fill-rule="nonzero" transform="translate(29.485216, 126.320603) scale(-1, 1) translate(-29.485216, -126.320603) " points="21.6626074 141.960297 37.3078239 126.320603 37.3078239 110.680909 21.6626074 123.914496"></polygon>
                <path d="M89.4422148,12.342 L93.8712988,22.8580139 L79.4295605,68.5740417 L71.0052132,68.5740417 L71.0042148,56.994 L89.4422148,12.342 Z M48.1982148,11.287 L66.1912148,57.769 L66.1913004,68.5740417 L58.9704313,68.5740417 L43.3252148,22.8580139 L48.1982148,11.287 Z M66.1913004,0 L66.1912148,46.688 L59.3732148,29.074 L61.3773876,30.0763341 L61.3773876,0 L66.1913004,0 Z M75.8191259,1.91846539e-13 L75.8191259,30.0763341 L78.3042148,28.833 L71.0042148,46.513 L71.0052132,0 L75.8191259,1.91846539e-13 Z M84.2434732,0 L87.2562148,7.154 L80.6322148,23.196 L80.6330387,1.91846539e-13 L84.2434732,0 Z M56.5634749,0 L56.5632148,21.816 L50.4332148,5.981 L52.9530403,0 L56.5634749,0 Z" fill="#455C71"></path>
                <path d="M138.399992,19.2488538 L131.179123,49.3251879 L79.4295605,68.5740417 L78.2260823,68.5740417 L92.6678206,22.8580139 L138.399992,19.2488538 Z M0,19.2488538 L44.528693,22.8580139 L60.1739095,68.5740417 L58.9704313,68.5740417 L7.22086913,49.3251879 L0,19.2488538 Z" id="head-right-2" fill="#41B883" fill-rule="nonzero"></path>
                <polygon id="ear-right" fill="#455C71" fill-rule="nonzero" points="96.2782551 19.2488538 121.551297 16.8427471 104.702602 0 87.8539078 0"></polygon>
                <polygon id="ear-left" fill="#455C71" fill-rule="nonzero" transform="translate(32.493911, 9.624427) scale(-1, 1) translate(-32.493911, -9.624427) " points="24.0695638 19.2488538 49.3426058 16.8427471 32.4939111 0 15.6452165 0"></polygon>
                <polygon id="Path-2" fill="#455C71" fill-rule="nonzero" points="18.7999989 20.7999988 44.7999973 22.7999986 60.3999964 68.5999959 58.7999965 68.5999959 41.9999975 62.3999963"></polygon>
                <polygon id="Path-3" fill="#455C71" fill-rule="nonzero" points="119.199993 20.7999988 92.3999945 22.7999986 77.5999954 68.5999959 79.5999953 68.5599959 95.1999943 62.7999963"></polygon>
                <polygon id="Path-4" fill="#455C71" fill-rule="nonzero" points="48.3999971 72.7999957 50.399997 69.5999959 57.1999966 72.7999957 81.1999952 72.7999957 86.3999949 69.5999959 88.7999947 72.7999957 68.5999959 107.199994"></polygon>
                <path d="M90.2104053,-1.0658141e-14 L68.485709,52.6144989 L48.1188062,-1.0658141e-14 L90.2104053,-1.0658141e-14 Z" id="Path-6" fill="#41B883" fill-rule="nonzero"></path>
            </g>
        </g>
    </g>
</svg>`
        },
        ...routeFiles,
        ...extFilesSource
    };

    if (extPages && extPages.length >= 1) {
        let routePaths = '';
        let viewImports = '';

        extPages.forEach((page, index) => {
            let compPath = page.tabName.replace('Demo', '').toLowerCase();

            routePaths += `{ path: "/${index === 0 ? '' : compPath}", component: ${page.tabName} },\n`;
            viewImports += `import ${page.tabName} from "./components/${page.tabName}${fileExtension}";\n`;
            files[`${path}components/${page.tabName}${fileExtension}`] = {
                content: page.content
            };
        });

        files[`${path}router.js`] = {
            content: `import { createRouter, createWebHistory } from "vue-router";
${viewImports}
export const router = createRouter({
    history: createWebHistory(),
    routes: [ ${routePaths}]
});`
        };
    }

    if (service) {
        service.forEach((name) => {
            files[`${path}service/${name}.js`] = {
                content: services[name]
            };
        });
    }

    files['tailwind.config.js'] = {
        content: `/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');
export default {
    darkMode: ['selector', '[class="p-dark"]'],
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/*/.{vue,js,ts,jsx,tsx}",
    ],
    plugins: [primeui],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        }
    }
}`
    };

    files['postcss.config.js'] = {
        content: `module.exports = {
plugins: {
    tailwindcss: {},
    autoprefixer: {}
}
}`
    };

    files[`${path}components/ThemeSwitcher.vue`] = {
        content: `<template>
    <div class="card flex justify-end p-2 mb-4">
        <ul class="flex list-none m-0 p-0 gap-2 items-center">
            <li>
                <button
                    type="button"
                    class="inline-flex border w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
                    @click="onThemeToggler"
                >
                    <i :class="\`dark:text-white pi \${iconClass}\`" />
                </button>
            </li>
        <li class="relative">
            <button
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                type="button"
                class="inline-flex border w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
            >
                <i class="pi pi-palette dark:text-white"></i>
            </button>
            <Configurator />
        </li>
        </ul>
    </div>
    </template>

<script>
export default {
    data() {
        return {
            iconClass: 'pi-moon'
        }
    },
    methods: {
        onThemeToggler() {
            const root = document.getElementsByTagName('html')[0];

            root.classList.toggle('p-dark');
            this.iconClass = this.iconClass === 'pi-moon' ? 'pi-sun' : 'pi-moon';
            this.$appState.darkTheme = !this.$appState.darkTheme;
        }
    },
};
<\/script>
    `
    };

    files[`${path}components/Configurator.vue`] = {
        content: `<template>
<div class="absolute top-[2.5rem] right-0 hidden w-[16rem] p-3 bg-white dark:bg-surface-800 rounded-md shadow border border-surface-200 dark:border-surface-700 flex-col justify-start items-start gap-3.5 inline-flex origin-top z-10">
    <div class="flex-col justify-start items-start gap-2 inline-flex w-full">
        <span class="text-black dark:text-surface-0 text-sm font-medium">Preset</span>
        <div class="inline-flex items-start">
            <SelectButton v-model="$appState.preset" @update:modelValue="onPresetChange" :options="presets" :allowEmpty="false" />
        </div>
    </div>
    <div class="flex-col justify-start items-start gap-2 inline-flex pr-4">
        <span class="text-black dark:text-surface-0 text-sm font-medium">Primary Colors</span>
        <div class="self-stretch justify-start items-start gap-2 inline-flex flex-wrap">
            <button
                v-for="primaryColor of primaryColors"
                :key="primaryColor.name"
                type="button"
                @click="updateColors('primary', primaryColor.name)"
                class="w-4 h-4 rounded-full cursor-pointer config-button"
                :class="{ 'active-color': selectedPrimaryColor === primaryColor.name }"
                :style="{ backgroundColor: \`\${primaryColor.name === 'noir' ? 'var(--text-color)' : primaryColor.palette[5]}\` }"
            ></button>
        </div>
    </div>
    <div class="flex-col justify-start items-start gap-2 inline-flex pr-2">
        <span class="text-black dark:text-surface-0 text-sm font-medium">Surface Colors</span>
        <div class="self-stretch justify-start items-start gap-2 inline-flex">
            <button
                v-for="surface of surfaces"
                :key="surface.name"
                type="button"
                @click="updateColors('surface', surface.name)"
                class="w-4 h-4 rounded-full cursor-pointer config-button"
                :class="{ 'active-color': selectedSurfaceColor ? selectedSurfaceColor === surface.name : $appState.darkTheme ? surface.name === 'zinc' : surface.name === 'slate' }"
                :style="{ backgroundColor: \`\${surface.palette[6]}\` }"
            ></button>
        </div>
    </div>
    <div class="flex justify-between items-center gap-2 flex w-full pt-4 pb-2 border-t border-surface-200 dark:border-surface-700">
        <span class="text-black dark:text-surface-0 text-sm font-medium m-0">Ripple Effect</span>
        <ToggleSwitch :modelValue="rippleActive" @update:modelValue="onRippleChange" />
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                presets: ['Aura', 'Lara'],
                selectedPrimaryColor: 'noir',
                selectedSurfaceColor: 'slate',
                primaryColors: [
                    {
                        name: 'noir',
                        palette: {}
                    },
                    { name: 'emerald', palette: ['#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#022c22'] },
                    { name: 'green', palette: ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d', '#052e16'] },
                    { name: 'lime', palette: ['#f7fee7', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212', '#365314', '#1a2e05'] },
                    { name: 'orange', palette: ['#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12', '#431407'] },
                    { name: 'amber', palette: ['#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f', '#451a03'] },
                    { name: 'yellow', palette: ['#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207', '#854d0e', '#713f12', '#422006'] },
                    { name: 'teal', palette: ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a', '#042f2e'] },
                    { name: 'cyan', palette: ['#ecfeff', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63', '#083344'] },
                    { name: 'sky', palette: ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e', '#082f49'] },
                    { name: 'blue', palette: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554'] },
                    { name: 'indigo', palette: ['#eef2ff', '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81', '#1e1b4b'] },
                    { name: 'violet', palette: ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95', '#2e1065'] },
                    { name: 'purple', palette: ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6b21a8', '#581c87', '#3b0764'] },
                    { name: 'fuchsia', palette: ['#fdf4ff', '#fae8ff', '#f5d0fe', '#f0abfc', '#e879f9', '#d946ef', '#c026d3', '#a21caf', '#86198f', '#701a75', '#4a044e'] },
                    { name: 'pink', palette: ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d', '#831843', '#500724'] },
                    { name: 'rose', palette: ['#fff1f2', '#ffe4e6', '#fecdd3', '#fda4af', '#fb7185', '#f43f5e', '#e11d48', '#be123c', '#9f1239', '#881337', '#4c0519'] }
                ],
                surfaces: [
                    {
                        name: 'slate',
                        palette: ['#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a', '#020617']
                    },
                    {
                        name: 'gray',
                        palette: ['#ffffff', '#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#111827', '#030712']
                    },
                    {
                        name: 'zinc',
                        palette: ['#ffffff', '#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b', '#09090b']
                    },
                    {
                        name: 'neutral',
                        palette: ['#ffffff', '#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#525252', '#404040', '#262626', '#171717', '#0a0a0a']
                    },
                    {
                        name: 'stone',
                        palette: ['#ffffff', '#fafaf9', '#f5f5f4', '#e7e5e4', '#d6d3d1', '#a8a29e', '#78716c', '#57534e', '#44403c', '#292524', '#1c1917', '#0c0a09']
                    },
                    {
                        name: 'soho',
                        palette: ['#ffffff', '#f4f4f4', '#e8e9e9', '#d2d2d4', '#bbbcbe', '#a5a5a9', '#8e8f93', '#77787d', '#616268', '#4a4b52', '#34343d', '#1d1e27']
                    },
                    {
                        name: 'viva',
                        palette: ['#ffffff', '#f3f3f3', '#e7e7e8', '#cfd0d0', '#b7b8b9', '#9fa1a1', '#87898a', '#6e7173', '#565a5b', '#3e4244', '#262b2c', '#0e1315']
                    },
                    {
                        name: 'ocean',
                        palette: ['#ffffff', '#fbfcfc', '#F7F9F8', '#EFF3F2', '#DADEDD', '#B1B7B6', '#828787', '#5F7274', '#415B61', '#29444E', '#183240', '#0c1920']
                    }
                ]
            };
        },
        methods: {
            updateColors(type, colorName) {
                let selectedColor;
                const root = document.documentElement;

                if (type === 'primary') {
                    selectedColor = this.primaryColors.find((color) => color.name === colorName);
                    this.selectedPrimaryColor = colorName;

                    if (colorName === 'noir') {
                        root.setAttribute('data-preset', 'noir');
                    } else {
                        root.removeAttribute('data-preset');
                    }
                } else if (type === 'surface') {
                    selectedColor = this.surfaces.find((color) => color.name === colorName);
                    this.selectedSurfaceColor = colorName;
                }

                if (!document.startViewTransition) {
                    this.applyTheme(type, selectedColor.palette, colorName);

                    return;
                }

                document.startViewTransition(() => this.applyTheme(type, selectedColor.palette, colorName));
            },
            applyTheme(type, colors, colorName) {
                let increments;

                if (type === 'primary') {
                    increments = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
                } else if (type === 'surface') {
                    increments = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
                }

                if (colorName === 'noir') {
                    increments.forEach((inc, index) => {
                        document.documentElement.style.setProperty(\`--p-\${type}-\${increments[index]}\`, \`var(--p-surface-\${inc})\`);
                    });
                } else {
                    colors.forEach((color, index) => {
                        document.documentElement.style.setProperty(\`--p-\${type}-\${increments[index]}\`, color);
                    });
                }
            },
            onPresetChange(preset) {
                this.$appState.preset = preset;
            },
            onRippleChange(value) {
                this.$primevue.config.ripple = value;
            }
        },
        computed: {
            rippleActive() {
                return this.$primevue.config.ripple;
            }
        }
    };
    <\/script>
    `
    };

    files[`${path}plugins/appState.js`] = {
        content: `import Lara from '@/presets/lara';
import Aura from '@/presets/aura';
import { reactive, watch } from 'vue';

export default {
    install: (app) => {
        const _appState = reactive({ preset: 'Aura', darkMode: false });

        watch(
            () => _appState.preset,
            (newValue) => {
            if (newValue === 'Lara')
                app.config.globalProperties.$primevue.config.pt = Lara;
            else if (newValue === 'Aura')
                app.config.globalProperties.$primevue.config.pt = Aura;
            }
        );

        app.config.globalProperties.$appState = _appState;
    }
};
`
    };

    // @todo - Refactor
    const stringify = (value, indent = 2, currentIndent = 0) => {
        const currentIndentStr = ' '.repeat(currentIndent);
        const nextIndentStr = ' '.repeat(currentIndent + indent);

        if (isArray(value)) {
            return '[' + value.map((v) => stringify(v, indent, currentIndent + indent)).join(', ') + ']';
        } else if (isDate(value)) {
            return value.toISOString();
        } else if (isFunction(value)) {
            return value
                .toString()
                .split('\n')
                .map((line, i, arr) => {
                    try {
                        return process?.dev ? line : i === 0 ? line : arr.length - 1 === i ? ' '.repeat(2) + line : currentIndentStr + line;
                    } catch {
                        return i === 0 ? line : arr.length - 1 === i ? ' '.repeat(2) + line : currentIndentStr + line;
                    }
                })
                .join('\n');
        } else if (isObject(value)) {
            return (
                '{\n' +
                Object.entries(value)
                    .map(([k, v]) => `${nextIndentStr}${k}: ${stringify(v, indent, currentIndent + indent)}`)
                    .join(',\n') +
                `\n${currentIndentStr}` +
                '}'
            );
        } else {
            return JSON.stringify(value);
        }
    };

    const createPresetFiles = (presetName, stringPresetName) => {
        const presetPath = `${path}presets/${stringPresetName}`;
        const imports = [];
        const keys = [];
        const directivesKeys = [];

        Object.entries(presetName).forEach(([name, value]) => {
            if (name === 'global') {
                imports.push(`import ${name} from './${name}'`);
                keys.push(name);
                files[`${presetPath}/${name}.js`] = {
                    content: `export default {
    css: \`${value?.css}\`
                    }`
                };
            } else if (name === 'directives') {
                Object.entries(value).forEach(([dname, dvalue]) => {
                    const _name = dname === 'badge' ? 'badgedirective' : dname;

                    imports.push(`import ${_name} from './${_name}'`);
                    directivesKeys.push(dname === 'badge' ? `badge: badgedirective` : dname);
                    files[`${presetPath}/${_name}/index.js`] = {
                        content: `export default ${stringify(dvalue)}`
                    };
                });
            } else {
                imports.push(`import ${name} from './${name}'`);
                keys.push(name);
                files[`${presetPath}/${name}/index.js`] = {
                    content: `export default ${stringify(value)}`
                };
            }
        });

        files[`${path}presets/${stringPresetName}/index.js`] = {
            content: `${imports.join(';\n')}

export default {
    directives: {
        ${directivesKeys.join(',\n\t\t')}
    },
    ${keys.join(',\n\t')}
}
            `
        };
    };

    createPresetFiles(Lara, 'lara');
    createPresetFiles(Aura, 'aura');

    return { files, dependencies, sourceFileName };
};

const staticStyles = {
    flags: `span.flag{width:44px;height:30px;display:inline-block;}img.flag{width:30px}.flag{background:url(https://primefaces.org/cdn/primevue/images/flag/flags_responsive.png) no-repeat;background-size:100%;vertical-align: middle;}.flag-ad{background-position:0 .413223%}.flag-ae{background-position:0 .826446%}.flag-af{background-position:0 1.239669%}.flag-ag{background-position:0 1.652893%}.flag-ai{background-position:0 2.066116%}.flag-al{background-position:0 2.479339%}.flag-am{background-position:0 2.892562%}.flag-an{background-position:0 3.305785%}.flag-ao{background-position:0 3.719008%}.flag-aq{background-position:0 4.132231%}.flag-ar{background-position:0 4.545455%}.flag-as{background-position:0 4.958678%}.flag-at{background-position:0 5.371901%}.flag-au{background-position:0 5.785124%}.flag-aw{background-position:0 6.198347%}.flag-az{background-position:0 6.61157%}.flag-ba{background-position:0 7.024793%}.flag-bb{background-position:0 7.438017%}.flag-bd{background-position:0 7.85124%}.flag-be{background-position:0 8.264463%}.flag-bf{background-position:0 8.677686%}.flag-bg{background-position:0 9.090909%}.flag-bh{background-position:0 9.504132%}.flag-bi{background-position:0 9.917355%}.flag-bj{background-position:0 10.330579%}.flag-bm{background-position:0 10.743802%}.flag-bn{background-position:0 11.157025%}.flag-bo{background-position:0 11.570248%}.flag-br{background-position:0 11.983471%}.flag-bs{background-position:0 12.396694%}.flag-bt{background-position:0 12.809917%}.flag-bv{background-position:0 13.22314%}.flag-bw{background-position:0 13.636364%}.flag-by{background-position:0 14.049587%}.flag-bz{background-position:0 14.46281%}.flag-ca{background-position:0 14.876033%}.flag-cc{background-position:0 15.289256%}.flag-cd{background-position:0 15.702479%}.flag-cf{background-position:0 16.115702%}.flag-cg{background-position:0 16.528926%}.flag-ch{background-position:0 16.942149%}.flag-ci{background-position:0 17.355372%}.flag-ck{background-position:0 17.768595%}.flag-cl{background-position:0 18.181818%}.flag-cm{background-position:0 18.595041%}.flag-cn{background-position:0 19.008264%}.flag-co{background-position:0 19.421488%}.flag-cr{background-position:0 19.834711%}.flag-cu{background-position:0 20.247934%}.flag-cv{background-position:0 20.661157%}.flag-cx{background-position:0 21.07438%}.flag-cy{background-position:0 21.487603%}.flag-cz{background-position:0 21.900826%}.flag-de{background-position:0 22.31405%}.flag-dj{background-position:0 22.727273%}.flag-dk{background-position:0 23.140496%}.flag-dm{background-position:0 23.553719%}.flag-do{background-position:0 23.966942%}.flag-dz{background-position:0 24.380165%}.flag-ec{background-position:0 24.793388%}.flag-ee{background-position:0 25.206612%}.flag-eg{background-position:0 25.619835%}.flag-eh{background-position:0 26.033058%}.flag-er{background-position:0 26.446281%}.flag-es{background-position:0 26.859504%}.flag-et{background-position:0 27.272727%}.flag-fi{background-position:0 27.68595%}.flag-fj{background-position:0 28.099174%}.flag-fk{background-position:0 28.512397%}.flag-fm{background-position:0 28.92562%}.flag-fo{background-position:0 29.338843%}.flag-fr{background-position:0 29.752066%}.flag-ga{background-position:0 30.165289%}.flag-gd{background-position:0 30.578512%}.flag-ge{background-position:0 30.991736%}.flag-gf{background-position:0 31.404959%}.flag-gh{background-position:0 31.818182%}.flag-gi{background-position:0 32.231405%}.flag-gl{background-position:0 32.644628%}.flag-gm{background-position:0 33.057851%}.flag-gn{background-position:0 33.471074%}.flag-gp{background-position:0 33.884298%}.flag-gq{background-position:0 34.297521%}.flag-gr{background-position:0 34.710744%}.flag-gs{background-position:0 35.123967%}.flag-gt{background-position:0 35.53719%}.flag-gu{background-position:0 35.950413%}.flag-gw{background-position:0 36.363636%}.flag-gy{background-position:0 36.77686%}.flag-hk{background-position:0 37.190083%}.flag-hm{background-position:0 37.603306%}.flag-hn{background-position:0 38.016529%}.flag-hr{background-position:0 38.429752%}.flag-ht{background-position:0 38.842975%}.flag-hu{background-position:0 39.256198%}.flag-id{background-position:0 39.669421%}.flag-ie{background-position:0 40.082645%}.flag-il{background-position:0 40.495868%}.flag-in{background-position:0 40.909091%}.flag-io{background-position:0 41.322314%}.flag-iq{background-position:0 41.735537%}.flag-ir{background-position:0 42.14876%}.flag-is{background-position:0 42.561983%}.flag-it{background-position:0 42.975207%}.flag-jm{background-position:0 43.38843%}.flag-jo{background-position:0 43.801653%}.flag-jp{background-position:0 44.214876%}.flag-ke{background-position:0 44.628099%}.flag-kg{background-position:0 45.041322%}.flag-kh{background-position:0 45.454545%}.flag-ki{background-position:0 45.867769%}.flag-km{background-position:0 46.280992%}.flag-kn{background-position:0 46.694215%}.flag-kp{background-position:0 47.107438%}.flag-kr{background-position:0 47.520661%}.flag-kw{background-position:0 47.933884%}.flag-ky{background-position:0 48.347107%}.flag-kz{background-position:0 48.760331%}.flag-la{background-position:0 49.173554%}.flag-lb{background-position:0 49.586777%}.flag-lc{background-position:0 50%}.flag-li{background-position:0 50.413223%}.flag-lk{background-position:0 50.826446%}.flag-lr{background-position:0 51.239669%}.flag-ls{background-position:0 51.652893%}.flag-lt{background-position:0 52.066116%}.flag-lu{background-position:0 52.479339%}.flag-lv{background-position:0 52.892562%}.flag-ly{background-position:0 53.305785%}.flag-ma{background-position:0 53.719008%}.flag-mc{background-position:0 54.132231%}.flag-md{background-position:0 54.545455%}.flag-me{background-position:0 54.958678%}.flag-mg{background-position:0 55.371901%}.flag-mh{background-position:0 55.785124%}.flag-mk{background-position:0 56.198347%}.flag-ml{background-position:0 56.61157%}.flag-mm{background-position:0 57.024793%}.flag-mn{background-position:0 57.438017%}.flag-mo{background-position:0 57.85124%}.flag-mp{background-position:0 58.264463%}.flag-mq{background-position:0 58.677686%}.flag-mr{background-position:0 59.090909%}.flag-ms{background-position:0 59.504132%}.flag-mt{background-position:0 59.917355%}.flag-mu{background-position:0 60.330579%}.flag-mv{background-position:0 60.743802%}.flag-mw{background-position:0 61.157025%}.flag-mx{background-position:0 61.570248%}.flag-my{background-position:0 61.983471%}.flag-mz{background-position:0 62.396694%}.flag-na{background-position:0 62.809917%}.flag-nc{background-position:0 63.22314%}.flag-ne{background-position:0 63.636364%}.flag-nf{background-position:0 64.049587%}.flag-ng{background-position:0 64.46281%}.flag-ni{background-position:0 64.876033%}.flag-nl{background-position:0 65.289256%}.flag-no{background-position:0 65.702479%}.flag-np{background-position:0 66.115702%}.flag-nr{background-position:0 66.528926%}.flag-nu{background-position:0 66.942149%}.flag-nz{background-position:0 67.355372%}.flag-om{background-position:0 67.768595%}.flag-pa{background-position:0 68.181818%}.flag-pe{background-position:0 68.595041%}.flag-pf{background-position:0 69.008264%}.flag-pg{background-position:0 69.421488%}.flag-ph{background-position:0 69.834711%}.flag-pk{background-position:0 70.247934%}.flag-pl{background-position:0 70.661157%}.flag-pm{background-position:0 71.07438%}.flag-pn{background-position:0 71.487603%}.flag-pr{background-position:0 71.900826%}.flag-pt{background-position:0 72.31405%}.flag-pw{background-position:0 72.727273%}.flag-py{background-position:0 73.140496%}.flag-qa{background-position:0 73.553719%}.flag-re{background-position:0 73.966942%}.flag-ro{background-position:0 74.380165%}.flag-rs{background-position:0 74.793388%}.flag-ru{background-position:0 75.206612%}.flag-rw{background-position:0 75.619835%}.flag-sa{background-position:0 76.033058%}.flag-sb{background-position:0 76.446281%}.flag-sc{background-position:0 76.859504%}.flag-sd{background-position:0 77.272727%}.flag-se{background-position:0 77.68595%}.flag-sg{background-position:0 78.099174%}.flag-sh{background-position:0 78.512397%}.flag-si{background-position:0 78.92562%}.flag-sj{background-position:0 79.338843%}.flag-sk{background-position:0 79.752066%}.flag-sl{background-position:0 80.165289%}.flag-sm{background-position:0 80.578512%}.flag-sn{background-position:0 80.991736%}.flag-so{background-position:0 81.404959%}.flag-sr{background-position:0 81.818182%}.flag-ss{background-position:0 82.231405%}.flag-st{background-position:0 82.644628%}.flag-sv{background-position:0 83.057851%}.flag-sy{background-position:0 83.471074%}.flag-sz{background-position:0 83.884298%}.flag-tc{background-position:0 84.297521%}.flag-td{background-position:0 84.710744%}.flag-tf{background-position:0 85.123967%}.flag-tg{background-position:0 85.53719%}.flag-th{background-position:0 85.950413%}.flag-tj{background-position:0 86.363636%}.flag-tk{background-position:0 86.77686%}.flag-tl{background-position:0 87.190083%}.flag-tm{background-position:0 87.603306%}.flag-tn{background-position:0 88.016529%}.flag-to{background-position:0 88.429752%}.flag-tp{background-position:0 88.842975%}.flag-tr{background-position:0 89.256198%}.flag-tt{background-position:0 89.669421%}.flag-tv{background-position:0 90.082645%}.flag-tw{background-position:0 90.495868%}.flag-ty{background-position:0 90.909091%}.flag-tz{background-position:0 91.322314%}.flag-ua{background-position:0 91.735537%}.flag-ug{background-position:0 92.14876%}.flag-gb,.flag-uk{background-position:0 92.561983%}.flag-um{background-position:0 92.975207%}.flag-us{background-position:0 93.38843%}.flag-uy{background-position:0 93.801653%}.flag-uz{background-position:0 94.214876%}.flag-va{background-position:0 94.628099%}.flag-vc{background-position:0 95.041322%}.flag-ve{background-position:0 95.454545%}.flag-vg{background-position:0 95.867769%}.flag-vi{background-position:0 96.280992%}.flag-vn{background-position:0 96.694215%}.flag-vu{background-position:0 97.107438%}.flag-wf{background-position:0 97.520661%}.flag-ws{background-position:0 97.933884%}.flag-ye{background-position:0 98.347107%}.flag-za{background-position:0 98.760331%}.flag-zm{background-position:0 99.173554%}.flag-zr{background-position:0 99.586777%}.flag-zw{background-position:0 100%}`
};

const tailwindConfig = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
    --p-primary-50: var(--p-surface-50);
    --p-primary-100: var(--p-surface-100);
    --p-primary-200: var(--p-surface-200);
    --p-primary-300: var(--p-surface-300);
    --p-primary-400: var(--p-surface-400);
    --p-primary-500: var(--p-surface-500);
    --p-primary-600: var(--p-surface-600);
    --p-primary-700: var(--p-surface-700);
    --p-primary-800: var(--p-surface-800);
    --p-primary-900: var(--p-surface-900);
    --p-primary-950: var(--p-surface-950);
    --p-surface-0: #ffffff;
    --p-surface-50: #f8fafc;
    --p-surface-100: #f1f5f9;
    --p-surface-200: #e2e8f0;
    --p-surface-300: #cbd5e1;
    --p-surface-400: #94a3b8;
    --p-surface-500: #64748b;
    --p-surface-600: #475569;
    --p-surface-700: #334155;
    --p-surface-800: #1e293b;
    --p-surface-900: #0f172a;
    --p-surface-950: #020617;
    --p-content-border-radius: 6px;
}

:root {
    --p-primary-color: var(--p-primary-500);
    --p-primary-contrast-color: var(--p-surface-0);
    --p-primary-hover-color: var(--p-primary-600);
    --p-primary-active-color: var(--p-primary-700);
    --p-content-border-color: var(--p-surface-200);
    --p-content-hover-background: var(--p-surface-100);
    --p-content-hover-color: var(--p-surface-800);
    --p-highlight-background: var(--p-primary-50);
    --p-highlight-color: var(--p-primary-700);
    --p-highlight-focus-background: var(--p-primary-100);
    --p-highlight-focus-color: var(--p-primary-800);
    --p-text-color: var(--p-surface-700);
    --p-text-hover-color: var(--p-surface-800);
    --p-text-muted-color: var(--p-surface-500);
    --p-text-hover-muted-color: var(--p-surface-600);
}

:root[data-preset="noir"] {
    --p-primary-color: var(--p-primary-950);
    --p-primary-contrast-color: #ffffff;
    --p-primary-hover-color: var(--p-primary-800);
    --p-primary-active-color: var(--p-primary-700);
    --p-highlight-background: var(--p-surface-950);
    --p-highlight-color: #ffffff;
    --p-highlight-focus-background: var(--p-surface-700);
    --p-highlight-focus-color: #ffffff;
}

:root.p-dark {
    --p-primary-color: var(--p-primary-400);
    --p-primary-contrast-color: var(--p-surface-900);
    --p-primary-hover-color: var(--p-primary-300);
    --p-primary-active-color: var(--p-primary-200);
    --p-content-border-color: var(--p-surface-700);
    --p-content-hover-background: var(--p-surface-800);
    --p-content-hover-color: var(--p-surface-0);
    --p-highlight-background: color-mix(in srgb, var(--p-primary-400), transparent 84%);
    --p-highlight-color: rgba(255,255,255,.87);
    --p-highlight-focus-background: color-mix(in srgb, var(--p-primary-400), transparent 76%);
    --p-highlight-focus-color: rgba(255,255,255,.87);
    --p-text-color: var(--p-surface-0);
    --p-text-hover-color: var(--p-surface-0);
    --p-text-muted-color: var(--p-surface-400);
    --p-text-hover-muted-color: var(--p-surface-300);
}

:root.p-dark[data-preset="noir"]  {
    --p-primary-color: var(--p-primary-50);
    --p-primary-contrast-color: var(--p-surface-950);
    --p-primary-hover-color: var(--p-primary-200);
    --p-primary-active-color: var(--p-primary-300);
    --p-highlight-background: var(--p-surface-50);
    --p-highlight-color: var(--p-surface-950);
    --p-highlight-focus-background: var(--p-surface-300);
    --p-highlight-focus-color: var(--p-surface-950);
}

@keyframes fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeout {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes scalein {
    0% {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }
    100% {
        opacity: 1;
        transform: scaleY(1);
    }
}

@keyframes slidedown {
    0% {
        max-height: 0;
    }
    100% {
        max-height: auto;
    }
}
@keyframes slideup {
    0% {
        max-height: 1000px;
    }
    100% {
        max-height: 0;
    }
}

.scalein {
    animation: scalein 150ms linear;
}

.fadein {
    animation: fadein 150ms linear;
}

.fadeout {
    animation: fadeout 150ms linear;
}

.slidedown {
    animation: slidedown 0.45s ease-in-out;
}

.slideup {
    animation: slideup 0.45s cubic-bezier(0, 1, 0, 1);
}

:root {
    --card-border: 1px solid var(--p-surface-200);
    --card-background: #ffffff;
    --ground-background: var(--p-surface-50);
    --text-color: var(--p-surface-700);
}

:root.p-dark {
    --card-border: 1px solid transparent;
    --card-background: var(--p-surface-900);
    --ground-background: var(--p-surface-950);
    --text-color: var(--p-surface-0);
}


html {
    font-size: 14px;
    font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-feature-settings: "cv02","cv03","cv04","cv11";
    line-height: normal;
}

body {
    margin: 0px;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--ground-background);
    font-weight: normal;
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 1rem;
}

a {
    text-decoration: none;
}

p {
    line-height: 1.625;
    margin: 0 0 1rem 0;
}

.card {
    background: var(--card-background);
    border: var(--card-border);
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.layout-ripple-disabled [data-pc-name='ripple'] {
    display: none !important;
}

button.config-button {
    border: none;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    padding: 0;
    cursor: pointer;
    outline-color: transparent;
    outline-width: 2px;
    outline-style: solid;
    outline-offset: 1px;
}

button.config-button.active-color {
    outline-color: var(--p-primary-color);
}
`;

export { getVueApp };
