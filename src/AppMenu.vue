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
                    <router-link to="/inputtext">&#9679; InputText</router-link>
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
            this.activeMenuIndex = index;
        }
    }
}
</script>