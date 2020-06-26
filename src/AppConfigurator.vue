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
                <div>
                    <h4>Component Scale</h4>
                    <div class="config-scale">
                        <Button icon="pi pi-minus" @click="decrementScale()" class="p-button-text" :disabled="scale === scales[0]"/>
                        <i class="pi pi-circle-on" v-for="s of scales" :class="{'scale-active': s === scale}" :key="s"/>
                        <Button icon="pi pi-plus"  @click="incrementScale()" class="p-button-text" :disabled="scale === scales[scales.length - 1]" />
                    </div>

                    <AppInputStyleSwitch />

                    <h4>Ripple Effect</h4>
                    <InputSwitch :value="rippleActive" @input="onRippleChange"  />

                    <h4>Free Themes</h4>
                    <p>Built-in component themes created by the <a href="https://www.primefaces.org/designer/primevue">PrimeVue Theme Designer</a>.</p>

                    <h5>Bootstrap</h5>
                    <div class="p-grid free-themes">
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/bootstrap4-light-blue.svg" alt="Bootstrap Light Blue" @click="changeTheme($event, 'bootstrap4-light-blue')"/>
                            </button>
                            <span>Blue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/bootstrap4-light-purple.svg" alt="Bootstrap Light Blue" @click="changeTheme($event, 'bootstrap4-light-purple')"/>
                            </button>
                            <span>Purple</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/bootstrap4-dark-blue.svg" alt="Bootstrap Dark Blue" @click="changeTheme($event, 'bootstrap4-dark-blue', true)"/>
                            </button>
                            <span>Blue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/bootstrap4-dark-purple.svg" alt="Bootstrap Dark Blue" @click="changeTheme($event, 'bootstrap4-dark-purple', true)"/>
                            </button>
                            <span>Purple</span>
                        </div>
                    </div>

                    <h5>Material Design</h5>
                    <div class="p-grid free-themes">
                         <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/md-light-indigo.svg" alt="Material Light Indigo" @click="changeTheme($event, 'md-light-indigo')"/>
                            </button>
                            <span>Indigo</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/md-light-deeppurple.svg" alt="Material Light Deep Purple" @click="changeTheme($event, 'md-light-deeppurple')"/>
                            </button>
                            <span>Deep Purple</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/md-dark-indigo.svg" alt="Material Dark Indigo" @click="changeTheme($event, 'md-dark-indigo', true)"/>
                            </button>
                            <span>Indigo</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/md-dark-deeppurple.svg" alt="Material Dark Deep Purple" @click="changeTheme($event, 'md-dark-deeppurple', true)"/>
                            </button>
                            <span>Deep Purple</span>
                        </div>
                    </div>

                    <h5>Material Design Compact</h5>
                    <div class="p-grid free-themes">
                         <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/md-light-indigo.svg" alt="Material Compact Light Indigo" @click="changeTheme($event, 'mdc-light-indigo')"/>
                            </button>
                            <span>Indigo</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/md-light-deeppurple.svg" alt="Material Compact Deep Purple" @click="changeTheme($event, 'mdc-light-deeppurple')"/>
                            </button>
                            <span>Deep Purple</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/md-dark-indigo.svg" alt="Material Compact Dark Indigo" @click="changeTheme($event, 'mdc-dark-indigo', true)"/>
                            </button>
                            <span>Indigo</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/md-dark-deeppurple.svg" alt="Material Compact Dark Deep Purple" @click="changeTheme($event, 'mdc-dark-deeppurple', true)"/>
                            </button>
                            <span>Deep Purple</span>
                        </div>
                    </div>

                    <h5>PrimeOne Design</h5>
                    <div class="p-grid free-themes">
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-blue.png" alt="Saga Blue" @click="changeTheme($event, 'saga-blue')"/>
                            </button>
                            <span>Saga Blue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-green.png" alt="Saga Green" @click="changeTheme($event, 'saga-green')"/>
                            </button>
                            <span>Saga Green</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-orange.png" alt="Saga Orange" @click="changeTheme($event, 'saga-orange')"/>
                            </button>
                            <span>Saga Orange</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/saga-purple.png" alt="Saga Purple" @click="changeTheme($event, 'saga-purple')"/>
                            </button>
                            <span>Saga Purple</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-blue.png" alt="Vela Blue" @click="changeTheme($event, 'vela-blue', true)"/>
                            </button>
                            <span>Vela Blue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-green.png" alt="Vela Green" @click="changeTheme($event, 'vela-green', true)"/>
                            </button>
                            <span>Vela Green</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-orange.png" alt="Vela Orange" @click="changeTheme($event, 'vela-orange', true)"/>
                            </button>
                            <span>Vela Orange</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/vela-purple.png" alt="Vela Purple" @click="changeTheme($event, 'vela-purple', true)"/>
                            </button>
                            <span>Vela Purple</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/arya-blue.png" alt="Arya Blue" @click="changeTheme($event, 'arya-blue', true)"/>
                            </button>
                            <span>Arya Blue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/arya-green.png" alt="Arya Green" @click="changeTheme($event, 'arya-green', true)"/>
                            </button>
                            <span>Arya Green</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/arya-orange.png" alt="Arya Orange" @click="changeTheme($event, 'arya-orange', true)"/>
                            </button>
                            <span>Arya Orange</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/themes/arya-purple.png" alt="Arya Purple" @click="changeTheme($event, 'arya-purple', true)"/>
                            </button>
                            <span>Arya Purple</span>
                        </div>
                    </div>

                    <h5>Legacy</h5>
                    <div class="p-grid free-themes">
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova.png" alt="Nova" @click="changeTheme($event, 'nova')"/>
                            </button>
                            <span>Nova</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova-alt.png" alt="Nova Alt" @click="changeTheme($event, 'nova-alt')"/>
                            </button>
                            <span>Nova Alt</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova-accent.png" alt="Nova Accent" @click="changeTheme($event, 'nova-accent')"/>
                            </button>
                            <span>Nova Accent</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-nova-vue.png" alt="Nova Colored" @click="changeTheme($event, 'nova-vue')"/>
                            </button>
                            <span>Nova Vue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-blue.png" alt="Luna Blue" @click="changeTheme($event, 'luna-blue', true)"/>
                            </button>
                            <span>Luna Blue</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-green.png" alt="Luna Green" @click="changeTheme($event, 'luna-green', true)"/>
                            </button>
                            <span>Luna Green</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-amber.png" alt="Luna Amber" @click="changeTheme($event, 'luna-amber', true)" target="_blank"/>
                            </button>
                            <span>Luna Amber</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-luna-pink.png" alt="Luna Pink" @click="changeTheme($event, 'luna-pink', true)" target="_blank"/>
                            </button>
                            <span>Luna Pink</span>
                        </div>
                        <div class="p-col-3">
                            <button class="p-link">
                                <img src="./assets/images/layouts/themeswitcher-rhea.png" alt="Rhea" @click="changeTheme($event, 'rhea', false)" target="_blank"/>
                            </button>
                            <span>Rhea</span>
                        </div>
                    </div>

                    <h4>Premium Vue-CLI Templates</h4>
                    <p>Beautifully crafted premium <a href="https://cli.vuejs.org">Vue CLI</a> application templates by the PrimeTek design team.</p>
                    <div class="p-grid premium-themes">
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
        theme: String,
        inputStyle: String
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
        },
        rippleActive() {
            return this.$appState.ripple;
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
        },
        onRippleChange(value) {
            this.$appState.ripple = value;
        }
    }
}
</script>
