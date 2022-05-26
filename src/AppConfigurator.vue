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
                        <i class="pi pi-circle-fill" v-for="s of scales" :class="{'scale-active': s === scale}" :key="s"/>
                        <Button icon="pi pi-plus"  @click="incrementScale()" class="p-button-text" :disabled="scale === scales[scales.length - 1]" />
                    </div>

                    <AppInputStyleSwitch />

                    <h4>Ripple Effect</h4>
                    <InputSwitch :modelValue="rippleActive" @update:modelValue="onRippleChange"  />

                    <h4>Free Themes</h4>
                    <p>Built-in component themes created by the <a href="https://www.primefaces.org/designer/primevue">PrimeVue Theme Designer</a>.</p>

                    <h5>Bootstrap</h5>
                    <div class="grid free-themes">
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'bootstrap4-light-blue')">
                                <img src="demo/images/themes/bootstrap4-light-blue.svg" alt="Bootstrap Light Blue" />
                            </button>
                            <span>Blue</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'bootstrap4-light-purple')">
                                <img src="demo/images/themes/bootstrap4-light-purple.svg" alt="Bootstrap Light Blue" />
                            </button>
                            <span>Purple</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'bootstrap4-dark-blue', true)">
                                <img src="demo/images/themes/bootstrap4-dark-blue.svg" alt="Bootstrap Dark Blue" />
                            </button>
                            <span>Blue</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'bootstrap4-dark-purple', true)">
                                <img src="demo/images/themes/bootstrap4-dark-purple.svg" alt="Bootstrap Dark Blue" />
                            </button>
                            <span>Purple</span>
                        </div>
                    </div>

                    <h5>Material Design</h5>
                    <div class="grid free-themes">
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'md-light-indigo')">
                                <img src="demo/images/themes/md-light-indigo.svg" alt="Material Light Indigo" />
                            </button>
                            <span>Indigo</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'md-light-deeppurple')">
                                <img src="demo/images/themes/md-light-deeppurple.svg" alt="Material Light Deep Purple" />
                            </button>
                            <span>Deep Purple</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'md-dark-indigo', true)">
                                <img src="demo/images/themes/md-dark-indigo.svg" alt="Material Dark Indigo" />
                            </button>
                            <span>Indigo</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'md-dark-deeppurple', true)">
                                <img src="demo/images/themes/md-dark-deeppurple.svg" alt="Material Dark Deep Purple" />
                            </button>
                            <span>Deep Purple</span>
                        </div>
                    </div>

                    <h5>Material Design Compact</h5>
                    <div class="grid free-themes">
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'mdc-light-indigo')">
                                <img src="demo/images/themes/md-light-indigo.svg" alt="Material Compact Light Indigo"/>
                            </button>
                            <span>Indigo</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'mdc-light-deeppurple')">
                                <img src="demo/images/themes/md-light-deeppurple.svg" alt="Material Compact Deep Purple" />
                            </button>
                            <span>Deep Purple</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'mdc-dark-indigo', true)">
                                <img src="demo/images/themes/md-dark-indigo.svg" alt="Material Compact Dark Indigo" />
                            </button>
                            <span>Indigo</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'mdc-dark-deeppurple', true)">
                                <img src="demo/images/themes/md-dark-deeppurple.svg" alt="Material Compact Dark Deep Purple" />
                            </button>
                            <span>Deep Purple</span>
                        </div>
                    </div>

                    <h5>Tailwind</h5>
                    <div class="grid free-themes">
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'tailwind-light')">
                                <img src="demo/images/themes/tailwind-light.png" alt="Tailwind Light"/>
                            </button>
                            <span>Tailwind Light</span>
                        </div>
                    </div>

                    <h5>Fluent UI</h5>
                    <div class="grid free-themes">
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'fluent-light')">
                                <img src="demo/images/themes/fluent-light.png" alt="Fluent Light"/>
                            </button>
                            <span>Fluent Light</span>
                        </div>
                    </div>

                    <h5 class="flex align-items-center">PrimeOne Design - 2022 <Tag class="ml-3" value="NEW" rounded severity="success"></Tag></h5>
                    <div class="grid free-themes">
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'lara-light-indigo')">
                                <img src="demo/images/themes/lara-light-indigo.png" alt="Lara Light Indigo" />
                            </button>
                            <span>Lara Light Indigo</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'lara-light-blue')">
                                <img src="demo/images/themes/lara-light-blue.png" alt="Lara Light Blue" />
                            </button>
                            <span>Lara Light Blue</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'lara-light-purple')">
                                <img src="demo/images/themes/lara-light-purple.png" alt="Lara Light Purple" />
                            </button>
                            <span>Lara Light Purple</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'lara-light-teal')">
                                <img src="demo/images/themes/lara-light-teal.png" alt="Lara Light Teal" />
                            </button>
                            <span>Lara Light Teal</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'lara-dark-indigo', true)">
                                <img src="demo/images/themes/lara-dark-indigo.png" alt="Lara Dark Indigo" />
                            </button>
                            <span>Lara Dark Indigo</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'lara-dark-blue', true)">
                                <img src="demo/images/themes/lara-dark-blue.png" alt="Lara Dark Blue" />
                            </button>
                            <span>Lara Dark Blue</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'lara-dark-purple', true)">
                                <img src="demo/images/themes/lara-dark-purple.png" alt="Lara Dark Purple" />
                            </button>
                            <span>Lara Dark Purple</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'lara-dark-teal', true)">
                                <img src="demo/images/themes/lara-dark-teal.png" alt="Lara Dark Teal" />
                            </button>
                            <span>Lara Dark Teal</span>
                        </div>
                    </div>

                    <h5>PrimeOne Design - 2021</h5>
                    <div class="grid free-themes">
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'saga-blue')">
                                <img src="demo/images/themes/saga-blue.png" alt="Saga Blue" />
                            </button>
                            <span>Saga Blue</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'saga-green')">
                                <img src="demo/images/themes/saga-green.png" alt="Saga Green" />
                            </button>
                            <span>Saga Green</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'saga-orange')">
                                <img src="demo/images/themes/saga-orange.png" alt="Saga Orange" />
                            </button>
                            <span>Saga Orange</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'saga-purple')">
                                <img src="demo/images/themes/saga-purple.png" alt="Saga Purple" />
                            </button>
                            <span>Saga Purple</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'vela-blue', true)">
                                <img src="demo/images/themes/vela-blue.png" alt="Vela Blue" />
                            </button>
                            <span>Vela Blue</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'vela-green', true)">
                                <img src="demo/images/themes/vela-green.png" alt="Vela Green" />
                            </button>
                            <span>Vela Green</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'vela-orange', true)">
                                <img src="demo/images/themes/vela-orange.png" alt="Vela Orange" />
                            </button>
                            <span>Vela Orange</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'vela-purple', true)">
                                <img src="demo/images/themes/vela-purple.png" alt="Vela Purple" />
                            </button>
                            <span>Vela Purple</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'arya-blue', true)">
                                <img src="demo/images/themes/arya-blue.png" alt="Arya Blue" />
                            </button>
                            <span>Arya Blue</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'arya-green', true)">
                                <img src="demo/images/themes/arya-green.png" alt="Arya Green" />
                            </button>
                            <span>Arya Green</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'arya-orange', true)">
                                <img src="demo/images/themes/arya-orange.png" alt="Arya Orange" />
                            </button>
                            <span>Arya Orange</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'arya-purple', true)">
                                <img src="demo/images/themes/arya-purple.png" alt="Arya Purple" />
                            </button>
                            <span>Arya Purple</span>
                        </div>
                    </div>

                    <h4>Premium Themes</h4>
                    <p>Premium themes are only available exclusively for <a href="https://www.primefaces.org/designer/primevue">PrimeVue Theme Designer</a> subscribers and therefore not included in PrimeVue core.</p>
                    <div class="grid free-themes">
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'soho-light')">
                                <img src="demo/images/themes/soho-light.png" alt="Soho Light" />
                            </button>
                            <span>Soho Light</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'soho-dark', true)">
                                <img src="demo/images/themes/soho-dark.png" alt="Soho Dark" />
                            </button>
                            <span>Soho Dark</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'viva-light')">
                                <img src="demo/images/themes/viva-light.svg" alt="Viva Light" />
                            </button>
                            <span>Viva Light</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'viva-dark', true)">
                                <img src="demo/images/themes/viva-dark.svg" alt="Viva Dark" />
                            </button>
                            <span>Viva Dark</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'mira')">
                                <img src="demo/images/themes/mira.jpg" alt="Mira" />
                            </button>
                            <span>Mira</span>
                        </div>
                        <div class="col-3">
                            <button class="p-link" type="button" @click="changeTheme($event, 'nano')">
                                <img src="demo/images/themes/nano.jpg" alt="Mira" />
                            </button>
                            <span>Nano</span>
                        </div>
                    </div>

                    <h4>Admin Templates</h4>
                    <p>Beautifully crafted <a href="https://cli.vuejs.org">Vue CLI</a> application templates by the PrimeTek design team.</p>
                    <div class="grid premium-themes">
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/sakai-vue">
                                <img alt="Ultima" src="./assets/images/layouts/sakai-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/atlantis-vue">
                                <img alt="Atlantis" src="./assets/images/layouts/atlantis-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/freya-vue">
                                <img alt="Freya" src="./assets/images/layouts/freya-vue.png">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/ultima-vue">
                                <img alt="Ultima" src="./assets/images/layouts/ultima-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/diamond-vue">
                                <img alt="Diamond" src="./assets/images/layouts/diamond-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/verona-vue">
                                <img alt="Verona" src="./assets/images/layouts/verona-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/poseidon-vue">
                                <img alt="Poseidon" src="./assets/images/layouts/poseidon-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/sapphire-vue">
                                <img alt="Sapphire" src="./assets/images/layouts/sapphire-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/serenity-vue">
                                <img alt="Serenity" src="./assets/images/layouts/serenity-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/babylon-vue">
                                <img alt="Babylon" src="./assets/images/layouts/babylon-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/avalon-vue">
                                <img alt="Avalon" src="./assets/images/layouts/avalon-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/apollo-vue">
                                <img alt="Apollo" src="./assets/images/layouts/apollo-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/roma-vue">
                                <img alt="Roma" src="./assets/images/layouts/roma-vue.jpg">
                            </a>
                        </div>
                        <div class="col-12 md:col-6">
                            <a href="https://www.primefaces.org/layouts/prestige-vue">
                                <img alt="Prestige" src="./assets/images/layouts/prestige-vue.jpg">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from '@/AppEventBus';

export default {
    props: {
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
    themeChangeListener: null,
    watch: {
        $route() {
            if (this.active) {
                this.active = false;
                this.unbindOutsideClickListener();
            }
        }
    },
    beforeUnmount() {
        EventBus.off('theme-change', this.themeChangeListener);
    },
    mounted() {
        this.themeChangeListener = (event) => {
            if (event.theme === 'nano')
                this.scale = 12;
            else
                this.scale = 14;

            this.applyScale();
        };

        EventBus.on('theme-change', this.themeChangeListener);
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
            EventBus.emit('theme-change', { theme: theme, dark: dark });
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
            this.applyScale();
        },
        incrementScale() {
            this.scale++;
            this.applyScale();
        },
        applyScale() {
            document.documentElement.style.fontSize = this.scale + 'px';
        },
        onRippleChange(value) {
            this.$primevue.config.ripple = value;
        }
    },
    computed: {
        containerClass() {
            return ['layout-config', {'layout-config-active': this.active}];
        },
        rippleActive() {
            return this.$primevue.config.ripple;
        }
    }
}
</script>
