<template>
    <div :class="containerClass">
        <div class="layout-config-content-wrapper">
            <a href="#" class="layout-config-button" @click="toggleConfigurator">
                <i class="pi pi-cog"></i>
            </a>
            <a href="#" class="layout-config-close" @click="hideConfigurator">
                <i class="pi pi-times"></i>
            </a>

            <div class="layout-config-content">
                <div class="free-themes">
                    <h1 style="margin-top: 0">FREE THEMES</h1>
                    <p>Built-in component themes created by the <a href="https://www.primefaces.org/designer/primevue">PrimeVue Theme Designer</a>.</p>
                    <div class="p-grid">
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova-light.png" alt="Nova Light" @click="changeTheme($event, 'nova-light', false)"/>
                                <i class="pi pi-check" v-if="theme === 'nova-light'" />
                            </button>
                            <span>Nova-Light</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova-dark.png" alt="Nova Dark" @click="changeTheme($event, 'nova-dark', false)"/>
                                <i class="pi pi-check" v-if="theme === 'nova-dark'" />
                            </button>
                            <span>Nova-Dark</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova-colored.png" alt="Nova Colored" @click="changeTheme($event, 'nova-colored', false)"/>
                                <i class="pi pi-check" v-if="theme === 'nova-colored'" />
                            </button>
                            <span>Nova-Colored</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova-vue.png" alt="Nova Colored" @click="changeTheme($event, 'nova-vue', false)"/>
                                <i class="pi pi-check" v-if="theme === 'nova-vue'" />
                            </button>
                            <span>Nova-Vue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-blue.png" alt="Luna Blue" @click="changeTheme($event, 'luna-blue', false)"/>
                                <i class="pi pi-check" v-if="theme === 'luna-blue'" />
                            </button>
                            <span>Luna-Blue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-green.png" alt="Luna Green" @click="changeTheme($event, 'luna-green', false)"/>
                                <i class="pi pi-check" v-if="theme === 'luna-green'" />
                            </button>
                            <span>Luna-Green</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-amber.png" alt="Luna Amber" @click="changeTheme($event, 'luna-amber', false)" target="_blank"/>
                                <i class="pi pi-check" v-if="theme === 'luna-amber'" />
                            </button>
                            <span>Luna-Amber</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-pink.png" alt="Luna Pink" @click="changeTheme($event, 'luna-pink', false)" target="_blank"/>
                                <i class="pi pi-check" v-if="theme === 'luna-pink'" />
                            </button>
                            <span>Luna-Pink</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-rhea.png" alt="Rhea" @click="changeTheme($event, 'rhea', false)" target="_blank"/>
                                <i class="pi pi-check" v-if="theme === 'rhea'" />
                            </button>
                            <span>Rhea</span>
                        </div>
                    </div>
                </div>

                <div class="premium-themes">
                    <h1>PREMIUM VUE-CLI TEMPLATES</h1>
                    <p>Beautifully crafted premium <a href="https://cli.vuejs.org">Vue CLI</a> application templates by the PrimeTek design team.</p>
                    <div class="p-grid">
                        <div class="p-col-12 p-md-6">
                            <a href="https://www.primefaces.org/layouts/ultima-vue">
                                <img alt="Ultima" src="./assets/images/layouts/ultima-vue.jpg">
                            </a>
                        </div>
                        <div class="p-col-12 p-md-6">
                            <a href="https://www.primefaces.org/layouts/sapphire-vue">
                                <img alt="Sapphire" src="./assets/images/layouts/sapphire-vue.jpg">
                            </a>
                        </div>
                        <div class="p-col-12 p-md-6">
                            <a href="https://www.primefaces.org/layouts/serenity-vue">
                                <img alt="Serenity" src="./assets/images/layouts/serenity-vue.jpg">
                            </a>
                        </div>
                        <div class="p-col-12 p-md-6">
                            <a href="https://www.primefaces.org/layouts/babylon-vue">
                                <img alt="Babylon" src="./assets/images/layouts/babylon-vue.jpg">
                            </a>
                        </div>
                        <div class="p-col-12 p-md-6">
                            <a href="https://www.primefaces.org/layouts/avalon-vue">
                                <img alt="Avalon" src="./assets/images/layouts/avalon-vue.jpg">
                            </a>
                        </div>
                        <div class="p-col-12 p-md-6">
                            <a href="https://www.primefaces.org/layouts/apollo-vue">
                                <img alt="Apollo" src="./assets/images/layouts/apollo-vue.jpg">
                            </a>
                        </div>
                        <div class="p-col-12 p-md-6">
                            <a href="https://www.primefaces.org/layouts/roma-vue">
                                <img alt="Roma" src="./assets/images/layouts/roma-vue.jpg">
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import DomHandler from './components/utils/DomHandler';

export default {
    data() {
        return {
            active: false,
            theme: 'nova-light'
        }
    },
    outsideClickListener: null,
    watch: {
        $route() {
            if (this.active) {
                this.active = false;
                this.unbindOutsideClickListener();
            }
        }
    },
    computed: {
        containerClass() {
            return ['layout-config', {'layout-config-active': this.active}];
        }
    },
    methods: {
        toggleConfigurator(event) {
            this.active = !this.active;
            event.preventDefault();

            if (this.active)
                this.bindOutsideClickListener();
            else
                this.unbindOutsideClickListener();
        },
        hideConfigurator(event) {
            this.active = false;
            this.unbindOutsideClickListener();
            event.preventDefault();
        },
        changeTheme(event, theme, dark) {
            let themeElement = document.getElementById('theme-link');
            themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.theme, theme));
            this.theme = theme;
            const hasBodyDarkTheme = DomHandler.hasClass(document.body, 'dark-theme');

            if (dark) {
                if (!hasBodyDarkTheme) {
                    this.addClass(document.body, 'dark-theme');
                }
            }
            else if(hasBodyDarkTheme) {
                this.removeClass(document.body, 'dark-theme');
            }

            event.preventDefault();
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.active && this.isOutsideClicked(event)) {
                        this.active = false;
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
        isOutsideClicked(event) {
            return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target));
        },
    }
}
</script>
