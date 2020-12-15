<template>
    <div :class="['layout-sidebar', {'active': active}]">
        <div class="layout-menu">
            <div class="menu-category">Vue 3</div>
            <div class="menu-items">
                <a href="https://www.primefaces.org/primevue/showcase/" target="_blank">PrimeVue v3</a>
            </div>

            <div class="menu-category">General</div>
            <div class="menu-items">
                <router-link to="/setup">Get Started</router-link>
                <a href="https://forum.primefaces.org/viewforum.php?f=110" target="_blank">Forum</a>
                <a href="https://discord.gg/gzKFYnpmCY" target="_blank">Discord Chat</a>
                <a href="https://github.com/primefaces/primevue" target="_blank">Source Code</a>
                <router-link to="/support">Support</router-link>
                <a href="https://www.primefaces.org/store" target="_blank">Store</a>
            </div>

            <div class="menu-category">Theming</div>
            <div class="menu-items">
                <router-link to="/theming">Guide</router-link>
                <a href="https://www.primefaces.org/designer/primevue">Theme Designer</a>
                <a href="https://www.primefaces.org/designer-vue">Visual Editor</a>
                <a href="https://www.primefaces.org/designer/api/primevue/2.0.1">SASS API</a>
            </div>

            <div class="menu-category">PrimeFlex</div>
            <div class="menu-items">
                <router-link to="/primeflex">Setup</router-link>
                <router-link to="/display">Display</router-link>
                <router-link to="/elevation">Elevation</router-link>
                <router-link to="/flexbox">FlexBox</router-link>
                <router-link to="/formlayout">Form Layout</router-link>
                <router-link to="/grid">Grid System</router-link>
                <router-link to="/spacing">Spacing</router-link>
                <router-link to="/text">Text</router-link>
            </div>

            <div class="menu-category">PrimeIcons</div>
            <div class="menu-items">
                <router-link to="/icons">Icons v4.0</router-link>
            </div>

            <div class="menu-category">Form</div>
            <div class="menu-items">
                <router-link to="/autocomplete">AutoComplete</router-link>
                <router-link to="/calendar">Calendar</router-link>
                <router-link to="/cascadeselect">CascadeSelect <Tag value="New"></Tag></router-link>
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
                <router-link to="/floatlabel">FloatLabel</router-link>
                <router-link to="/knob">Knob <Tag value="New"></Tag></router-link>
                <router-link to="/listbox">Listbox</router-link>
                <router-link to="/multiselect">MultiSelect</router-link>
                <router-link to="/password">Password</router-link>
                <router-link to="/radiobutton">RadioButton</router-link>
                <router-link to="/rating">Rating</router-link>
                <router-link to="/selectbutton">SelectButton</router-link>
                <router-link to="/slider">Slider</router-link>
                <router-link to="/textarea">Textarea</router-link>
                <router-link to="/togglebutton">ToggleButton</router-link>
                <router-link to="/tristatecheckbox">TriStateCheckbox</router-link>
            </div>

            <div class="menu-category">Button</div>
            <div class="menu-items">
                <router-link to="/button">Button</router-link>
                <router-link to="/splitbutton">SplitButton</router-link>
            </div>

            <div class="menu-category">Data</div>
            <div class="menu-items">
                <router-link to="/datatable" v-slot="{ href, route, navigate, isActive }">
                    <div>
                        <a tabindex="0" @click="toggleSubmenu($event, 'datatable')">DataTable</a>
                        <transition name="p-toggleable-content">
                            <div class="p-toggleable-content" v-show="isSubmenuActive('datatable', isActive)">
                                <ul>
                                    <li><router-link to="/datatable">Documentation</router-link></li>
                                    <li><router-link to="/datatable/basic">Basic</router-link></li>
                                    <li><router-link to="/datatable/dynamiccolumns">Dynamic</router-link></li>
                                    <li><router-link to="/datatable/templating">Templating</router-link></li>
                                    <li><router-link to="/datatable/size">Size</router-link></li>
                                    <li><router-link to="/datatable/gridlines">GridLines</router-link></li>
                                    <li><router-link to="/datatable/striped">Striped</router-link></li>
                                    <li><router-link to="/datatable/colgroup">ColGroup</router-link></li>
                                    <li><router-link to="/datatable/paginator">Paginator</router-link></li>
                                    <li><router-link to="/datatable/sort">Sort</router-link></li>
                                    <li><router-link to="/datatable/filter">Filter</router-link></li>
                                    <li><router-link to="/datatable/selection">Selection</router-link></li>
                                    <li><router-link to="/datatable/lazy">Lazy</router-link></li>
                                    <li><router-link to="/datatable/scroll">Scroll</router-link></li>
                                    <li><router-link to="/datatable/flexscroll">FlexScroll</router-link></li>
                                    <li><router-link to="/datatable/rowexpand">Expand</router-link></li>
                                    <li><router-link to="/datatable/edit">Edit</router-link></li>
                                    <li><router-link to="/datatable/coltoggle">ColToggle</router-link></li>
                                    <li><router-link to="/datatable/colresize">ColResize</router-link></li>
                                    <li><router-link to="/datatable/reorder">Reorder</router-link></li>
                                    <li><router-link to="/datatable/rowgroup">RowGroup</router-link></li>
                                    <li><router-link to="/datatable/contextmenu">ContextMenu</router-link></li>
                                    <li><router-link to="/datatable/responsive">Responsive</router-link></li>
                                    <li><router-link to="/datatable/export">Export</router-link></li>
                                    <li><router-link to="/datatable/state">State</router-link></li>
                                    <li><router-link to="/datatable/style">Style</router-link></li>
                                    <li><router-link to="/datatable/crud">Crud</router-link></li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                </router-link>

                <router-link to="/dataview">DataView</router-link>
                <router-link to="/fullcalendar">FullCalendar</router-link>
                <router-link to="/orderlist">OrderList</router-link>
                <router-link to="/organizationchart">OrganizationChart</router-link>
                <router-link to="/paginator">Paginator</router-link>
                <router-link to="/picklist">PickList</router-link>
                <router-link to="/timeline">Timeline <span class="p-tag">New</span></router-link>
                <router-link to="/tree" v-slot="{ href, route, navigate, isActive }">
                    <div>
                        <a tabindex="0" @click="toggleSubmenu($event, 'tree')">Tree</a>
                        <transition name="p-toggleable-content">
                            <div class="p-toggleable-content" v-show="isSubmenuActive('tree', isActive)">
                                <ul>
                                    <li><router-link to="/tree">Documentation</router-link></li>
                                    <li><router-link to="/tree/selection">Selection</router-link></li>
                                    <li><router-link to="/tree/lazy">Lazy</router-link></li>
                                    <li><router-link to="/tree/templating">Templating</router-link></li>
                                    <li><router-link to="/tree/filter">Filter</router-link></li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                </router-link>
                <router-link to="/treetable" v-slot="{ href, route, navigate, isActive }">
                    <div>
                        <a tabindex="0" @click="toggleSubmenu($event, 'treetable')">TreeTable</a>
                        <transition name="p-toggleable-content">
                            <div class="p-toggleable-content" v-show="isSubmenuActive('treetable', isActive)">
                                <ul>
                                    <li><router-link to="/treetable">Documentation</router-link></li>
                                    <li><router-link to="/treetable/templating">Templating</router-link></li>
                                    <li><router-link to="/treetable/size">Size</router-link></li>
                                    <li><router-link to="/treetable/paginator">Paginator</router-link></li>
                                    <li><router-link to="/treetable/sort">Sort</router-link></li>
                                    <li><router-link to="/treetable/filter">Filter</router-link></li>
                                    <li><router-link to="/treetable/selection">Selection</router-link></li>
                                    <li><router-link to="/treetable/lazy">Lazy</router-link></li>
                                    <li><router-link to="/treetable/coltoggle">ColToggle</router-link></li>
                                    <li><router-link to="/treetable/colresize">Resize</router-link></li>
                                    <li><router-link to="/treetable/responsive">Responsive</router-link></li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                </router-link>
            </div>

            <div class="menu-category">Panel</div>
            <div class="menu-items">
                <router-link to="/accordion">Accordion</router-link>
                <router-link to="/card">Card</router-link>
                <router-link to="/deferredcontent">Deferred</router-link>
                <router-link to="/divider">Divider <Tag value="New"></Tag></router-link>
                <router-link to="/fieldset">Fieldset</router-link>
                <router-link to="/panel">Panel</router-link>
                <router-link to="/scrollpanel">ScrollPanel</router-link>
                <router-link to="/tabview">TabView</router-link>
                <router-link to="/toolbar">Toolbar</router-link>
            </div>

            <div class="menu-category">Overlay</div>
            <div class="menu-items">
                <router-link to="/dialog">Dialog</router-link>
                <router-link to="/overlaypanel">OverlayPanel</router-link>
                <router-link to="/sidebar">Sidebar</router-link>
                <router-link to="/tooltip">Tooltip</router-link>
            </div>

            <div class="menu-category">File</div>
            <div class="menu-items">
                <router-link to="/fileupload">Upload</router-link>
            </div>

            <div class="menu-category">Menu</div>
            <div class="menu-items">
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

            <div class="menu-category">Chart</div>
            <div class="menu-items">
                <router-link to="/chart">ChartModel</router-link>
                <router-link to="/chart/pie">Pie</router-link>
                <router-link to="/chart/doughnut">Doughnut</router-link>
                <router-link to="/chart/bar">Bar</router-link>
                <router-link to="/chart/line">Line</router-link>
                <router-link to="/chart/polararea">PolarArea</router-link>
                <router-link to="/chart/radar">Radar</router-link>
                <router-link to="/chart/combo">Combo</router-link>
            </div>

            <div class="menu-category">Messages</div>
            <div class="menu-items">
                <router-link to="/message">Message</router-link>
                <router-link to="/toast">Toast</router-link>
            </div>

            <div class="menu-category">Media</div>
            <div class="menu-items">
                <router-link to="/carousel">Carousel</router-link>
                <router-link to="/galleria" v-slot="{ href, route, navigate, isActive }">
                    <div>
                        <a tabindex="0" @click="toggleSubmenu($event, 'galleria')">Galleria</a>
                        <transition name="p-toggleable-content">
                            <div class="p-toggleable-content" v-show="isSubmenuActive('galleria', isActive)">
                                <ul>
                                    <li><router-link to="/galleria">Documentation</router-link></li>
                                    <li><router-link to="/galleria/programmatic">Programmatic</router-link></li>
                                    <li><router-link to="/galleria/indicator">Indicator</router-link></li>
                                    <li><router-link to="/galleria/thumbnail">Thumbnail</router-link></li>
                                    <li><router-link to="/galleria/navigator">Navigator</router-link></li>
                                    <li><router-link to="/galleria/responsive">Responsive</router-link></li>
                                    <li><router-link to="/galleria/fullscreen">FullScreen</router-link></li>
                                    <li><router-link to="/galleria/autoplay">AutoPlay</router-link></li>
                                    <li><router-link to="/galleria/caption">Caption</router-link></li>
                                    <li><router-link to="/galleria/advanced">Advanced</router-link></li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                </router-link>
            </div>

            <div class="menu-category">Misc</div>
            <div class="menu-items">
                <router-link to="/accessibility">Accessibility</router-link>
                <router-link to="/avatar">Avatar <Tag value="New"></Tag></router-link>
                <router-link to="/badge">Badge <Tag value="New"></Tag></router-link>
                <router-link to="/chip">Chip <Tag value="New"></Tag></router-link>
                <router-link to="/blockui">BlockUI</router-link>
                <router-link to="/inplace">Inplace</router-link>
                <router-link to="/scrolltop">ScrollTop <Tag value="New"></Tag></router-link>
                <router-link to="/skeleton">Skeleton <Tag value="New"></Tag></router-link>
                <router-link to="/progressbar">ProgressBar</router-link>
                <router-link to="/progressspinner">ProgressSpinner</router-link>
                <router-link to="/ripple">Ripple</router-link>
                <router-link to="/tag">Tag <Tag value="New"></Tag></router-link>
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
            activeSubmenus: {}
        }
    },
    methods: {
        toggleSubmenu(event, name) {
            this.activeSubmenus[name] = this.activeSubmenus[name] ? false: true;
            this.activeSubmenus = {...this.activeSubmenus};
            event.preventDefault();
        },
        isSubmenuActive(name, routerIsActive) {
            if (this.activeSubmenus.hasOwnProperty(name)) {
                return this.activeSubmenus[name];
            }
            else if (routerIsActive) {
                this.activeSubmenus[name] = true;
                return true;
            }

            return false;
        }
    }
}
</script>
