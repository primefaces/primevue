<template>
    <div :class="['layout-sidebar', {'active': active}]">
        <div class="layout-menu">
            <span>
                <i class="pi pi-home"></i>
                <span>General</span>
            </span>
            <div>
                <router-link to="/setup">Get Started</router-link>
                <router-link to="/theming">Theming</router-link>
                <a href="https://www.primefaces.org/designer/primevue">Designer</a>
                <a href="https://www.primefaces.org/designer/api/primevue/2.0.0">Sass API</a>
                <router-link to="/accessibility">Accessibility</router-link>
                <router-link to="/flexgrid">PrimeFlex</router-link>
                <router-link to="/icons">Icons</router-link>
            </div>

            <span>
                <i class="pi pi-id-card"></i>
                <span>Form</span>
            </span>
            <div>
                <router-link to="/autocomplete">AutoComplete</router-link>
                <router-link to="/calendar">Calendar</router-link>
                <router-link to="/checkbox">Checkbox</router-link>
                <router-link to="/chips">Chips</router-link>
                <router-link to="/colorpicker">ColorPicker</router-link>
                <router-link to="/dropdown">Dropdown</router-link>
                <router-link to="/editor">Editor</router-link>
                <router-link to="/inputgroup">InputGroup</router-link>
                <router-link to="/inputmask">InputMask</router-link>
                <router-link to="/inputnumber">InputNumber</router-link>
                <router-link to="/inputswitch">InputSwitch</router-link>
                <router-link to="/inputtext">InputText</router-link>
                <router-link to="/formlayout">FormLayout</router-link>
                <router-link to="/listbox">Listbox</router-link>
                <router-link to="/multiselect">MultiSelect</router-link>
                <router-link to="/password">Password</router-link>
                <router-link to="/radiobutton">RadioButton</router-link>
                <router-link to="/rating">Rating</router-link>
                <router-link to="/selectbutton">SelectButton</router-link>
                <router-link to="/slider">Slider</router-link>
                <router-link to="/textarea">Textarea</router-link>
                <router-link to="/togglebutton">ToggleButton</router-link>
                <router-link to="/tristatecheckbox">TriCheckbox</router-link>
            </div>

            <span>
                <i class="pi pi-mobile" style="transform: rotate(90deg);"></i>
                <span>Button</span>
            </span>
            <div>
                <router-link to="/button">Button</router-link>
                <router-link to="/splitbutton">SplitButton</router-link>
            </div>

            <span>
                <i class="pi pi-list"></i>
                <span>Data</span>
            </span>
            <div>
                <router-link to="/carousel">Carousel</router-link>
                <router-link to="/datatable">DataTable</router-link>
                <router-link to="/dataview">DataView</router-link>
                <router-link to="/fullcalendar">FullCalendar</router-link>
                <router-link to="/orderlist">OrderList</router-link>
                <router-link to="/organizationchart">OrganizationChart</router-link>
                <router-link to="/paginator">Paginator</router-link>
                <router-link to="/picklist">PickList</router-link>
                <router-link to="/tree">Tree</router-link>
                <router-link to="/treetable">TreeTable</router-link>
            </div>

            <span>
               <i class="pi pi-th-large"></i>
                <span>Panel</span>
            </span>
            <div>
                <router-link to="/accordion">Accordion</router-link>
                <router-link to="/card">Card</router-link>
                <router-link to="/deferredcontent">Deferred</router-link>
                <router-link to="/fieldset">Fieldset</router-link>
                <router-link to="/panel">Panel</router-link>
                <router-link to="/tabview">TabView</router-link>
                <router-link to="/toolbar">Toolbar</router-link>
            </div>

            <span>
                <i class="pi pi-clone"></i>
                <span>Overlay</span>
            </span>
            <div>
                <router-link to="/dialog">Dialog</router-link>
                <router-link to="/overlaypanel">OverlayPanel</router-link>
                <router-link to="/sidebar">Sidebar</router-link>
                 <router-link to="/tooltip">Tooltip</router-link>
            </div>

            <span>
                <i class="pi pi-file-o"></i>
                <span>File</span>
            </span>
            <div>
                <router-link to="/fileupload">Upload</router-link>
            </div>

            <span>
                <i class="pi pi-bars"></i>
                <span>Menu</span>
            </span>
            <div>
                <router-link to="/menumodel">MenuModel</router-link>
                <router-link to="/breadcrumb">Breadcrumb</router-link>
                <router-link to="/contextmenu">ContextMenu</router-link>
                <router-link to="/megamenu">MegaMenu</router-link>
                <router-link to="/menu">Menu</router-link>
                <router-link to="/menubar">Menubar</router-link>
                <router-link to="/panelmenu">PanelMenu</router-link>
                <router-link to="/steps">Steps</router-link>
                <router-link to="/tabmenu">TabMenu</router-link>
                <router-link to="/tieredmenu">TieredMenu</router-link>
            </div>

            <span>
                <i class="pi pi-chart-bar"></i>
                <span>Chart</span>
            </span>
            <div>
                <router-link to="/chart">ChartModel</router-link>
                <router-link to="/chart/pie">Pie</router-link>
                <router-link to="/chart/doughnut">Doughnut</router-link>
                <router-link to="/chart/bar">Bar</router-link>
                <router-link to="/chart/line">Line</router-link>
                <router-link to="/chart/polararea">PolarArea</router-link>
                <router-link to="/chart/radar">Radar</router-link>
                <router-link to="/chart/combo">Combo</router-link>
            </div>

            <span>
                <i class="pi pi-comment"></i>
                <span>Messages</span>
            </span>
            <div>
                <router-link to="/message">Message</router-link>
                <router-link to="/toast">Toast</router-link>
            </div>

            <span>
                <i class="pi pi-image"></i>
                <span>Image</span>
            </span>
            <div>
                <router-link to="/galleria">Galleria</router-link>
            </div>

            <span>
                <i class="pi pi-share-alt"></i>
                <span>Misc</span>
            </span>
            <div>
                <router-link to="/badge">Badge</router-link>
                <router-link to="/blockui">BlockUI</router-link>
                <router-link to="/inplace">Inplace</router-link>
                <router-link to="/progressbar">ProgressBar</router-link>
                <router-link to="/progressspinner">ProgressSpinner</router-link>
                <router-link to="/shadow">Shadow</router-link>
                <router-link to="/terminal">Terminal</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        active: Boolean
    },
    data() {
        return {
            activeMenuIndex: null
        }
    },
    methods: {
        toggleMenu(event, index) {
            this.activeMenuIndex = (this.activeMenuIndex === index) ? null : index;
        }
    }
}
</script>
