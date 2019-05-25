<template>
    <div class="layout-topbar">
        <a class="menu-button" @click="$emit('menubutton-click')">
            <i class="pi pi-bars"></i>
        </a>
        <router-link to="/" class="logo">
            <img alt="logo" src="./assets/images/primevue-logo.png">
        </router-link>
        <ul class="topbar-menu">
            <li><router-link to="/setup">Get Started</router-link></li>
            <li class="topbar-menu-themes">
                <a tabindex="0" @click="toggleThemesMenu($event)" class="themes-menu-link">Themes</a>
                <transition name="p-input-overlay" @enter="onThemesMenuEnter" @leave="onThemesMenuLeave">
                    <ul v-if="themesMenuVisible">
                        <li class="topbar-submenu-header">THEMING</li>
                        <li><router-link to="/icons" @click.native="hideThemesMenu()"><i class="pi pi-fw pi-search"/><span>Icons</span></router-link></li>
                        <li class="topbar-submenu-header">FREE THEMES</li>
                        <li><a href="#" @click="changeTheme($event, 'nova-light', false)"><img src="./assets/images/layouts/themeswitcher-nova-light.png" alt="Nova Light" /><span>Nova Light</span></a></li>
                        <li><a @click="changeTheme($event, 'nova-dark', false)"><img src="./assets/images/layouts/themeswitcher-nova-dark.png" alt="Nova Dark" /><span>Nova Dark</span></a></li>
                        <li><a @click="changeTheme($event, 'nova-colored', false)"><img src="./assets/images/layouts/themeswitcher-nova-colored.png" alt="Nova Colored" /><span>Nova Colored</span></a></li>
                        <li><a @click="changeTheme($event, 'luna-amber', true)"><img src="./assets/images/layouts/themeswitcher-luna-amber.png" alt="Luna Amber" /><span>Luna Amber</span></a></li>
                        <li><a @click="changeTheme($event, 'luna-blue', true)"><img src="./assets/images/layouts/themeswitcher-luna-blue.png" alt="Luna Blue" /><span>Luna Blue</span></a></li>
                        <li><a @click="changeTheme($event, 'luna-green', true)"><img src="./assets/images/layouts/themeswitcher-luna-green.png" alt="Luna Green" /><span>Luna Green</span></a></li>
                        <li><a @click="changeTheme($event, 'luna-pink', true)"><img src="./assets/images/layouts/themeswitcher-luna-pink.png" alt="Luna Pink" /><span>Luna Pink</span></a></li>
                        <li><a @click="changeTheme($event, 'rhea', false)"><img src="./assets/images/layouts/themeswitcher-rhea.png" alt="Rhea" /><span>Rhea</span></a></li>
                    </ul>
                </transition>
            </li>
            <li><router-link to="/support">Support</router-link></li>
        </ul>
    </div>
</template>

<script>
import DomHandler from './components/utils/DomHandler';

export default {
    themesMenuOutsideClickListener: null,
    themesMenuElement: null,
    darkDemoStyle: null,
    data() {
        return {
            theme: 'nova-light',
            themesMenuVisible: false
        }
    },
    methods: {
        changeTheme(event, theme, dark) {
            let themeElement = document.getElementById('theme-link');
            themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.theme, theme));
            this.theme = theme;
            
            if (dark) {
                if (!this.darkDemoStyle) {
                    this.darkDemoStyle = document.createElement('style');
                    this.darkDemoStyle.type = 'text/css';
                    this.darkDemoStyle.innerHTML = '.implementation { background-color: #3f3f3f !important; color: #dedede !important} .implementation > h3, .implementation > h4{ color: #dedede !important}';
                    document.body.appendChild(this.darkDemoStyle);
                }
            }
            else if(this.darkDemoStyle) {
                document.body.removeChild(this.darkDemoStyle);
                this.darkDemoStyle = null;
            }

            this.hideThemesMenu();
            event.preventDefault();
        },
        toggleThemesMenu(event) {
            this.themesMenuVisible = !this.themesMenuVisible;
            event.preventDefault();
        },
        onThemesMenuEnter(el) {
            this.themesMenuElement = el;
            this.bindThemesMenuOutsideClickListener();
        },
        onThemesMenuLeave() {
            this.themesMenuElement = null;
            this.unbindThemesMenuOutsideClickListener();
        },
        bindThemesMenuOutsideClickListener() {
            if (!this.themesMenuOutsideClickListener) {
                this.themesMenuOutsideClickListener = (event) => {
                    if (this.themesMenuVisible && this.isOutsideOfThemesMenuClicked(event)) {
                        this.hideThemesMenu();
                    }
                };
                document.addEventListener('click', this.themesMenuOutsideClickListener);
            }
        },
        unbindThemesMenuOutsideClickListener() {
            if (this.themesMenuOutsideClickListener) {
                document.removeEventListener('click', this.themesMenuOutsideClickListener);
                this.themesMenuOutsideClickListener = null;
            }
        },
        isOutsideOfThemesMenuClicked(event) {
            return !(DomHandler.hasClass(event.target, 'themes-menu-link') || this.themesMenuElement.isSameNode(event.target) || this.themesMenuElement.contains(event.target));
        },
        hideThemesMenu() {
            this.themesMenuVisible = false;
        }
    }
}
</script>