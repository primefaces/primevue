<template>
    <Sidebar v-model:visible="visible" @hide="onSidebarHide" class="layout-config-sidebar w-full sm:w-30rem" position="right">
        <div class="p-2">
            <section class="mb-5">
                <h3>Component Scale</h3>
                <div class="flex align-items-center gap-2">
                    <Button icon="pi pi-minus" @click="decrementScale" text rounded class="w-2rem h-2rem" :disabled="scale === scales[0]" />
                    <i v-for="s in scales" :key="s" :class="['pi pi-circle-fill text-sm text-600', { 'text-lg text-primary': s === scale }]" />

                    <Button icon="pi pi-plus" @click="incrementScale" text rounded class="w-2rem h-2rem" :disabled="scale === scales[scales.length - 1]" />
                </div>
            </section>

            <section class="mb-5">
                <h3>Input Style</h3>
                <div class="flex gap-5">
                    <div class="flex align-items-center gap-2">
                        <RadioButton v-model="inputStyle" name="inputStyle" value="outlined" inputId="outlined_input"></RadioButton>
                        <label for="outlined_input">Outlined</label>
                    </div>
                    <div class="flex align-items-center gap-2">
                        <RadioButton v-model="inputStyle" name="inputStyle" value="filled" inputId="filled_input"></RadioButton>
                        <label for="filled_input">Filled</label>
                    </div>
                </div>
            </section>

            <section class="mb-5">
                <h3>Ripple Effect</h3>
                <InputSwitch v-model="ripple" />
            </section>

            <section>
                <h3>Free Themes</h3>
                <p>
                    Built-in component themes created by the
                    <a href="https://www.primefaces.org/designer/primevue" class="text-primary hover:underline font-medium"> primevue Theme Designer </a>
                    .
                </p>

                <h4>Bootstrap</h4>
                <div class="grid free-themes">
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('bootstrap4-light-blue')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/bootstrap4-light-blue.svg" alt="Bootstrap Light Blue" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Blue</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('bootstrap4-light-purple')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/bootstrap4-light-purple.svg" alt="Bootstrap Light Blue" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Purple</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('bootstrap4-dark-blue', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/bootstrap4-dark-blue.svg" alt="Bootstrap Dark Blue" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Blue</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('bootstrap4-dark-purple', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/bootstrap4-dark-purple.svg" alt="Bootstrap Dark Blue" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Purple</span>
                    </div>
                </div>

                <h4>Material Design</h4>
                <div class="grid free-themes">
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('md-light-indigo', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/md-light-indigo.svg" alt="Material Light Indigo" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Indigo</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('md-light-deeppurple', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/md-light-deeppurple.svg" alt="Material Light Deep Purple" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Deep Purple</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('md-dark-indigo', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/md-dark-indigo.svg" alt="Material Dark Indigo" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Indigo</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('md-dark-purple', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/md-dark-deeppurple.svg" alt="Material Dark Deep Purple" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Deep Purple</span>
                    </div>
                </div>

                <h4>Material Design Compact</h4>
                <div class="grid free-themes">
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('md-light-indigo')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/md-light-indigo.svg" alt="Material Compact Light Indigo" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Indigo</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('mdc-light-deeppurple')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/md-light-deeppurple.svg" alt="Material Compact Deep Purple" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Deep Purple</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('mdc-dark-indigo', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/md-dark-indigo.svg" alt="Material Compact Dark Indigo" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Indigo</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('mdc-dark-deeppurple', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/md-dark-deeppurple.svg" alt="Material Compact Dark Deep Purple" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Deep Purple</span>
                    </div>
                </div>

                <h4>Tailwind</h4>
                <div class="grid free-themes">
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('tailwind-light')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/tailwind-light.png" alt="Tailwind Light" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Tailwind Light</span>
                    </div>
                </div>

                <h4>Fluent UI</h4>
                <div class="grid free-themes">
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('fluent-light')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/fluent-light.png" alt="Fluent Light" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Blue</span>
                    </div>
                </div>

                <h4>PrimeOne Design</h4>
                <div class="grid free-themes">
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('lara-light-indigo')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/lara-light-indigo.png" alt="Lara Light Indigo" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Lara Indigo</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('lara-light-blue')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/lara-light-blue.png" alt="Lara Light Blue" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Lara Blue</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('lara-light-purple')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/lara-light-purple.png" alt="Lara Light Purple" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Lara Purple</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('lara-light-teal')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/lara-light-teal.png" alt="Lara Light Teal" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Lara Teal</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('lara-dark-indigo', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/lara-dark-indigo.png" alt="Lara Dark Indigo" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Lara Indigo</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('lara-dark-blue', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/lara-dark-blue.png" alt="Lara Dark Blue" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Lara Blue</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('lara-dark-purple', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/lara-dark-purple.png" alt="Lara Dark Purple" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Lara Purple</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('lara-dark-teal', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/lara-dark-teal.png" alt="Lara Dark Teal" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Lara Teal</span>
                    </div>
                </div>

                <h4>Misc</h4>
                <div class="grid free-themes">
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('soho-light')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/soho-light.png" alt="Soho Light" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Soho Light</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('soho-dark', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/soho-dark.png" alt="Soho Dark" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Soho Dark</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('viva-light')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/viva-light.svg" alt="Viva Light" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Viva Light</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('viva-dark', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/viva-dark.svg" alt="Viva Dark" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Viva Dark</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('mira')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/mira.jpg" alt="Mira" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Mira</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('nano')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/nano.jpg" alt="Nano" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Nano</span>
                    </div>
                </div>

                <h4>PrimeOne Design - Legacy</h4>
                <div class="grid free-themes">
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('saga-blue')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/saga-blue.png" alt="Saga Blue" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Saga Blue</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('saga-green')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/saga-green.png" alt="Saga Green" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Saga Green</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('saga-orange')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/saga-orange.png" alt="Saga Orange" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Saga Orange</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('saga-purple')">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/saga-purple.png" alt="Saga Purple" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Saga Purple</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('vela-blue', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/vela-blue.png" alt="Vela Blue" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Vela Blue</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('vela-green', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/vela-green.png" alt="Vela Green" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Vela Green</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('vela-orange', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/vela-orange.png" alt="Vela Orange" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Vela Orange</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('vela-purple', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/vela-purple.png" alt="Vela Purple" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Vela Purple</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('arya-blue', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/arya-blue.png" alt="Arya Blue" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Arya Blue</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('arya-green', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/arya-green.png" alt="Arya Green" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Arya Green</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('arya-orange', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/arya-orange.png" alt="Arya Orange" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Arya Orange</span>
                    </div>
                    <div class="col-3 flex flex-column align-items-center gap-2">
                        <button class="p-link" @click="changeTheme('arya-purple', true)">
                            <img src="https://primefaces.org/cdn/primevue/images/themes/arya-purple.png" alt="Arya Purple" class="w-3rem border-round" />
                        </button>
                        <span class="white-space-nowrap">Arya Purple</span>
                    </div>
                </div>
            </section>
        </div>
    </Sidebar>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: Boolean
    },
    data() {
        return {
            visible: false,
            scale: 14,
            scales: [12, 13, 14, 15, 16],
            inputStyle: 'filled',
            ripple: true
        };
    },
    watch: {
        modelValue(value) {
            this.visible = value;
        },
        inputStyle(value) {
            this.$primevue.config.inputStyle = value === 'filled';
        },
        ripple(value) {
            this.$primevue.config.ripple = value;
        }
    },
    outsideClickListener: null,
    themeChangeListener: null,
    beforeUnmount() {
        EventBus.off('theme-change', this.themeChangeListener);
    },
    mounted() {
        this.themeChangeListener = (event) => {
            if (event.theme === 'nano') this.scale = 12;
            else this.scale = 14;

            this.applyScale();
        };

        EventBus.on('theme-change', this.themeChangeListener);
    },
    methods: {
        onSidebarHide() {
            this.visible = false;
            this.$emit('update:modelValue', false);
        },
        changeTheme(theme, dark) {
            EventBus.emit('theme-change', { theme: theme, dark: dark });
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
        }
    }
};
</script>
