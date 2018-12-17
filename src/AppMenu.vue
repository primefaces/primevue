<template>
    <div class="layout-sidebar">
        <div class="layout-menu">
            <a @click="toggleMenu($event, 0)" :class="{'active-menuitem': activeMenuIndex === 0}">
                <img alt="input" class="layout-menu-icon-inactive" src="./assets/images/menu/input.svg" />
                <img alt="input" class="layout-menu-icon-active" src="./assets/images/menu/input-active.svg" />
                <span>Input</span>
            </a>
            <div :class="{'submenuhide': activeMenuIndex !== 0, 'submenushow': activeMenuIndex === 0}">
                <div>
                    <router-link to="/checkbox">&#9679; Checkbox</router-link>
                    <router-link to="/inputswitch">&#9679; InputSwitch</router-link>
                    <router-link to="/inputtext">&#9679; InputText</router-link>
                    <router-link to="/listbox">&#9679; Listbox</router-link>
                    <router-link to="/radiobutton">&#9679; RadioButton</router-link>
                    <router-link to="/rating">&#9679; Rating</router-link>
                    <router-link to="/selectbutton">&#9679; SelectButton</router-link>
                    <router-link to="/textarea">&#9679; Textarea</router-link>
                    <router-link to="/togglebutton">&#9679; ToggleButton</router-link>
                    <router-link to="/tristatecheckbox">&#9679; TriCheckbox</router-link>
                </div>
            </div>

             <a @click="toggleMenu($event, 1)" :class="{'active-menuitem': activeMenuIndex === 1}">
                <img alt="button" class="layout-menu-icon-inactive" src="./assets/images/menu/button.svg" />
                <img alt="button" class="layout-menu-icon-active" src="./assets/images/menu/button-active.svg" />
                <span>Button</span>
            </a>
            <div :class="{'submenuhide': activeMenuIndex !== 1, 'submenushow': activeMenuIndex === 1}">
                <div>
                    <router-link to="/button">&#9679; Button</router-link>
                </div>
            </div>

            <a @click="toggleMenu($event, 2)" :class="{'active-menuitem': activeMenuIndex === 2}">
                <img alt="data" class="layout-menu-icon-inactive" src="./assets/images/menu/data.svg" />
                <img alt="data" class="layout-menu-icon-active" src="./assets/images/menu/data-active.svg" />
                <span>Data</span>
            </a>
            <div :class="{'submenuhide': activeMenuIndex !== 2, 'submenushow': activeMenuIndex === 2}">
                <div>
                    <router-link to="/">&#9679; Link</router-link>
                </div>
            </div>

            <a @click="toggleMenu($event, 3)" :class="{'active-menuitem': activeMenuIndex === 3}">
                <img alt="panel" class="layout-menu-icon-inactive" src="./assets/images/menu/panel.svg" />
                <img alt="panel" class="layout-menu-icon-active" src="./assets/images/menu/panel-active.svg" />
                <span>Panel</span>
            </a>
            <div :class="{'submenuhide': activeMenuIndex !== 3, 'submenushow': activeMenuIndex === 3}">
                <div>
                    <router-link to="/accordion">&#9679; Accordion</router-link>
                    <router-link to="/card">&#9679; Card</router-link>
                    <router-link to="/panel">&#9679; Panel</router-link>
                    <router-link to="/fieldset">&#9679; Fieldset</router-link>
                    <router-link to="/flexgrid">&#9679; FlexGrid</router-link>
                    <router-link to="/tabview">&#9679; TabView</router-link>
                    <router-link to="/toolbar">&#9679; Toolbar</router-link>
                </div>
            </div>

            <a @click="toggleMenu($event, 4)" :class="{'active-menuitem': activeMenuIndex === 4}">
                <img alt="overlay" class="layout-menu-icon-inactive" src="./assets/images/menu/overlay.svg" />
                <img alt="overlay" class="layout-menu-icon-active" src="./assets/images/menu/overlay-active.svg" />
                <span>Overlay</span>
            </a>
            <div :class="{'submenuhide': activeMenuIndex !== 4, 'submenushow': activeMenuIndex === 4}">
                <div>
                    <router-link to="/">&#9679; Link</router-link>
                </div>
            </div>

            <a @click="toggleMenu($event, 5)" :class="{'active-menuitem': activeMenuIndex === 5}">
                <img alt="file" class="layout-menu-icon-inactive" src="./assets/images/menu/file.svg" />
                <img alt="file" class="layout-menu-icon-active" src="./assets/images/menu/file-active.svg" />
                <span>File</span>
            </a>
            <div :class="{'submenuhide': activeMenuIndex !== 5, 'submenushow': activeMenuIndex === 5}">
                <div>
                    <router-link to="/">&#9679; Link</router-link>
                </div>
            </div>

            <a @click="toggleMenu($event, 6)" :class="{'active-menuitem': activeMenuIndex === 6}">
                <img alt="menu" class="layout-menu-icon-inactive" src="./assets/images/menu/menu.svg" />
                <img alt="menu" class="layout-menu-icon-active" src="./assets/images/menu/menu-active.svg" />
                <span>Menu</span>
            </a>
            <div :class="{'submenuhide': activeMenuIndex !== 6, 'submenushow': activeMenuIndex === 6}">
                <div>
                   <router-link to="/">&#9679; Link</router-link>
                </div>
            </div>

            <a @click="toggleMenu($event, 7)" :class="{'active-menuitem': activeMenuIndex === 7}">
                <img alt="charts" class="layout-menu-icon-inactive" src="./assets/images/menu/charts.svg" />
                <img alt="charts" class="layout-menu-icon-active" src="./assets/images/menu/charts-active.svg" />
                <span>Chart</span>
            </a>
            <div :class="{'submenuhide': activeMenuIndex !== 7, 'submenushow': activeMenuIndex === 7}">
                <div>
                    <router-link to="/">&#9679; Link</router-link>
                </div>
            </div>

            <a @click="toggleMenu($event, 8)" :class="{'active-menuitem': activeMenuIndex === 8}">
                <img alt="message" class="layout-menu-icon-inactive" src="./assets/images/menu/message.svg" />
                <img alt="message" class="layout-menu-icon-active" src="./assets/images/menu/message-active.svg" />
                <span>Messages</span>
            </a>
            <div :class="{'submenuhide': activeMenuIndex !== 8, 'submenushow': activeMenuIndex === 8}">
                <div>
                    <router-link to="/">&#9679; Link</router-link>
                </div>
            </div>

            <a @click="toggleMenu($event, 9)" :class="{'active-menuitem': activeMenuIndex === 9}">
                <img alt="dragdrop" class="layout-menu-icon-inactive" src="./assets/images/menu/dragdrop.svg" />
                <img alt="dragdrop" class="layout-menu-icon-active" src="./assets/images/menu/dragdrop-active.svg" />
                <span>DragDrop</span>
            </a>
            <div :class="{'submenuhide': activeMenuIndex !== 9, 'submenushow': activeMenuIndex === 9}">
                <div>
                    <router-link to="/">&#9679; Link</router-link>
                </div>
            </div>

            <a @click="toggleMenu($event, 10)" :class="{'active-menuitem': activeMenuIndex === 10}">
                <img alt="misc" class="layout-menu-icon-inactive" src="./assets/images/menu/misc.svg" />
                <img alt="misc" class="layout-menu-icon-active" src="./assets/images/menu/misc-active.svg" />
                <span>Misc</span>
            </a>
            <div :class="{'submenuhide': activeMenuIndex !== 10, 'submenushow': activeMenuIndex === 10}">
                <div>
                    <router-link to="/">&#9679; Link</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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