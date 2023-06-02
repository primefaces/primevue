import pkg from '../../../package.json';
import { services } from './services';

const PrimeVue = {
    version: '^3.29.2',
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
    primeflex: app_dependencies['primeflex'] || 'latest',
    primeicons: app_dependencies['primeicons'] || 'latest'
};

// create-vue -> https://github.com/vuejs/create-vue
const getVueApp = (props = {}, sourceType) => {
    const path = 'src/';
    const { code: sources, title = 'primevue_demo', description = '', service, extPages, dependencies: deps, component, extFiles } = props;
    const dependencies = { ...core_dependencies, ...deps };

    const fileExtension = '.vue';
    const mainFileName = 'App';
    const sourceFileName = `${path}${mainFileName}${fileExtension}`;
    let element = '';
    let imports = '';
    let routeFiles = {};

    sources.routeFiles &&
        Object.entries(sources.routeFiles).forEach(([key, value]) => {
            routeFiles[`${path + key}`] = {
                content: value
            };
        });

    let extFilesSource = extFiles
        ? extFiles[sourceType.language]
            ? { ...extFiles[sourceType.language] }
            : Object.keys(extFiles)
                  .filter((k) => !sourceTypes.includes(k))
                  .reduce((result, current) => (result[current] = extFiles[current]) && result, {})
        : {};

    if (deps !== null && component !== null) {
        imports += `import ${component} from 'primevue/${component.toLowerCase()}';`;
        element += `app.component('${component}', ${component});`;
    }

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
        [`${path}main.js`]: {
            content: `import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./index.css";
import "./flags.css";

import { createApp } from "vue";
import App from "./App.vue";
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
import FocusTrap from 'primevue/focustrap';
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
${imports}

const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);

app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('focustrap', FocusTrap);

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
${element}

app.mount("#app");
`
        },
        [`${path}index.css`]: {
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
            content: sources
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

    return { files, dependencies, sourceFileName };
};

const staticStyles = {
    global: `html {
    font-size: 14px;
}

body {
    font-family: var(--font-family);
    font-weight: normal;
    background: var(--surface-ground);
    color: var(--text-color);
    padding: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.card {
    background: var(--surface-card);
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}
    `
};

export { getVueApp };
