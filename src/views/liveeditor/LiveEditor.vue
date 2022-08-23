<template>
    <span v-if="showEditor" class="flex justify-content-end">
        <SplitButton :model="items" label="Edit in CodeSandbox" class="liveEditorSplitButton" @click="openDefaultCSB" v-show="false"/>
    </span>
</template>

<script>
import EventBus from '@/AppEventBus';
import { services, data } from './LiveEditorData';

const sourceTypes = ['options-api', 'composition-api', 'browser-source'];

export default {
    data() {
        return {
            sandbox_id: null,
            showCodeHighlight: false,
            items: [
                {label: "Options API", command: () => { this.postSandboxParameters('options-api') }},
                {label: "Composition API", command: () => { this.postSandboxParameters('composition-api') }},
                {label: "Browser Source", command: () => { this.postSandboxParameters('browser-source') }}
            ]
        }
    },
    props: {
        name: {
            type: String,
            default: null
        },
        sources: {
            type: Object,
            default: null
        },
        service: {
            type: Array,
            default: null
        },
        data: {
            type: Array,
            default: null
        },
        extPages: {
            type: Array,
            default: null
        },
        dependencies: {
            type: Object,
            default: null
        },
        extFiles: {
            type: Object,
            default: null
        },
        component: {
            type: String,
            default: null
        }
    },
    runDemoListener: null,
    mounted() {
        this.runDemoListener = (type) => {
            this.postSandboxParameters(type);
        };
        EventBus.on('run-demo', this.runDemoListener);
    },
    beforeUnmount() {
        EventBus.off('run-demo', this.runDemoListener);
    },
    methods: {
        postSandboxParameters(sourceType) {
            fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(this.getSandboxParameters(sourceType))
            })
            .then(response => response.json())
            .then(data => window.open(`https://codesandbox.io/s/${data.sandbox_id}`, '_blank'))
            .catch(() => this.showCodeHighlight = true );
        },

        createSandboxParameters(sourceType, nameWithExt, files, extDependencies) {
            /* eslint-disable */
            let extFiles = this.extFiles ? (this.extFiles[sourceType] ? {...this.extFiles[sourceType]} : Object.keys(this.extFiles).filter(k => !sourceTypes.includes(k)).reduce((result, current) => (result[current] = this.extFiles[current]) && result, {})) : {};
            Object.entries(extFiles).forEach(([key, value]) => extFiles[key].content && (extFiles[key].content = value.content.replaceAll('<\\/script>', '<\/script>')));

            let extIndexCSS = extFiles['index.css'] || '';
            delete extFiles['index.css'];

            const dependencies = require('../../../package.json') ? require('../../../package.json').devDependencies : {};

            let defaultCss = {
                content: `html {
        font-size: 14px;
    }

    body {
        background-color: var(--surface-ground);
        font-family: var(--font-family);
        font-weight: normal;
        color: var(--text-color);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: .5em;
        margin-bottom: 50px;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 1.5rem 0 1rem 0;
        font-family: inherit;
        font-weight: 600;
        line-height: 1.2;
        color: inherit;
    }

    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.75rem; }
    h4 { font-size: 1.5rem; }
    h5 { font-size: 1.25rem; }
    h6 { font-size: 1rem; }
    p {
        line-height: 1.5;
        margin: 0 0 1rem 0;
    }

    .card {
        background: var(--surface-card);
        padding: 2rem;
        border-radius: 10px;
        margin-bottom: 2rem;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    @keyframes pulse {
        0% {
            background-color: rgba(165, 165, 165, 0.1)
        }
        50% {
            background-color: rgba(165, 165, 165, 0.3)
        }
        100% {
            background-color: rgba(165, 165, 165, 0.1)
        }
    }

    .customer-badge {
        border-radius: 2px;
        padding: .25em .5rem;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: .3px;
    }

    .customer-badge.status-qualified {
        background-color: #C8E6C9;
        color: #256029;
    }

    .customer-badge.status-unqualified {
        background-color: #FFCDD2;
        color: #C63737;
    }

    .customer-badge.status-negotiation {
        background-color: #FEEDAF;
        color: #8A5340;
    }

    .customer-badge.status-new {
        background-color: #B3E5FC;
        color: #23547B;
    }

    .customer-badge.status-renewal {
        background-color: #ECCFFF;
        color: #694382;
    }

    .customer-badge.status-proposal {
        background-color: #FFD8B2;
        color: #805B36;
    }

    .product-badge {
        border-radius: 2px;
        padding: .25em .5rem;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: .3px;
    }

    .product-badge.status-instock {
        background: #C8E6C9;
        color: #256029;
    }

    .product-badge.status-outofstock {
        background: #FFCDD2;
        color: #C63737;
    }

    .product-badge.status-lowstock {
        background: #FEEDAF;
        color: #8A5340;
    }

    .order-badge {
        border-radius: 2px;
        padding: .25em .5rem;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: .3px;
    }

    .order-badge.order-delivered {
        background: #C8E6C9;
        color: #256029;
    }

    .order-badge.order-cancelled {
        background: #FFCDD2;
        color: #C63737;
    }

    .order-badge.order-pending {
        background: #FEEDAF;
        color: #8A5340;
    }

    .order-badge.order-returned {
        background: #ECCFFF;
        color: #694382;
    }

    .image-text {
        margin-left: .5rem;
    }

    .p-multiselect-representative-option {
        display: inline-block;
        vertical-align: middle;
    }

    .p-multiselect-representative-option img {
        vertical-align: middle;
        width: 24px;
    }

    .p-multiselect-representative-option span {
        margin-top: .125rem;
    }

    .country-item {
        display: flex;
        align-items: center;
    }

    .country-item img.flag {
        width: 18px;
        margin-right: .5rem;
    }

    .flag {
        vertical-align: middle;
    }

    span.flag {
        width:44px;
        height:30px;
        display:inline-block;
    }

    img.flag {
        width:30px
    }

    .true-icon {
        color: #256029;
    }

    .false-icon {
        color: #C63737;
    }
    ${extIndexCSS}
    `
};

            if (sourceType === 'browser-source') {
                return {
                    files: {
                        'index.css': defaultCss,
                        ...files
                    }
                }
            }

            return {
                files: {
                    'package.json': {
                        content: {
                            main: `src/demo/${nameWithExt}`,
                            dependencies: {
                                ...extDependencies,
                                'vue': dependencies['vue'],
                                'primevue': '^3.16.2',
                                'primeflex': dependencies['primeflex'],
                                'primeicons': dependencies['primeicons'],
                                '@babel/cli': dependencies['@babel/cli'],
                                'core-js': dependencies['core-js'],
                                'vue-router': dependencies['vue-router']
                            },
                            devDependencies: {
                                '@vue/cli-plugin-babel': dependencies['@vue/cli-plugin-babel'],
                                '@vue/cli-plugin-eslint': dependencies['@vue/cli-plugin-eslint'],
                                '@vue/cli-service': dependencies['@vue/cli-service'],
                                '@vue/compiler-sfc': dependencies['@vue/compiler-sfc'],
                                'eslint': dependencies['eslint'],
                                'eslint-plugin-vue': dependencies['eslint-plugin-vue']
                            }
                        }
                    },
                    'babel.config.js': {
                        content: `module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ]
}`
                    },
                    '.eslintrc.js': {
                        content: `module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    }
}`
                    },
                    'src/index.css': defaultCss,
                    ...files,
                    ...extFiles
                }
            }
        },

        getSandboxParameters(sourceType) {
            /* eslint-disable */
            let name = this.name;
            let extension = '.vue';
            let extDependencies = this.dependencies || {};
            let extImport = '';
            let extElement = '';
            let content = this.sources[sourceType].content.replaceAll('<\\/script>', '<\/script>');
            let imports = this.sources[sourceType].imports ? this.sources[sourceType].imports.replaceAll('<\\/script>', '<\/script>') : '';
            let pages = this.extPages ? this.extPages : '';
            let _files = {}, element = '';

            if (this.service) {
                let dataArr = [], serviceArr = [], path = '';

                this.service.forEach(el => {
                    serviceArr.push(el.split(','))
                })

                if (this.data) {
                    this.data.forEach(el => {
                        dataArr.push(el.split(','))
                    })

                    if (dataArr) {
                        dataArr.forEach(el => {
                            let _path = `${el}.json`;
                            path = sourceType === 'browser-source' ? _path : `public/demo/data/${_path}`;

                            _files[path] = {
                                content: data[el]
                            };
                        });
                    }
                }

                serviceArr.forEach(serv => {
                    path = sourceType === 'browser-source' ? `${serv}.js` : `src/service/${serv}.js`;
                    let _content = sourceType === 'browser-source' ?
                                `${services[serv].replaceAll('export default class', 'class').replaceAll('demo/data/', './')}` :
                                `${services[serv]}`;

                    _files[path] = {
                        content: _content
                    }
                })
            }

            if (sourceType === 'browser-source') {
                _files['index.html'] = {
                    content: `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>${name}</title>

        <!-- PrimeVue -->
        <link href="https://unpkg.com/primevue@^3/resources/themes/lara-light-indigo/theme.css" rel="stylesheet" />
        <link href="https://unpkg.com/primevue@^3/resources/primevue.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/primeflex@^3/primeflex.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/primeicons/primeicons.css" rel="stylesheet" />

        <!-- Dependencies -->
        <script src="https://unpkg.com/vue@next"><\/script>
        <script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>

        <!-- Demo -->
        ${imports}
        <link href="./index.css" rel="stylesheet" />
    </head>
    <body>${content}
    </body>
</html>`
                }
            }
            else {
                element += `import ${name} from "./${name}.vue"`;

                if (this.component) {
                    extImport += `import ${this.component} from 'primevue/${this.component.toLowerCase()}';`
                    extElement += `app.component('${this.component}', ${this.component});`;
                }

                if (pages) {
                    let routes = [], routeImports = '';

                    pages.forEach((page, i) => {
                        _files[`src/components/${page.tabName}.vue`] = {
                            'content': `${page.content.replace('<\\/script>', '<\/script>')}`
                        }

                        let route = '';

                        routeImports += `import ${page.tabName} from './components/${page.tabName}.vue';
    `;

                        if(i === 0) {
                            route += `{
        path: "/",
        component: ${page.tabName}
    }`;
                        }
                        else {
                            route += `{
        path: "/${page.tabName.slice(0, -4).toLowerCase()}",
        component: ${page.tabName}
    }`;
                        }

                        routes.push(route);
                    })

                    _files['src/router.js'] = {
                        'content': `import { createRouter, createWebHistory } from "vue-router";
${routeImports}
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ${routes}
    ]
});
`
                    }
                }
                else {
                    _files[`src/router.js`] = {
                        content: `import { createRouter, createWebHistory } from "vue-router";
    ${element}

    export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: ${name} }]
});`
                    }
                }

                _files['src/main.js'] = {
                    content: `import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./index.css";

import { createApp } from "vue";
${element}
import { router } from "./router";
import PrimeVue from "primevue/config";
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from "primevue/badgedirective";
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';
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
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice'
import Divider from 'primevue/divider';
import Dock from 'primevue/dock';
import Dropdown from 'primevue/dropdown';
import DynamicDialog from 'primevue/dynamicdialog';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import Row from 'primevue/row';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import Timeline from 'primevue/timeline';
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import VirtualScroller from 'primevue/virtualscroller';
${extImport}

const app = createApp(${name});

app.use(PrimeVue, { ripple: true });
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);

app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);

app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('AutoComplete', AutoComplete);
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('Badge', Badge);
app.component('BlockUI', BlockUI);
app.component('Breadcrumb', Breadcrumb);
app.component('Button', Button);
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
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('DeferredContent', DeferredContent);
app.component('Dialog', Dialog);
app.component('Divider', Divider);
app.component('Dock', Dock);
app.component('Dropdown', Dropdown);
app.component('DynamicDialog', DynamicDialog);
app.component('Fieldset', Fieldset);
app.component('FileUpload', FileUpload);
app.component('Galleria', Galleria);
app.component('Image', Image);
app.component('InlineMessage', InlineMessage);
app.component('Inplace', Inplace);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('Knob', Knob);
app.component('Listbox', Listbox);
app.component('MegaMenu', MegaMenu);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('Message', Message);
app.component('MultiSelect', MultiSelect);
app.component('OrderList', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('OverlayPanel', OverlayPanel);
app.component('Paginator', Paginator);
app.component('Panel', Panel);
app.component('PanelMenu', PanelMenu);
app.component('Password', Password);
app.component('PickList', PickList);
app.component('ProgressBar', ProgressBar);
app.component('ProgressSpinner', ProgressSpinner);
app.component('RadioButton', RadioButton);
app.component('Rating', Rating);
app.component('Row', Row);
app.component('SelectButton', SelectButton);
app.component('ScrollPanel', ScrollPanel);
app.component('ScrollTop', ScrollTop);
app.component('Slider', Slider);
app.component('Sidebar', Sidebar);
app.component('Skeleton', Skeleton);
app.component('SpeedDial', SpeedDial);
app.component('SplitButton', SplitButton);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Steps', Steps);
app.component('TabMenu', TabMenu);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Tag', Tag);
app.component('Textarea', Textarea);
app.component('Terminal', Terminal);
app.component('TieredMenu', TieredMenu);
app.component('Timeline', Timeline);
app.component('Toast', Toast);
app.component('Toolbar', Toolbar);
app.component('ToggleButton', ToggleButton);
app.component('Tree', Tree);
app.component('TreeSelect', TreeSelect);
app.component('TreeTable', TreeTable);
app.component('TriStateCheckbox', TriStateCheckbox);
app.component('VirtualScroller', VirtualScroller);
${extElement}

app.mount("#app");
`
                }

                _files['public/index.html'] = {
                    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link href="https://unpkg.com/primeicons/primeicons.css" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
</body>
</html>
`
                }

                _files[`src/${name}${extension}`] = {
                    content: `${content}
`
                }
            }

            return this.createSandboxParameters(sourceType, `${name}${extension}`, _files, extDependencies);
        },

        openDefaultCSB() {
            this.postSandboxParameters(this.defaultSourceType);
        }
    },
    computed: {
        showEditor() {
            return this.$appState.codeSandbox;
        },
        defaultSourceType() {
            return this.$appState.sourceType;
        }
    }
}
</script>
