<template>
    <div class="layout-topbar">
        <a class="menu-button" @click="$emit('menubutton-click')">
            <i class="pi pi-bars"></i>
        </a>
        <router-link to="/" class="logo">
            <img alt="logo" src="./assets/images/primevue-logo.png">
        </router-link>
        <ul ref="topbarMenu" class="topbar-menu">
            <li><router-link to="/setup">Get Started</router-link></li>
            <li class="topbar-submenu">
                <a tabindex="0" @click="toggleMenu($event, 0)" class="themes-menu-link">Themes</a>
                <transition name="p-input-overlay" @enter="onMenuEnter" @leave="onMenuLeave">
                    <ul v-show="activeMenuIndex === 0">
                        <li class="topbar-submenu-header">THEMING</li>
                        <li><router-link to="/theming"><i class="pi pi-fw pi-file"/><span>Guide</span></router-link></li>
                        <li><a href="https://www.primefaces.org/designer/primevue"><i class="pi pi-fw pi-palette" /><span>Designer</span></a></li>
                        <li><router-link to="/icons"><i class="pi pi-fw pi-info-circle"/><span>Icons</span></router-link></li>
                        <li class="topbar-submenu-header">FREE COMPONENT THEMES</li>
                        <li><a @click="changeTheme($event, 'saga-blue', false)"><img src="./assets/images/layouts/themeswitcher-saga-blue.png" alt="Saga Blue" /><span>Saga Blue</span></a></li>
                        <li><a @click="changeTheme($event, 'saga-green', false)"><img src="./assets/images/layouts/themeswitcher-saga-green.png" alt="Saga Green" /><span>Saga Green</span></a></li>
                        <li><a @click="changeTheme($event, 'saga-purple', false)"><img src="./assets/images/layouts/themeswitcher-saga-purple.png" alt="Saga Purple" /><span>Saga Purple</span></a></li>
                        <li><a @click="changeTheme($event, 'saga-orange', false)"><img src="./assets/images/layouts/themeswitcher-saga-orange.png" alt="Saga Orange" /><span>Saga Orange</span></a></li>
                        <li><a @click="changeTheme($event, 'nova-light', false)"><img src="./assets/images/layouts/themeswitcher-nova-light.png" alt="Nova Light" /><span>Nova Light</span></a></li>
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
                <a tabindex="0" @click="toggleMenu($event, 1)" class="templates-menu-link">Templates</a>
                <transition name="p-input-overlay" @enter="onMenuEnter" @leave="onMenuLeave">
                    <ul v-show="activeMenuIndex === 1">
                        <li class="topbar-submenu-header">FREE ADMIN TEMPLATE</li>
                        <li><a href="https://www.primefaces.org/sigma-vue"><img src="./assets/images/layouts/themeswitcher-sigma.png" alt="Sigma" /><span>Sigma</span></a></li>
                        <li class="topbar-submenu-header">PREMIUM ADMIN TEMPLATES</li>
                        <li><a href="https://www.primefaces.org/layouts/sapphire-vue"><img src="./assets/images/layouts/themeswitcher-sapphire.png" alt="Sapphire" /><span>Sapphire</span><span class="theme-badge material">material</span></a></li>
                        <li><a href="https://www.primefaces.org/layouts/serenity-vue"><img src="./assets/images/layouts/themeswitcher-serenity.png" alt="Serenity" /><span>Serenity</span><span class="theme-badge material">material</span></a></li>
                        <li><a href="https://www.primefaces.org/layouts/ultima-vue"><img src="./assets/images/layouts/themeswitcher-ultima.png" alt="Ultima" /><span>Ultima</span><span class="theme-badge material">material</span></a></li>
                        <li><a href="https://www.primefaces.org/layouts/avalon-vue"><img src="./assets/images/layouts/themeswitcher-avalon.png" alt="Avalon" /><span>Avalon</span><span class="theme-badge bootstrap">bootstrap</span></a></li>
                        <li><a href="https://www.primefaces.org/layouts/babylon-vue"><img src="./assets/images/layouts/themeswitcher-babylon.png" alt="Babylon" /><span>Babylon</span></a></li>
                        <li><a href="https://www.primefaces.org/layouts/apollo-vue"><img src="./assets/images/layouts/themeswitcher-apollo.png" alt="Apollo" /><span>Apollo</span><span class="theme-badge darkmode">dark mode</span></a></li>
                        <li><a href="https://www.primefaces.org/layouts/roma-vue"><img src="./assets/images/layouts/themeswitcher-roma.jpg" alt="Roma" /><span>Roma</span></a></li>
                        <li><a href="https://www.primefaces.org/layouts/prestige-vue"><img src="./assets/images/layouts/themeswitcher-prestige.png" alt="Prestige" /><span>Prestige</span></a></li>
                    </ul>
                </transition>
            </li>
            <li class="topbar-submenu topbar-resources-submenu">
                <a tabindex="0" @click="toggleMenu($event, 2)" class="resources-menu-link">Resources</a>
                <transition name="p-input-overlay" @enter="onMenuEnter" @leave="onMenuLeave">
                    <ul v-show="activeMenuIndex === 2">
                        <li><router-link to="/support"><span>Support</span></router-link></li>
                        <li><a href="https://github.com/primefaces/primevue" target="_blank"><span>Source Code</span></a></li>
                        <li><a href="https://www.primefaces.org/store" target="_blank"><span>PrimeStore</span></a></li>
                        <li><a href="https://www.primefaces.org/category/primevue/" target="_blank"><span>Blog</span></a></li>
                        <li><a href="https://twitter.com/primevue?lang=en" target="_blank"><span>Twitter</span></a></li>
                        <li><a href="https://www.primefaces.org/whouses" target="_blank"><span>Who Uses</span></a></li>
                        <li><a href="https://www.primefaces.org/newsletter" target="_blank"><span>Newsletter</span></a></li>
                        <li><a href="https://www.primetek.com.tr" target="_blank"><span>About PrimeTek</span></a></li>
                    </ul>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    outsideClickListener: null,
    darkDemoStyle: null,
    watch: {
        $route() {
            this.activeMenuIndex = null;
        }
    },
    data() {
        return {
            theme: 'saga-blue',
            activeMenuIndex: null
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

            this.activeMenuIndex = null;
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
        toggleMenu(event, index) {
            this.activeMenuIndex = (this.activeMenuIndex === index) ? null : index;
            event.preventDefault();
        },
        onMenuEnter() {
            this.bindOutsideClickListener();
        },
        onMenuLeave() {
            this.unbindOutsideClickListener();
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if ((this.activeMenuIndex != null && this.isOutsideTopbarMenuClicked(event))) {
                        this.activeMenuIndex = null;
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        isOutsideTopbarMenuClicked(event) {
            return !(this.$refs.topbarMenu.isSameNode(event.target) || this.$refs.topbarMenu.contains(event.target));
        }
    }
}
</script>
