import pkg from '../../../package.json';
import { services } from './services';

const PrimeVue = {
    version: '^4.0.0-beta.4',
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
    const { code: sources, title = 'primevue_demo', description = '', service, extPages, dependencies: deps, component, extFiles } = props;
    const dependencies = { ...core_dependencies, ...deps };

    const fileExtension = '.vue';
    const mainFileName = 'App';
    const sourceFileName = `${path}${mainFileName}${fileExtension}`;
    let element = '',
        imports = '',
        themeSwitchCode = '',
        routeFiles = {};

    sources.routeFiles &&
        Object.entries(sources.routeFiles).forEach(([key, value]) => {
            routeFiles[`${path + key}`] = {
                content: value
            };
        });

    if (deps !== null && component !== null) {
        imports += `import ${component} from 'primevue/${component.toLowerCase()}';
`;
        element += `app.component('${component}', ${component});
`;
    }

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
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="**${description}** ${PrimeVue.description}" />
        <!-- Added to show icons in the editor -->
        <link rel="stylesheet" href="https://unpkg.com/primeicons@${dependencies['primeicons'].replace(/[\^|~]/gi, '')}/primeicons.css">
        <title>PrimeVue App</title>
    </head>
    <body>
        <div id="app"></div>
        <script type="module" src="/src/main.js"></script>
    </body>
</html>`
        },
        'postcss.config.js': {
            content: `module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    }
};`
        },
        'tailwind.config.js': {
            content: `/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: ['selector', '[class="p-dark"]'],
    plugins: [primeui]
};
`
        },
        [`${path}main.js`]: {
            content: `import "primeicons/primeicons.css";
import "./style.css";
import "./flags.css";

import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import AppState from './plugins/appState.js';
import Noir from './presets/Noir.js';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import { router } from "./router";
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
import StepperPanel from 'primevue/stepperpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
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

app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});
app.use(AppState);
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
app.component('StepperPanel', StepperPanel);
app.component('Steps', Steps);
app.component('TabMenu', TabMenu);
app.component('TabView', TabView);
app.component('Tabs', Tabs);
app.component('TabList', TabList);
app.component('TabView', TabView);
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
app.component('ThemeSwitcher', ThemeSwitcher);
${element}

app.mount("#app");
`
        },
        [`${path}components/ThemeSwitcher.vue`]: {
            content: `<template>
    <div class="card flex justify-end p-2 mb-4">
        <ul class="flex list-none m-0 p-0 gap-2 items-center">
            <li>
                <button type="button"
                    class="inline-flex w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
                    @click="onThemeToggler">
                    <i :class="\`dark:text-white pi \${iconClass}\`" />
                </button>
            </li>
            <li class="relative">
                <button v-styleclass="{
                    selector: '@next',
                    enterFromClass: 'hidden',
                    enterActiveClass: 'animate-scalein',
                    leaveToClass: 'hidden',
                    leaveActiveClass: 'animate-fadeout',
                    hideOnOutsideClick: true,
                }" type="button"
                    class="inline-flex w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded">
                    <i class="pi pi-palette dark:text-white"></i>
                </button>
                <div
                    class="absolute top-[2.5rem] right-0 hidden w-[16rem] p-3 bg-white dark:bg-surface-800 rounded-md shadow border border-surface-200 dark:border-surface-700 flex-col justify-start items-start gap-3.5 inline-flex origin-top z-10">
                    <div class="flex-col justify-start items-start gap-2 inline-flex pr-4">
                        <span class="text-sm font-medium">Primary Colors</span>
                        <div class="self-stretch justify-start items-start gap-2 inline-flex flex-wrap">
                            <button v-for="primaryColor of primaryColors" :key="primaryColor.name" type="button"
                                :title="primaryColor.name" @click="updateColors('primary', primaryColor)"
                                class="outline outline-2 outline-offset-1 outline-transparent cursor-pointer p-0 rounded-[50%] w-5 h-5"
                                :style="{
                                    backgroundColor: \`\${primaryColor.name === 'noir' ? 'var(--text-color)' : primaryColor.palette['500']}\`,
                                    outlineColor: \`\${selectedPrimaryColor === primaryColor.name ? 'var(--p-primary-color)' : ''}\`,
                                }"></button>
                        </div>
                    </div>
                    <div class="flex-col justify-start items-start gap-2 inline-flex pr-2">
                        <span class="text-sm font-medium">Surface Colors</span>
                        <div class="self-stretch justify-start items-start gap-2 inline-flex">
                            <button v-for="surface of surfaces" :key="surface.name" type="button" :title="surface.name"
                                @click="updateColors('surface', surface)"
                                class="outline outline-2 outline-offset-1 outline-transparent cursor-pointer p-0 rounded-[50%] w-5 h-5"
                                :style="{
                                    backgroundColor: \`\${surface.palette['500']}\`,
            outlineColor: \`\${selectedSurfaceColor === surface.name ? 'var(--p-primary-color)' : ''}\`,
                                }"></button>
                        </div>
                    </div>
                    <div class="flex-col justify-start items-start gap-2 inline-flex w-full">
                        <span class="text-sm font-medium">Preset</span>
                        <div
                            class="inline-flex p-[0.28rem] items-start gap-[0.28rem] rounded-[0.71rem] border border-[#00000003] w-full">
                            <SelectButton v-model="$appState.theme" @update:modelValue="onPresetChange"
                                :options="presets" :unselectable="false" />
                        </div>
                    </div>
                    <div class="inline-flex flex-col justify-start items-start gap-2 w-full pt-4 pb-2">
                        <span class="text-sm font-medium m-0">Ripple Effect</span>
                        <ToggleSwitch :modelValue="rippleActive" @update:modelValue="onRippleChange" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { $t, updatePreset, updateSurfacePalette } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara';
import Nora from '@primevue/themes/nora';

const presets = {
    Aura,
    Lara,
    Nora,
};
export default {
    data() {
        return {
            iconClass: 'pi-moon',
            presets: Object.keys(presets),
            selectedPrimaryColor: 'noir',
            selectedSurfaceColor: null,
            primaryColors: [
                { name: 'noir', palette: {} },
                {
                    name: 'emerald',
                    palette: {
                        50: '#ecfdf5',
                        100: '#d1fae5',
                        200: '#a7f3d0',
                        300: '#6ee7b7',
                        400: '#34d399',
                        500: '#10b981',
                        600: '#059669',
                        700: '#047857',
                        800: '#065f46',
                        900: '#064e3b',
                        950: '#022c22',
                    },
                },
                {
                    name: 'green',
                    palette: {
                        50: '#f0fdf4',
                        100: '#dcfce7',
                        200: '#bbf7d0',
                        300: '#86efac',
                        400: '#4ade80',
                        500: '#22c55e',
                        600: '#16a34a',
                        700: '#15803d',
                        800: '#166534',
                        900: '#14532d',
                        950: '#052e16',
                    },
                },
                {
                    name: 'lime',
                    palette: {
                        50: '#f7fee7',
                        100: '#ecfccb',
                        200: '#d9f99d',
                        300: '#bef264',
                        400: '#a3e635',
                        500: '#84cc16',
                        600: '#65a30d',
                        700: '#4d7c0f',
                        800: '#3f6212',
                        900: '#365314',
                        950: '#1a2e05',
                    },
                },
                {
                    name: 'orange',
                    palette: {
                        50: '#fff7ed',
                        100: '#ffedd5',
                        200: '#fed7aa',
                        300: '#fdba74',
                        400: '#fb923c',
                        500: '#f97316',
                        600: '#ea580c',
                        700: '#c2410c',
                        800: '#9a3412',
                        900: '#7c2d12',
                        950: '#431407',
                    },
                },
                {
                    name: 'amber',
                    palette: {
                        50: '#fffbeb',
                        100: '#fef3c7',
                        200: '#fde68a',
                        300: '#fcd34d',
                        400: '#fbbf24',
                        500: '#f59e0b',
                        600: '#d97706',
                        700: '#b45309',
                        800: '#92400e',
                        900: '#78350f',
                        950: '#451a03',
                    },
                },
                {
                    name: 'yellow',
                    palette: {
                        50: '#fefce8',
                        100: '#fef9c3',
                        200: '#fef08a',
                        300: '#fde047',
                        400: '#facc15',
                        500: '#eab308',
                        600: '#ca8a04',
                        700: '#a16207',
                        800: '#854d0e',
                        900: '#713f12',
                        950: '#422006',
                    },
                },
                {
                    name: 'teal',
                    palette: {
                        50: '#f0fdfa',
                        100: '#ccfbf1',
                        200: '#99f6e4',
                        300: '#5eead4',
                        400: '#2dd4bf',
                        500: '#14b8a6',
                        600: '#0d9488',
                        700: '#0f766e',
                        800: '#115e59',
                        900: '#134e4a',
                        950: '#042f2e',
                    },
                },
                {
                    name: 'cyan',
                    palette: {
                        50: '#ecfeff',
                        100: '#cffafe',
                        200: '#a5f3fc',
                        300: '#67e8f9',
                        400: '#22d3ee',
                        500: '#06b6d4',
                        600: '#0891b2',
                        700: '#0e7490',
                        800: '#155e75',
                        900: '#164e63',
                        950: '#083344',
                    },
                },
                {
                    name: 'sky',
                    palette: {
                        50: '#f0f9ff',
                        100: '#e0f2fe',
                        200: '#bae6fd',
                        300: '#7dd3fc',
                        400: '#38bdf8',
                        500: '#0ea5e9',
                        600: '#0284c7',
                        700: '#0369a1',
                        800: '#075985',
                        900: '#0c4a6e',
                        950: '#082f49',
                    },
                },
                {
                    name: 'blue',
                    palette: {
                        50: '#eff6ff',
                        100: '#dbeafe',
                        200: '#bfdbfe',
                        300: '#93c5fd',
                        400: '#60a5fa',
                        500: '#3b82f6',
                        600: '#2563eb',
                        700: '#1d4ed8',
                        800: '#1e40af',
                        900: '#1e3a8a',
                        950: '#172554',
                    },
                },
                {
                    name: 'indigo',
                    palette: {
                        50: '#eef2ff',
                        100: '#e0e7ff',
                        200: '#c7d2fe',
                        300: '#a5b4fc',
                        400: '#818cf8',
                        500: '#6366f1',
                        600: '#4f46e5',
                        700: '#4338ca',
                        800: '#3730a3',
                        900: '#312e81',
                        950: '#1e1b4b',
                    },
                },
                {
                    name: 'violet',
                    palette: {
                        50: '#f5f3ff',
                        100: '#ede9fe',
                        200: '#ddd6fe',
                        300: '#c4b5fd',
                        400: '#a78bfa',
                        500: '#8b5cf6',
                        600: '#7c3aed',
                        700: '#6d28d9',
                        800: '#5b21b6',
                        900: '#4c1d95',
                        950: '#2e1065',
                    },
                },
                {
                    name: 'purple',
                    palette: {
                        50: '#faf5ff',
                        100: '#f3e8ff',
                        200: '#e9d5ff',
                        300: '#d8b4fe',
                        400: '#c084fc',
                        500: '#a855f7',
                        600: '#9333ea',
                        700: '#7e22ce',
                        800: '#6b21a8',
                        900: '#581c87',
                        950: '#3b0764',
                    },
                },
                {
                    name: 'fuchsia',
                    palette: {
                        50: '#fdf4ff',
                        100: '#fae8ff',
                        200: '#f5d0fe',
                        300: '#f0abfc',
                        400: '#e879f9',
                        500: '#d946ef',
                        600: '#c026d3',
                        700: '#a21caf',
                        800: '#86198f',
                        900: '#701a75',
                        950: '#4a044e',
                    },
                },
                {
                    name: 'pink',
                    palette: {
                        50: '#fdf2f8',
                        100: '#fce7f3',
                        200: '#fbcfe8',
                        300: '#f9a8d4',
                        400: '#f472b6',
                        500: '#ec4899',
                        600: '#db2777',
                        700: '#be185d',
                        800: '#9d174d',
                        900: '#831843',
                        950: '#500724',
                    },
                },
                {
                    name: 'rose',
                    palette: {
                        50: '#fff1f2',
                        100: '#ffe4e6',
                        200: '#fecdd3',
                        300: '#fda4af',
                        400: '#fb7185',
                        500: '#f43f5e',
                        600: '#e11d48',
                        700: '#be123c',
                        800: '#9f1239',
                        900: '#881337',
                        950: '#4c0519',
                    },
                },
            ],
            surfaces: [
                {
                    name: 'slate',
                    palette: {
                        0: '#ffffff',
                        50: '#f8fafc',
                        100: '#f1f5f9',
                        200: '#e2e8f0',
                        300: '#cbd5e1',
                        400: '#94a3b8',
                        500: '#64748b',
                        600: '#475569',
                        700: '#334155',
                        800: '#1e293b',
                        900: '#0f172a',
                        950: '#020617',
                    },
                },
                {
                    name: 'gray',
                    palette: {
                        0: '#ffffff',
                        50: '#f9fafb',
                        100: '#f3f4f6',
                        200: '#e5e7eb',
                        300: '#d1d5db',
                        400: '#9ca3af',
                        500: '#6b7280',
                        600: '#4b5563',
                        700: '#374151',
                        800: '#1f2937',
                        900: '#111827',
                        950: '#030712',
                    },
                },
                {
                    name: 'zinc',
                    palette: {
                        0: '#ffffff',
                        50: '#fafafa',
                        100: '#f4f4f5',
                        200: '#e4e4e7',
                        300: '#d4d4d8',
                        400: '#a1a1aa',
                        500: '#71717a',
                        600: '#52525b',
                        700: '#3f3f46',
                        800: '#27272a',
                        900: '#18181b',
                        950: '#09090b',
                    },
                },
                {
                    name: 'neutral',
                    palette: {
                        0: '#ffffff',
                        50: '#fafafa',
                        100: '#f5f5f5',
                        200: '#e5e5e5',
                        300: '#d4d4d4',
                        400: '#a3a3a3',
                        500: '#737373',
                        600: '#525252',
                        700: '#404040',
                        800: '#262626',
                        900: '#171717',
                        950: '#0a0a0a',
                    },
                },
                {
                    name: 'stone',
                    palette: {
                        0: '#ffffff',
                        50: '#fafaf9',
                        100: '#f5f5f4',
                        200: '#e7e5e4',
                        300: '#d6d3d1',
                        400: '#a8a29e',
                        500: '#78716c',
                        600: '#57534e',
                        700: '#44403c',
                        800: '#292524',
                        900: '#1c1917',
                        950: '#0c0a09',
                    },
                },
                {
                    name: 'soho',
                    palette: {
                        0: '#ffffff',
                        50: '#f4f4f4',
                        100: '#e8e9e9',
                        200: '#d2d2d4',
                        300: '#bbbcbe',
                        400: '#a5a5a9',
                        500: '#8e8f93',
                        600: '#77787d',
                        700: '#616268',
                        800: '#4a4b52',
                        900: '#34343d',
                        950: '#1d1e27',
                    },
                },
                {
                    name: 'viva',
                    palette: {
                        0: '#ffffff',
                        50: '#f3f3f3',
                        100: '#e7e7e8',
                        200: '#cfd0d0',
                        300: '#b7b8b9',
                        400: '#9fa1a1',
                        500: '#87898a',
                        600: '#6e7173',
                        700: '#565a5b',
                        800: '#3e4244',
                        900: '#262b2c',
                        950: '#0e1315',
                    },
                },
                {
                    name: 'ocean',
                    palette: {
                        0: '#ffffff',
                        50: '#fbfcfc',
                        100: '#F7F9F8',
                        200: '#EFF3F2',
                        300: '#DADEDD',
                        400: '#B1B7B6',
                        500: '#828787',
                        600: '#5F7274',
                        700: '#415B61',
                        800: '#29444E',
                        900: '#183240',
                        950: '#0c1920',
                    },
                },
            ],
        };
    },
    methods: {
        onThemeToggler() {
            const root = document.getElementsByTagName('html')[0];

            root.classList.toggle('p-dark');
            this.iconClass = this.iconClass === 'pi-moon' ? 'pi-sun' : 'pi-moon';
        },
        getPresetExt() {
            const color = this.primaryColors.find(
                (c) => c.name === this.selectedPrimaryColor
            );

            if (color.name === 'noir') {
                return {
                    semantic: {
                        primary: {
                            50: '{surface.50}',
                            100: '{surface.100}',
                            200: '{surface.200}',
                            300: '{surface.300}',
                            400: '{surface.400}',
                            500: '{surface.500}',
                            600: '{surface.600}',
                            700: '{surface.700}',
                            800: '{surface.800}',
                            900: '{surface.900}',
                            950: '{surface.950}',
                        },
                        colorScheme: {
                            light: {
                                primary: {
                                    color: '{primary.950}',
                                    contrastColor: '#ffffff',
                                    hoverColor: '{primary.900}',
                                    activeColor: '{primary.800}',
                                },
                                highlight: {
                                    background: '{primary.950}',
                                    focusBackground: '{primary.700}',
                                    color: '#ffffff',
                                    focusColor: '#ffffff',
                                },
                            },
                            dark: {
                                primary: {
                                    color: '{primary.50}',
                                    contrastColor: '{primary.950}',
                                    hoverColor: '{primary.100}',
                                    activeColor: '{primary.200}',
                                },
                                highlight: {
                                    background: '{primary.50}',
                                    focusBackground: '{primary.300}',
                                    color: '{primary.950}',
                                    focusColor: '{primary.950}',
                                },
                            },
                        },
                    },
                };
            } else {
                if (this.$appState.theme === 'Nora') {
                    return {
                        semantic: {
                            primary: color.palette,
                            colorScheme: {
                                light: {
                                    primary: {
                                        color: '{primary.600}',
                                        contrastColor: '#ffffff',
                                        hoverColor: '{primary.700}',
                                        activeColor: '{primary.800}',
                                    },
                                    highlight: {
                                        background: '{primary.600}',
                                        focusBackground: '{primary.700}',
                                        color: '#ffffff',
                                        focusColor: '#ffffff',
                                    },
                                },
                                dark: {
                                    primary: {
                                        color: '{primary.500}',
                                        contrastColor: '{surface.900}',
                                        hoverColor: '{primary.400}',
                                        activeColor: '{primary.300}',
                                    },
                                    highlight: {
                                        background: '{primary.500}',
                                        focusBackground: '{primary.400}',
                                        color: '{surface.900}',
                                        focusColor: '{surface.900}',
                                    },
                                },
                            },
                        },
                    };
                } else {
                    return {
                        semantic: {
                            primary: color.palette,
                            colorScheme: {
                                light: {
                                    primary: {
                                        color: '{primary.500}',
                                        contrastColor: '#ffffff',
                                        hoverColor: '{primary.600}',
                                        activeColor: '{primary.700}',
                                    },
                                    highlight: {
                                        background: '{primary.50}',
                                        focusBackground: '{primary.100}',
                                        color: '{primary.700}',
                                        focusColor: '{primary.800}',
                                    },
                                },
                                dark: {
                                    primary: {
                                        color: '{primary.400}',
                                        contrastColor: '{surface.900}',
                                        hoverColor: '{primary.300}',
                                        activeColor: '{primary.200}',
                                    },
                                    highlight: {
                                        background:
                                            'color-mix(in srgb, {primary.400}, transparent 84%)',
                                        focusBackground:
                                            'color-mix(in srgb, {primary.400}, transparent 76%)',
                                        color: 'rgba(255,255,255,.87)',
                                        focusColor: 'rgba(255,255,255,.87)',
                                    },
                                },
                            },
                        },
                    };
                }
            }
        },
        updateColors(type, color) {
            if (type === 'primary') this.selectedPrimaryColor = color.name;
            else if (type === 'surface') this.selectedSurfaceColor = color.name;

            this.applyTheme(type, color);
        },
        applyTheme(type, color) {
            if (type === 'primary') {
                updatePreset(this.getPresetExt());
            } else if (type === 'surface') {
                updateSurfacePalette(color.palette);
            }
        },
        onRippleChange(value) {
            this.$primevue.config.ripple = value;
        },
        onPresetChange(value) {
            this.$appState.theme = value;
            const preset = presets[value];
            const surfacePalette = this.surfaces.find(
                (s) => s.name === this.selectedSurfaceColor
            )?.palette;

            $t()
                .preset(preset)
                .preset(this.getPresetExt())
                .surfacePalette(surfacePalette)
                .use({ useDefaultOptions: true });
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
        },
        [`${path}plugins/appState.js`]: {
            content: `import { reactive } from 'vue';

        export default {
            install: (app) => {
                const _appState = reactive({ theme: 'Aura', darkTheme: false });

                app.config.globalProperties.$appState = _appState;
            }
        };
        `
        },
        [`${path}presets/Noir.js`]: {
            content: `import { definePreset } from '@primevue/themes';
        import Aura from '@primevue/themes/aura';

        const Noir = definePreset(Aura, {
            semantic: {
                primary: {
                50: '{surface.50}',
                100: '{surface.100}',
                200: '{surface.200}',
                300: '{surface.300}',
                400: '{surface.400}',
                500: '{surface.500}',
                600: '{surface.600}',
                700: '{surface.700}',
                800: '{surface.800}',
                900: '{surface.900}',
                950: '{surface.950}'
                },
                colorScheme: {
                    light: {
                        primary: {
                        color: '{primary.950}',
                        contrastColor: '#ffffff',
                        hoverColor: '{primary.900}',
                        activeColor: '{primary.800}'
                        },
                        highlight: {
                        background: '{primary.950}',
                        focusBackground: '{primary.700}',
                        color: '#ffffff',
                        focusColor: '#ffffff'
                        },
                    },
                    dark: {
                        primary: {
                        color: '{primary.50}',
                        contrastColor: '{primary.950}',
                        hoverColor: '{primary.100}',
                        activeColor: '{primary.200}'
                        },
                        highlight: {
                        background: '{primary.50}',
                        focusBackground: '{primary.300}',
                        color: '{primary.950}',
                        focusColor: '{primary.950}'
                        }
                    }
                }
            }
        });

        export default Noir;
        `
        },
        [`${path}style.css`]: {
            content: staticStyles.global
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
        ...extFiles
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

    return { files, dependencies, sourceFileName };
};

const staticStyles = {
    global: `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
    --body-bg: var(--p-surface-50);
    --body-text-color: var(--p-surface-900);
    --card-border: 1px solid var(--border-color);
    --card-bg: var(--p-surface-0);
    --border-color: var(--p-surface-200);
    --text-color: var(--p-surface-700);
    --overlay-background: #ffffff;
}

:root[class='p-dark'] {
    --body-bg: var(--p-surface-950);
    --body-text-color: var(--p-surface-50);
    --card-border: 1px solid transparent;
    --card-bg: var(--p-surface-900);
    --border-color: rgba(255, 255, 255, 0.1);
    --text-color: var(--p-surface-0);
    --overlay-background: var(--p-surface-900);
}

html {
    font-size: 14px;
}

body {
    margin: 0px;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--body-bg);
    font-weight: normal;
    color: var(--body-text-color);
    padding: 1rem;
}

.card {
    background: var(--card-bg);
    border: var(--card-border);
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}
`,
    flags: `span.flag{width:44px;height:30px;display:inline-block;}img.flag{width:30px}.flag{background:url(https://primefaces.org/cdn/primevue/images/flag/flags_responsive.png) no-repeat;background-size:100%;vertical-align: middle;}.flag-ad{background-position:0 .413223%}.flag-ae{background-position:0 .826446%}.flag-af{background-position:0 1.239669%}.flag-ag{background-position:0 1.652893%}.flag-ai{background-position:0 2.066116%}.flag-al{background-position:0 2.479339%}.flag-am{background-position:0 2.892562%}.flag-an{background-position:0 3.305785%}.flag-ao{background-position:0 3.719008%}.flag-aq{background-position:0 4.132231%}.flag-ar{background-position:0 4.545455%}.flag-as{background-position:0 4.958678%}.flag-at{background-position:0 5.371901%}.flag-au{background-position:0 5.785124%}.flag-aw{background-position:0 6.198347%}.flag-az{background-position:0 6.61157%}.flag-ba{background-position:0 7.024793%}.flag-bb{background-position:0 7.438017%}.flag-bd{background-position:0 7.85124%}.flag-be{background-position:0 8.264463%}.flag-bf{background-position:0 8.677686%}.flag-bg{background-position:0 9.090909%}.flag-bh{background-position:0 9.504132%}.flag-bi{background-position:0 9.917355%}.flag-bj{background-position:0 10.330579%}.flag-bm{background-position:0 10.743802%}.flag-bn{background-position:0 11.157025%}.flag-bo{background-position:0 11.570248%}.flag-br{background-position:0 11.983471%}.flag-bs{background-position:0 12.396694%}.flag-bt{background-position:0 12.809917%}.flag-bv{background-position:0 13.22314%}.flag-bw{background-position:0 13.636364%}.flag-by{background-position:0 14.049587%}.flag-bz{background-position:0 14.46281%}.flag-ca{background-position:0 14.876033%}.flag-cc{background-position:0 15.289256%}.flag-cd{background-position:0 15.702479%}.flag-cf{background-position:0 16.115702%}.flag-cg{background-position:0 16.528926%}.flag-ch{background-position:0 16.942149%}.flag-ci{background-position:0 17.355372%}.flag-ck{background-position:0 17.768595%}.flag-cl{background-position:0 18.181818%}.flag-cm{background-position:0 18.595041%}.flag-cn{background-position:0 19.008264%}.flag-co{background-position:0 19.421488%}.flag-cr{background-position:0 19.834711%}.flag-cu{background-position:0 20.247934%}.flag-cv{background-position:0 20.661157%}.flag-cx{background-position:0 21.07438%}.flag-cy{background-position:0 21.487603%}.flag-cz{background-position:0 21.900826%}.flag-de{background-position:0 22.31405%}.flag-dj{background-position:0 22.727273%}.flag-dk{background-position:0 23.140496%}.flag-dm{background-position:0 23.553719%}.flag-do{background-position:0 23.966942%}.flag-dz{background-position:0 24.380165%}.flag-ec{background-position:0 24.793388%}.flag-ee{background-position:0 25.206612%}.flag-eg{background-position:0 25.619835%}.flag-eh{background-position:0 26.033058%}.flag-er{background-position:0 26.446281%}.flag-es{background-position:0 26.859504%}.flag-et{background-position:0 27.272727%}.flag-fi{background-position:0 27.68595%}.flag-fj{background-position:0 28.099174%}.flag-fk{background-position:0 28.512397%}.flag-fm{background-position:0 28.92562%}.flag-fo{background-position:0 29.338843%}.flag-fr{background-position:0 29.752066%}.flag-ga{background-position:0 30.165289%}.flag-gd{background-position:0 30.578512%}.flag-ge{background-position:0 30.991736%}.flag-gf{background-position:0 31.404959%}.flag-gh{background-position:0 31.818182%}.flag-gi{background-position:0 32.231405%}.flag-gl{background-position:0 32.644628%}.flag-gm{background-position:0 33.057851%}.flag-gn{background-position:0 33.471074%}.flag-gp{background-position:0 33.884298%}.flag-gq{background-position:0 34.297521%}.flag-gr{background-position:0 34.710744%}.flag-gs{background-position:0 35.123967%}.flag-gt{background-position:0 35.53719%}.flag-gu{background-position:0 35.950413%}.flag-gw{background-position:0 36.363636%}.flag-gy{background-position:0 36.77686%}.flag-hk{background-position:0 37.190083%}.flag-hm{background-position:0 37.603306%}.flag-hn{background-position:0 38.016529%}.flag-hr{background-position:0 38.429752%}.flag-ht{background-position:0 38.842975%}.flag-hu{background-position:0 39.256198%}.flag-id{background-position:0 39.669421%}.flag-ie{background-position:0 40.082645%}.flag-il{background-position:0 40.495868%}.flag-in{background-position:0 40.909091%}.flag-io{background-position:0 41.322314%}.flag-iq{background-position:0 41.735537%}.flag-ir{background-position:0 42.14876%}.flag-is{background-position:0 42.561983%}.flag-it{background-position:0 42.975207%}.flag-jm{background-position:0 43.38843%}.flag-jo{background-position:0 43.801653%}.flag-jp{background-position:0 44.214876%}.flag-ke{background-position:0 44.628099%}.flag-kg{background-position:0 45.041322%}.flag-kh{background-position:0 45.454545%}.flag-ki{background-position:0 45.867769%}.flag-km{background-position:0 46.280992%}.flag-kn{background-position:0 46.694215%}.flag-kp{background-position:0 47.107438%}.flag-kr{background-position:0 47.520661%}.flag-kw{background-position:0 47.933884%}.flag-ky{background-position:0 48.347107%}.flag-kz{background-position:0 48.760331%}.flag-la{background-position:0 49.173554%}.flag-lb{background-position:0 49.586777%}.flag-lc{background-position:0 50%}.flag-li{background-position:0 50.413223%}.flag-lk{background-position:0 50.826446%}.flag-lr{background-position:0 51.239669%}.flag-ls{background-position:0 51.652893%}.flag-lt{background-position:0 52.066116%}.flag-lu{background-position:0 52.479339%}.flag-lv{background-position:0 52.892562%}.flag-ly{background-position:0 53.305785%}.flag-ma{background-position:0 53.719008%}.flag-mc{background-position:0 54.132231%}.flag-md{background-position:0 54.545455%}.flag-me{background-position:0 54.958678%}.flag-mg{background-position:0 55.371901%}.flag-mh{background-position:0 55.785124%}.flag-mk{background-position:0 56.198347%}.flag-ml{background-position:0 56.61157%}.flag-mm{background-position:0 57.024793%}.flag-mn{background-position:0 57.438017%}.flag-mo{background-position:0 57.85124%}.flag-mp{background-position:0 58.264463%}.flag-mq{background-position:0 58.677686%}.flag-mr{background-position:0 59.090909%}.flag-ms{background-position:0 59.504132%}.flag-mt{background-position:0 59.917355%}.flag-mu{background-position:0 60.330579%}.flag-mv{background-position:0 60.743802%}.flag-mw{background-position:0 61.157025%}.flag-mx{background-position:0 61.570248%}.flag-my{background-position:0 61.983471%}.flag-mz{background-position:0 62.396694%}.flag-na{background-position:0 62.809917%}.flag-nc{background-position:0 63.22314%}.flag-ne{background-position:0 63.636364%}.flag-nf{background-position:0 64.049587%}.flag-ng{background-position:0 64.46281%}.flag-ni{background-position:0 64.876033%}.flag-nl{background-position:0 65.289256%}.flag-no{background-position:0 65.702479%}.flag-np{background-position:0 66.115702%}.flag-nr{background-position:0 66.528926%}.flag-nu{background-position:0 66.942149%}.flag-nz{background-position:0 67.355372%}.flag-om{background-position:0 67.768595%}.flag-pa{background-position:0 68.181818%}.flag-pe{background-position:0 68.595041%}.flag-pf{background-position:0 69.008264%}.flag-pg{background-position:0 69.421488%}.flag-ph{background-position:0 69.834711%}.flag-pk{background-position:0 70.247934%}.flag-pl{background-position:0 70.661157%}.flag-pm{background-position:0 71.07438%}.flag-pn{background-position:0 71.487603%}.flag-pr{background-position:0 71.900826%}.flag-pt{background-position:0 72.31405%}.flag-pw{background-position:0 72.727273%}.flag-py{background-position:0 73.140496%}.flag-qa{background-position:0 73.553719%}.flag-re{background-position:0 73.966942%}.flag-ro{background-position:0 74.380165%}.flag-rs{background-position:0 74.793388%}.flag-ru{background-position:0 75.206612%}.flag-rw{background-position:0 75.619835%}.flag-sa{background-position:0 76.033058%}.flag-sb{background-position:0 76.446281%}.flag-sc{background-position:0 76.859504%}.flag-sd{background-position:0 77.272727%}.flag-se{background-position:0 77.68595%}.flag-sg{background-position:0 78.099174%}.flag-sh{background-position:0 78.512397%}.flag-si{background-position:0 78.92562%}.flag-sj{background-position:0 79.338843%}.flag-sk{background-position:0 79.752066%}.flag-sl{background-position:0 80.165289%}.flag-sm{background-position:0 80.578512%}.flag-sn{background-position:0 80.991736%}.flag-so{background-position:0 81.404959%}.flag-sr{background-position:0 81.818182%}.flag-ss{background-position:0 82.231405%}.flag-st{background-position:0 82.644628%}.flag-sv{background-position:0 83.057851%}.flag-sy{background-position:0 83.471074%}.flag-sz{background-position:0 83.884298%}.flag-tc{background-position:0 84.297521%}.flag-td{background-position:0 84.710744%}.flag-tf{background-position:0 85.123967%}.flag-tg{background-position:0 85.53719%}.flag-th{background-position:0 85.950413%}.flag-tj{background-position:0 86.363636%}.flag-tk{background-position:0 86.77686%}.flag-tl{background-position:0 87.190083%}.flag-tm{background-position:0 87.603306%}.flag-tn{background-position:0 88.016529%}.flag-to{background-position:0 88.429752%}.flag-tp{background-position:0 88.842975%}.flag-tr{background-position:0 89.256198%}.flag-tt{background-position:0 89.669421%}.flag-tv{background-position:0 90.082645%}.flag-tw{background-position:0 90.495868%}.flag-ty{background-position:0 90.909091%}.flag-tz{background-position:0 91.322314%}.flag-ua{background-position:0 91.735537%}.flag-ug{background-position:0 92.14876%}.flag-gb,.flag-uk{background-position:0 92.561983%}.flag-um{background-position:0 92.975207%}.flag-us{background-position:0 93.38843%}.flag-uy{background-position:0 93.801653%}.flag-uz{background-position:0 94.214876%}.flag-va{background-position:0 94.628099%}.flag-vc{background-position:0 95.041322%}.flag-ve{background-position:0 95.454545%}.flag-vg{background-position:0 95.867769%}.flag-vi{background-position:0 96.280992%}.flag-vn{background-position:0 96.694215%}.flag-vu{background-position:0 97.107438%}.flag-wf{background-position:0 97.520661%}.flag-ws{background-position:0 97.933884%}.flag-ye{background-position:0 98.347107%}.flag-za{background-position:0 98.760331%}.flag-zm{background-position:0 99.173554%}.flag-zr{background-position:0 99.586777%}.flag-zw{background-position:0 100%}`
};

export { getVueApp };
