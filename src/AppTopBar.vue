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
            <li class="topbar-submenu">
                <a tabindex="0" @click="toggleThemesMenu($event)" class="themes-menu-link">Themes</a>
                <transition name="p-input-overlay" @enter="onThemesMenuEnter" @leave="onThemesMenuLeave">
                    <ul v-show="themesMenuVisible">
                        <li class="topbar-submenu-header">THEMING</li>
                        <li><router-link to="/theming" @click.native="hideThemesMenu"><i class="pi pi-fw pi-file"/><span>Guide</span></router-link></li>
                        <li><a href="https://www.primefaces.org/designer/primevue"><i class="pi pi-fw pi-palette" /><span>Designer</span></a></li>
                        <li><router-link to="/icons" @click.native="hideThemesMenu"><i class="pi pi-fw pi-info-circle"/><span>Icons</span></router-link></li>
                        <li class="topbar-submenu-header">FREE COMPONENT THEMES</li>
                        <li><a href="#" @click="changeTheme($event, 'nova-light', false)"><img src="./assets/images/layouts/themeswitcher-nova-light.png" alt="Nova Light" /><span>Nova Light</span></a></li>
                        <li><a @click="changeTheme($event, 'nova-dark', false)"><img src="./assets/images/layouts/themeswitcher-nova-dark.png" alt="Nova Dark" /><span>Nova Dark</span></a></li>
                        <li><a @click="changeTheme($event, 'nova-colored', false)"><img src="./assets/images/layouts/themeswitcher-nova-colored.png" alt="Nova Colored" /><span>Nova Colored</span></a></li>
                        <li><a @click="changeTheme($event, 'nova-vue', false)"><img src="./assets/images/layouts/themeswitcher-nova-vue.png" alt="Nova Vue" /><span>Nova Vue</span></a></li>
                        <li><a @click="changeTheme($event, 'luna-amber', true)"><img src="./assets/images/layouts/themeswitcher-luna-amber.png" alt="Luna Amber" /><span>Luna Amber</span></a></li>
                        <li><a @click="changeTheme($event, 'luna-blue', true)"><img src="./assets/images/layouts/themeswitcher-luna-blue.png" alt="Luna Blue" /><span>Luna Blue</span></a></li>
                        <li><a @click="changeTheme($event, 'luna-green', true)"><img src="./assets/images/layouts/themeswitcher-luna-green.png" alt="Luna Green" /><span>Luna Green</span></a></li>
                        <li><a @click="changeTheme($event, 'luna-pink', true)"><img src="./assets/images/layouts/themeswitcher-luna-pink.png" alt="Luna Pink" /><span>Luna Pink</span></a></li>
                        <li><a @click="changeTheme($event, 'rhea', false)"><img src="./assets/images/layouts/themeswitcher-rhea.png" alt="Rhea" /><span>Rhea</span></a></li>
                    </ul>
                </transition>
            </li>
            <li class="topbar-submenu">
                <a tabindex="0" @click="toggleTemplatesMenu($event)" class="templates-menu-link">Templates</a>
                <transition name="p-input-overlay" @enter="onTemplatesMenuEnter" @leave="onTemplatesMenuLeave">
                    <ul v-show="templatesMenuVisible">
                        <li class="topbar-submenu-header">FREE ADMIN TEMPLATE</li>
                        <li><a href="https://www.primefaces.org/sigma-vue"><img src="./assets/images/layouts/themeswitcher-sigma.png" alt="Sigma" /><span>Sigma</span></a></li>
                        <li class="topbar-submenu-header">PREMIUM ADMIN TEMPLATES</li>
                        <li><a href="https://www.primefaces.org/sapphire-vue"><img src="./assets/images/layouts/themeswitcher-sapphire.png" alt="Sapphire" /><span>Sapphire</span><span class="theme-badge material">material</span></a></li>
                        <li><a href="https://www.primefaces.org/avalon-vue"><img src="./assets/images/layouts/themeswitcher-avalon.png" alt="Avalon" /><span>Avalon</span><span class="theme-badge bootstrap">bootstrap</span></a></li>
                        <li><a href="https://www.primefaces.org/babylon-vue"><img src="./assets/images/layouts/themeswitcher-babylon.png" alt="Babylon" /><span>Babylon</span></a></li>
                        <li><a href="https://www.primefaces.org/apollo-vue"><img src="./assets/images/layouts/themeswitcher-apollo.png" alt="Apollo" /><span>Apollo</span><span class="theme-badge darkmode">dark mode</span></a></li>
                        <li><a href="https://www.primefaces.org/roma-vue"><img src="./assets/images/layouts/themeswitcher-roma.jpg" alt="Roma" /><span>Roma</span></a></li>
                    </ul>
                </transition>
            </li>
            <li class="topbar-submenu topbar-resources-submenu">
                <a tabindex="0" @click="toggleResourcesMenu($event)" class="resources-menu-link">Resources</a>
                <transition name="p-input-overlay" @enter="onResourcesMenuEnter" @leave="onResourcesMenuLeave">
                    <ul v-show="resourcesMenuVisible">
                        <li><router-link to="/support" @click.native="hideResourcesMenu"><span>Support</span></router-link></li>
                        <li><a href="https://github.com/primefaces/primevue" target="_blank"><span>Source Code</span></a></li>
                        <li><a href="https://www.primefaces.org/store" target="_blank"><span>PrimeStore</span></a></li>
                        <li><a href="https://www.primefaces.org/category/primevue/" target="_blank"><span>Blog</span></a></li>
                        <li><a href="https://twitter.com/primevue?lang=en" target="_blank"><span>Twitter</span></a></li>
                        <li><a href="https://www.primefaces.org/whouses/" target="_blank"><span>Who Uses</span></a></li>
                        <li><a href="https://www.primetek.com.tr" target="_blank"><span>About PrimeTek</span></a></li>
                    </ul>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>
import DomHandler from './components/utils/DomHandler';

export default {
    themesMenuOutsideClickListener: null,
    templatesMenuOutsideClickListener: null,
    resourcesMenuOutsideClickListener: null,
    themesMenuElement: null,
    templatesMenuElement: null,
    resourcesMenuElement: null,
    darkDemoStyle: null,
    data() {
        return {
            theme: 'nova-light',
            themesMenuVisible: false,
            templatesMenuVisible: false,
            resourcesMenuVisible: false
        }
    },
    methods: {
        changeTheme(event, theme, dark) {
            let themeElement = document.getElementById('theme-link');
            themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.theme, theme));
            this.theme = theme;
            const hasBodyDarkTheme = this.hasClass(document.body, 'dark-theme');

            if (dark) {
                if (!hasBodyDarkTheme) {
                    this.addClass(document.body, 'dark-theme');
                }
            }
            else if(hasBodyDarkTheme) {
                this.removeClass(document.body, 'dark-theme');
            }

            this.hideThemesMenu();
            event.preventDefault();
        },
        addClass(element, className) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        },
        removeClass(element, className) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        },
        hasClass(element, className) {
            if (element.classList)
                return element.classList.contains(className);
            else
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
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
        toggleTemplatesMenu(event) {
            this.templatesMenuVisible = !this.templatesMenuVisible;
            event.preventDefault();
        },
        onTemplatesMenuEnter(el) {
            this.templatesMenuElement = el;
            this.bindTemplatesMenuOutsideClickListener();
        },
        onTemplatesMenuLeave() {
            this.templatesMenuElement = null;
            this.unbindTemplatesMenuOutsideClickListener();
        },
        toggleResourcesMenu(event) {
            this.resourcesMenuVisible = !this.resourcesMenuVisible;
            event.preventDefault();
        },
        onResourcesMenuEnter(el) {
            this.resourcesMenuElement = el;
            this.bindResourcesMenuOutsideClickListener();
        },
        onResourcesMenuLeave() {
            this.resourcesMenuElement = null;
            this.unbindResourcesMenuOutsideClickListener();
        },
        bindThemesMenuOutsideClickListener() {
            if (!this.themesMenuOutsideClickListener) {
                this.themesMenuOutsideClickListener = (event) => {
                    if ((this.themesMenuVisible && this.isOutsideOfOverlayMenuClicked(event, this.themesMenuElement, 'themes-menu-link'))) {
                        this.themesMenuVisible = false;
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
        bindTemplatesMenuOutsideClickListener() {
            if (!this.templatesMenuOutsideClickListener) {
                this.templatesMenuOutsideClickListener = (event) => {
                    if ((this.templatesMenuVisible && this.isOutsideOfOverlayMenuClicked(event, this.templatesMenuElement, 'templates-menu-link'))) {
                        this.templatesMenuVisible = false;
                    }
                };
                document.addEventListener('click', this.templatesMenuOutsideClickListener);
            }
        },
        unbindTemplatesMenuOutsideClickListener() {
            if (this.templatesMenuOutsideClickListener) {
                document.removeEventListener('click', this.templatesMenuOutsideClickListener);
                this.templatesMenuOutsideClickListener = null;
            }
        },
        bindResourcesMenuOutsideClickListener() {
            if (!this.resourcesMenuOutsideClickListener) {
                this.resourcesMenuOutsideClickListener = (event) => {
                    if ((this.resourcesMenuVisible && this.isOutsideOfOverlayMenuClicked(event, this.resourcesMenuElement, 'resources-menu-link'))) {
                        this.resourcesMenuVisible = false;
                    }
                };
                document.addEventListener('click', this.resourcesMenuOutsideClickListener);
            }
        },
        unbindResourcesMenuOutsideClickListener() {
            if (this.resourcesMenuOutsideClickListener) {
                document.removeEventListener('click', this.resourcesMenuOutsideClickListener);
                this.resourcesMenuOutsideClickListener = null;
            }
        },
        isOutsideOfOverlayMenuClicked(event, element, style) {
            return !(DomHandler.hasClass(event.target, style) || element.isSameNode(event.target) || element.contains(event.target));
        },
        hideThemesMenu() {
            this.themesMenuVisible = false;
        },
        hideResourcesMenu() {
            this.resourcesMenuVisible = false;
        }
    }
}
</script>
