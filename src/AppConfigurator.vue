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
                    <h3 style="margin-top: 0">Component Scale</h3>
                    <div class="config-scale">
                        <Button icon="pi pi-minus" @click="decrementScale()" class="p-button-secondary" :disabled="scale === scales[0]"/>
                        <i class="pi pi-circle-on" v-for="s of scales" :class="{'scale-active': s === scale}" :key="s"/>
                        <Button icon="pi pi-plus"  @click="incrementScale()" class="p-button-secondary" :disabled="scale === scales[scales.length - 1]" />
                    </div>

                    <h3>Free Themes</h3>
                    <p>Built-in component themes created by the <a href="https://www.primefaces.org/designer/primevue">PrimeVue Theme Designer</a>.</p>

                    <div class="p-grid">
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-blue.png" alt="Saga Blue" @click="changeTheme($event, 'saga-blue')"/>
                                <i class="pi pi-check" v-if="theme === 'saga-blue'" />
                            </button>
                            <span>Saga Blue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-cyan.png" alt="Saga Cyan" @click="changeTheme($event, 'saga-cyan')"/>
                                <i class="pi pi-check" v-if="theme === 'saga-cyan'" />
                            </button>
                            <span>Saga Cyan</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-deeppurple.png" alt="Saga Deep Purple" @click="changeTheme($event, 'saga-deeppurple')"/>
                                <i class="pi pi-check" v-if="theme === 'saga-deeppurple'" />
                            </button>
                            <span>Saga Deep Purple</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-green.png" alt="Saga Green" @click="changeTheme($event, 'saga-green')"/>
                                <i class="pi pi-check" v-if="theme === 'saga-green'" />
                            </button>
                            <span>Saga Green</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-indigo.png" alt="Saga Indigo" @click="changeTheme($event, 'saga-indigo', false)"/>
                                <i class="pi pi-check" v-if="theme === 'saga-indigo'" />
                            </button>
                            <span>Saga Indigo</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-orange.png" alt="Saga Orange" @click="changeTheme($event, 'saga-orange')"/>
                                <i class="pi pi-check" v-if="theme === 'saga-orange'" />
                            </button>
                            <span>Saga Orange</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-purple.png" alt="Saga Purple" @click="changeTheme($event, 'saga-purple')"/>
                                <i class="pi pi-check" v-if="theme === 'saga-purple'" />
                            </button>
                            <span>Saga Purple</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-teal.png" alt="Saga Teal" @click="changeTheme($event, 'saga-teal')"/>
                                <i class="pi pi-check" v-if="theme === 'saga-teal'" />
                            </button>
                            <span>Saga Teal</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-blue.png" alt="Vela Blue" @click="changeTheme($event, 'vela-blue', true)"/>
                                <i class="pi pi-check" v-if="theme === 'vela-blue'" />
                            </button>
                            <span>Vela Blue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-cyan.png" alt="Vela Cyan" @click="changeTheme($event, 'vela-cyan', true)"/>
                                <i class="pi pi-check" v-if="theme === 'vela-cyan'" />
                            </button>
                            <span>Vela Cyan</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-deeppurple.png" alt="Vela Deep Purple" @click="changeTheme($event, 'vela-deeppurple', true)"/>
                                <i class="pi pi-check" v-if="theme === 'vela-deeppurple'" />
                            </button>
                            <span>Vela Deep Purple</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-green.png" alt="Vela Green" @click="changeTheme($event, 'vela-green', true)"/>
                                <i class="pi pi-check" v-if="theme === 'vela-green'" />
                            </button>
                            <span>Vela Green</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-indigo.png" alt="Vela Indigo" @click="changeTheme($event, 'vela-indigo', true)"/>
                                <i class="pi pi-check" v-if="theme === 'vela-indigo'" />
                            </button>
                            <span>Vela Indigo</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-orange.png" alt="Vela Orange" @click="changeTheme($event, 'vela-orange', true)"/>
                                <i class="pi pi-check" v-if="theme === 'vela-orange'" />
                            </button>
                            <span>Vela Orange</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-purple.png" alt="Vela Purple" @click="changeTheme($event, 'vela-purple', true)"/>
                                <i class="pi pi-check" v-if="theme === 'vela-purple'" />
                            </button>
                            <span>Vela Purple</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-teal.png" alt="Vela Teal" @click="changeTheme($event, 'vela-teal', true)"/>
                                <i class="pi pi-check" v-if="theme === 'vela-teal'" />
                            </button>
                            <span>Vela Teal</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova-light.png" alt="Nova Light" @click="changeTheme($event, 'nova-light')"/>
                                <i class="pi pi-check" v-if="theme === 'nova-light'" />
                            </button>
                            <span>Nova Light</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova-dark.png" alt="Nova Dark" @click="changeTheme($event, 'nova-dark')"/>
                                <i class="pi pi-check" v-if="theme === 'nova-dark'" />
                            </button>
                            <span>Nova Dark</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova-colored.png" alt="Nova Colored" @click="changeTheme($event, 'nova-colored')"/>
                                <i class="pi pi-check" v-if="theme === 'nova-colored'" />
                            </button>
                            <span>Nova Colored</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova-vue.png" alt="Nova Colored" @click="changeTheme($event, 'nova-vue')"/>
                                <i class="pi pi-check" v-if="theme === 'nova-vue'" />
                            </button>
                            <span>Nova Vue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-blue.png" alt="Luna Blue" @click="changeTheme($event, 'luna-blue', true)"/>
                                <i class="pi pi-check" v-if="theme === 'luna-blue'" />
                            </button>
                            <span>Luna Blue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-green.png" alt="Luna Green" @click="changeTheme($event, 'luna-green', true)"/>
                                <i class="pi pi-check" v-if="theme === 'luna-green'" />
                            </button>
                            <span>Luna Green</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-amber.png" alt="Luna Amber" @click="changeTheme($event, 'luna-amber', true)" target="_blank"/>
                                <i class="pi pi-check" v-if="theme === 'luna-amber'" />
                            </button>
                            <span>Luna Amber</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-pink.png" alt="Luna Pink" @click="changeTheme($event, 'luna-pink', true)" target="_blank"/>
                                <i class="pi pi-check" v-if="theme === 'luna-pink'" />
                            </button>
                            <span>Luna Pink</span>
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
                    <h3>Premium Vue-CLI Template</h3>
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
export default {
    props: {
        theme: String
    },
    data() {
        return {
            active: false,
            scale: 14,
            scales: [12,13,14,15,16]
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
            this.$emit('change-theme', {theme: theme, dark: dark});
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
        decrementScale() {
            this.scale--;
            document.documentElement.style.fontSize = this.scale + 'px';
        },
        incrementScale() {
            this.scale++;
            document.documentElement.style.fontSize = this.scale + 'px';
        }
    }
}
</script>
