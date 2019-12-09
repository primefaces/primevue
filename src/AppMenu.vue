<template>
    <div :class="['layout-sidebar', {'active': active}]">
        <div class="layout-menu">
            <a tabindex="0" @click="toggleMenu($event, 0)" @keydown.enter="toggleMenu($event, 0)" :class="{'active-menuitem': activeMenuIndex === 0}">
                <img alt="input" class="layout-menu-icon-inactive" src="./assets/images/menu/input.svg" />
                <img alt="input" class="layout-menu-icon-active" src="./assets/images/menu/input-active.svg" />
                <span>Input</span>
            </a>
            <transition name="layout-submenu-wrapper">
                <div v-show="activeMenuIndex === 0">
                    <div>
                        <router-link to="/autocomplete">&#9679; AutoComplete</router-link>
                        <router-link to="/calendar">&#9679; Calendar</router-link>
                        <router-link to="/checkbox">&#9679; Checkbox</router-link>
                        <router-link to="/chips">&#9679; Chips</router-link>
                        <router-link to="/dropdown">&#9679; Dropdown</router-link>
                        <router-link to="/editor">&#9679; Editor</router-link>
                        <router-link to="/inputgroup">&#9679; InputGroup</router-link>
                        <router-link to="/inputmask">&#9679; InputMask</router-link>
                        <router-link to="/inputswitch">&#9679; InputSwitch</router-link>
                        <router-link to="/inputtext">&#9679; InputText</router-link>
                        <router-link to="/listbox">&#9679; Listbox</router-link>
                        <router-link to="/multiselect">&#9679; MultiSelect</router-link>
                        <router-link to="/password">&#9679; Password</router-link>
                        <router-link to="/radiobutton">&#9679; RadioButton</router-link>
                        <router-link to="/rating">&#9679; Rating</router-link>
                        <router-link to="/selectbutton">&#9679; SelectButton</router-link>
                        <router-link to="/slider">&#9679; Slider</router-link>
                        <router-link to="/spinner">&#9679; Spinner</router-link>
                        <router-link to="/textarea">&#9679; Textarea</router-link>
                        <router-link to="/togglebutton">&#9679; ToggleButton</router-link>
                        <router-link to="/tristatecheckbox">&#9679; TriCheckbox</router-link>
                    </div>
                </div>
            </transition>

            <a tabindex="0" @click="toggleMenu($event, 1)" @keydown.enter="toggleMenu($event, 1)" :class="{'active-menuitem': activeMenuIndex === 1}">
                <img alt="button" class="layout-menu-icon-inactive" src="./assets/images/menu/button.svg" />
                <img alt="button" class="layout-menu-icon-active" src="./assets/images/menu/button-active.svg" />
                <span>Button</span>
            </a>
            <transition name="layout-submenu-wrapper">
                <div v-show="activeMenuIndex === 1">
                    <div>
                        <router-link to="/button">&#9679; Button</router-link>
                        <router-link to="/splitbutton">&#9679; SplitButton</router-link>
                    </div>
                </div>
            </transition>

            <a tabindex="0" @click="toggleMenu($event, 2)" @keydown.enter="toggleMenu($event, 2)" :class="{'active-menuitem': activeMenuIndex === 2}">
                <img alt="data" class="layout-menu-icon-inactive" src="./assets/images/menu/data.svg" />
                <img alt="data" class="layout-menu-icon-active" src="./assets/images/menu/data-active.svg" />
                <span>Data</span>
            </a>
            <transition name="layout-submenu-wrapper">
                <div v-show="activeMenuIndex === 2">
                    <div>
                        <router-link to="/carousel">&#9679; Carousel</router-link>
                        <router-link to="/datatable">&#9679; DataTable</router-link>
                        <router-link to="/dataview">&#9679; DataView</router-link>
                        <router-link to="/fullcalendar">&#9679; FullCalendar</router-link>
                        <router-link to="/orderlist">&#9679; OrderList</router-link>
                        <router-link to="/organizationchart">&#9679; Org Chart</router-link>
                        <router-link to="/paginator">&#9679; Paginator</router-link>
                        <router-link to="/picklist">&#9679; PickList</router-link>
                        <router-link to="/tree">&#9679; Tree</router-link>
                        <router-link to="/treetable">&#9679; TreeTable</router-link>
                    </div>
                </div>
            </transition>

            <a tabindex="0" @click="toggleMenu($event, 3)" @keydown.enter="toggleMenu($event, 3)" :class="{'active-menuitem': activeMenuIndex === 3}">
                <img alt="panel" class="layout-menu-icon-inactive" src="./assets/images/menu/panel.svg" />
                <img alt="panel" class="layout-menu-icon-active" src="./assets/images/menu/panel-active.svg" />
                <span>Panel</span>
            </a>
            <transition name="layout-submenu-wrapper">
                <div v-show="activeMenuIndex === 3">
                    <div>
                        <router-link to="/accordion">&#9679; Accordion</router-link>
                        <router-link to="/card">&#9679; Card</router-link>
                        <router-link to="/deferredcontent">&#9679; Deferred</router-link>
                        <router-link to="/fieldset">&#9679; Fieldset</router-link>
                        <router-link to="/flexgrid">&#9679; FlexGrid</router-link>
                        <router-link to="/panel">&#9679; Panel</router-link>
                        <router-link to="/tabview">&#9679; TabView</router-link>
                        <router-link to="/toolbar">&#9679; Toolbar</router-link>
                    </div>
                </div>
            </transition>

            <a tabindex="0" @click="toggleMenu($event, 4)" @keydown.enter="toggleMenu($event, 4)" :class="{'active-menuitem': activeMenuIndex === 4}">
                <img alt="overlay" class="layout-menu-icon-inactive" src="./assets/images/menu/overlay.svg" />
                <img alt="overlay" class="layout-menu-icon-active" src="./assets/images/menu/overlay-active.svg" />
                <span>Overlay</span>
            </a>
            <transition name="layout-submenu-wrapper">
                <div v-show="activeMenuIndex === 4">
                    <div>
                        <router-link to="/dialog">&#9679; Dialog</router-link>
                        <router-link to="/overlaypanel">&#9679; OverlayPanel</router-link>
                        <router-link to="/sidebar">&#9679; Sidebar</router-link>
                    </div>
                </div>
            </transition>

            <a tabindex="0" @click="toggleMenu($event, 5)" @keydown.enter="toggleMenu($event, 5)" :class="{'active-menuitem': activeMenuIndex === 5}">
                <img alt="file" class="layout-menu-icon-inactive" src="./assets/images/menu/file.svg" />
                <img alt="file" class="layout-menu-icon-active" src="./assets/images/menu/file-active.svg" />
                <span>File</span>
            </a>
            <transition name="layout-submenu-wrapper">
                <div v-show="activeMenuIndex === 5">
                    <div>
                        <router-link to="/fileupload">&#9679; Upload</router-link>
                    </div>
                </div>
            </transition>

            <a tabindex="0" @click="toggleMenu($event, 6)" @keydown.enter="toggleMenu($event, 6)" :class="{'active-menuitem': activeMenuIndex === 6}">
                <img alt="menu" class="layout-menu-icon-inactive" src="./assets/images/menu/menu.svg" />
                <img alt="menu" class="layout-menu-icon-active" src="./assets/images/menu/menu-active.svg" />
                <span>Menu</span>
            </a>
            <transition name="layout-submenu-wrapper">
                <div v-show="activeMenuIndex === 6">
                    <div>
                        <router-link to="/menumodel">&#9679; MenuModel</router-link>
                        <router-link to="/breadcrumb">&#9679; Breadcrumb</router-link>
                        <router-link to="/contextmenu">&#9679; ContextMenu</router-link>
                        <router-link to="/megamenu">&#9679; MegaMenu</router-link>
                        <router-link to="/menu">&#9679; Menu</router-link>
                        <router-link to="/menubar">&#9679; Menubar</router-link>
                        <router-link to="/panelmenu">&#9679; PanelMenu</router-link>
                        <router-link to="/steps">&#9679; Steps</router-link>
                        <router-link to="/tabmenu">&#9679; TabMenu</router-link>
                        <router-link to="/tieredmenu">&#9679; TieredMenu</router-link>
                    </div>
                </div>
            </transition>

            <a tabindex="0" @click="toggleMenu($event, 7)" @keydown.enter="toggleMenu($event, 7)" :class="{'active-menuitem': activeMenuIndex === 7}">
                <img alt="charts" class="layout-menu-icon-inactive" src="./assets/images/menu/charts.svg" />
                <img alt="charts" class="layout-menu-icon-active" src="./assets/images/menu/charts-active.svg" />
                <span>Chart</span>
            </a>
            <transition name="layout-submenu-wrapper">
                <div v-show="activeMenuIndex === 7">
                    <div>
                        <router-link to="/chart">&#9679; ChartModel</router-link>
                        <router-link to="/chart/pie">&#9679; Pie</router-link>
                        <router-link to="/chart/doughnut">&#9679; Doughnut</router-link>
                        <router-link to="/chart/bar">&#9679; Bar</router-link>
                        <router-link to="/chart/line">&#9679; Line</router-link>
                        <router-link to="/chart/polararea">&#9679; PolarArea</router-link>
                        <router-link to="/chart/radar">&#9679; Radar</router-link>
                        <router-link to="/chart/combo">&#9679; Combo</router-link>
                    </div>
                </div>
            </transition>

            <a tabindex="0" @click="toggleMenu($event, 8)" @keydown.enter="toggleMenu($event, 8)" :class="{'active-menuitem': activeMenuIndex === 8}">
                <img alt="message" class="layout-menu-icon-inactive" src="./assets/images/menu/message.svg" />
                <img alt="message" class="layout-menu-icon-active" src="./assets/images/menu/message-active.svg" />
                <span>Messages</span>
            </a>
            <transition name="layout-submenu-wrapper">
                <div v-show="activeMenuIndex === 8">
                    <div>
                        <router-link to="/message">&#9679; Message</router-link>
                        <router-link to="/toast">&#9679; Toast</router-link>
                    </div>
                </div>
            </transition>

            <a tabindex="0" @click="toggleMenu($event, 9)" @keydown.enter="toggleMenu($event, 9)" :class="{'active-menuitem': activeMenuIndex === 9}">
                <img alt="misc" class="layout-menu-icon-inactive" src="./assets/images/menu/misc.svg" />
                <img alt="misc" class="layout-menu-icon-active" src="./assets/images/menu/misc-active.svg" />
                <span>Misc</span>
            </a>
            <transition name="layout-submenu-wrapper">
                <div v-show="activeMenuIndex === 9">
                    <div>
                        <router-link to="/inplace">&#9679; Inplace</router-link>
                        <router-link to="/progressbar">&#9679; ProgressBar</router-link>
                        <router-link to="/progressspinner">&#9679; ProgressSpinner</router-link>
                    </div>
                </div>
            </transition>
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