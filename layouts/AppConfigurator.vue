<template>
    <Sidebar v-model:visible="visible" @hide="onSidebarHide" :class="containerClass" position="right">
        <div class="p-2">
            <section class="pb-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                <span class="text-xl font-semibold">Scale</span>
                <div class="flex align-items-center gap-2 border-1 surface-border py-1 px-2" style="border-radius: 30px">
                    <Button icon="pi pi-minus" @click="decrementScale" text rounded :disabled="scale === scales[0]" />
                    <i v-for="s in scales" :key="s" :class="['pi pi-circle-fill text-sm text-200', { 'text-lg text-primary': s === scale }]" />

                    <Button icon="pi pi-plus" @click="incrementScale" text rounded :disabled="scale === scales[scales.length - 1]" />
                </div>
            </section>

            <section class="py-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                <span :class="['text-xl font-semibold']">Dark Mode</span>
                <InputSwitch :modelValue="darkMode" @update:modelValue="onDarkModeChange" />
            </section>

            <section class="py-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                <span class="text-xl font-semibold">Ripple Effect</span>
                <InputSwitch :modelValue="rippleActive" @update:modelValue="onRippleChange" />
            </section>

            <section class="py-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                <span class="text-xl font-semibold">Input Variant</span>
                <SelectButton :modelValue="inputStyle" @update:modelValue="onInputStyleChange" :options="inputStyles" optionLabel="label" optionValue="value" :allowEmpty="false" />
            </section>

            <section class="py-4 border-bottom-1 surface-border">
                <div class="text-xl font-semibold mb-3">Themes</div>
                <div class="flex align-items-center gap-2 mb-3">
                    <img src="https://primefaces.org/cdn/primevue/images/themes/aura.png" alt="Aura" style="width: 1.5rem" />
                    <span class="font-medium">Aura</span>
                </div>
                <div class="flex align-items-center justify-content-between gap-3 mb-3">
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('aura', 'green'), 'hover:border-500 surface-border': !isThemeActive('aura', 'green') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('aura', 'green')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #4dac9c 0%, rgba(77, 172, 156, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('aura', 'cyan'), 'hover:border-500 surface-border': !isThemeActive('aura', 'cyan') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('aura', 'cyan')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #06b6d4 0%, rgba(6, 182, 212, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('aura', 'blue'), 'hover:border-500 surface-border': !isThemeActive('aura', 'blue') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('aura', 'blue')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #4378e6 0%, rgba(67, 120, 230, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('aura', 'indigo'), 'hover:border-500 surface-border': !isThemeActive('aura', 'indigo') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('aura', 'indigo')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #585fe0 0%, rgba(88, 95, 224, 0.5) 100%)"></span>
                    </button>
                </div>
                <div class="flex align-items-center justify-content-between gap-3 mb-3">
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('aura', 'purple'), 'hover:border-500 surface-border': !isThemeActive('aura', 'purple') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('aura', 'purple')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #7758e4 0%, rgba(119, 88, 228, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('aura', 'amber'), 'hover:border-500 surface-border': !isThemeActive('aura', 'amber') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('aura', 'amber')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #f59e0b 0%, rgba(245, 158, 11, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('aura', 'teal'), 'hover:border-500 surface-border': !isThemeActive('aura', 'teal') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('aura', 'teal')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #14b8a6 0%, rgba(20, 184, 166, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('aura', 'pink'), 'hover:border-500 surface-border': !isThemeActive('aura', 'pink') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('aura', 'pink')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #ec4899 0%, rgba(236, 72, 153, 0.5) 100%)"></span>
                    </button>
                </div>
                <div class="flex align-items-center justify-content-between gap-3">
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('aura', 'noir'), 'hover:border-500 surface-border': !isThemeActive('aura', 'noir') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('aura', 'noir')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #0f172a 0%, rgba(0, 0, 0, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('aura', 'lime'), 'hover:border-500 surface-border': !isThemeActive('aura', 'lime') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('aura', 'lime')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #84cc16 0%, rgb(132, 204, 22, 0.5) 100%)"></span>
                    </button>
                    <span class="w-3"></span>
                    <span class="w-3"></span>
                </div>

                <section class="pt-4 flex align-items-center justify-content-between">
                    <span class="text-sm">Primary Focus Ring</span>
                    <InputSwitch :modelValue="primaryFocusRing" @update:modelValue="onFocusRingColorChange" />
                </section>
            </section>

            <section class="py-4 border-bottom-1 surface-border">
                <div class="flex align-items-center gap-2 mb-3">
                    <img src="https://primefaces.org/cdn/primevue/images/themes/lara-light-teal.png" alt="Lara Light Teal" class="border-circle" style="width: 1.5rem" />
                    <span class="font-medium">Lara</span>
                </div>
                <div class="flex align-items-center justify-content-between gap-3 mb-3">
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('lara', 'green'), 'hover:border-500 surface-border': !isThemeActive('lara', 'green') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('lara', 'green')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #4dac9c 0%, rgba(77, 172, 156, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('lara', 'cyan'), 'hover:border-500 surface-border': !isThemeActive('lara', 'cyan') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('lara', 'cyan')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #06b6d4 0%, rgba(6, 182, 212, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('lara', 'blue'), 'hover:border-500 surface-border': !isThemeActive('lara', 'blue') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('lara', 'blue')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #4378e6 0%, rgba(67, 120, 230, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('lara', 'indigo'), 'hover:border-500 surface-border': !isThemeActive('lara', 'indigo') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('lara', 'indigo')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #585fe0 0%, rgba(88, 95, 224, 0.5) 100%)"></span>
                    </button>
                </div>
                <div class="flex align-items-center justify-content-between gap-3">
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('lara', 'purple'), 'hover:border-500 surface-border': !isThemeActive('lara', 'purple') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('lara', 'purple')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #7758e4 0%, rgba(119, 88, 228, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('lara', 'amber'), 'hover:border-500 surface-border': !isThemeActive('lara', 'amber') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('lara', 'amber')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #f59e0b 0%, rgba(245, 158, 11, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('lara', 'teal'), 'hover:border-500 surface-border': !isThemeActive('lara', 'teal') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('lara', 'teal')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #14b8a6 0%, rgba(20, 184, 166, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('lara', 'pink'), 'hover:border-500 surface-border': !isThemeActive('lara', 'pink') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('lara', 'pink')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #ec4899 0%, rgba(236, 72, 153, 0.5) 100%)"></span>
                    </button>
                </div>
            </section>
            <section class="py-4 border-bottom-1 surface-border">
                <div class="flex align-items-center gap-2 mb-3">
                    <img src="https://primefaces.org/cdn/primevue/images/themes/md-light-indigo.svg" alt="Material Design" class="border-circle" style="width: 1.5rem" />
                    <span class="font-medium">Material Design</span>
                    <div class="ml-auto flex align-items-center gap-2">
                        <label for="material-condensed" class="text-sm">Condensed</label>
                        <InputSwitch inputId="material-condensed" :modelValue="compactMaterial" @update:modelValue="onCompactMaterialChange" class="ml-auto" />
                    </div>
                </div>
                <div class="flex align-items-center justify-content-between gap-3">
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('md', 'indigo'), 'hover:border-500 surface-border': !isThemeActive('md', 'indigo') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('md', 'indigo')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #0565f2 0%, rgba(5, 101, 242, 0.5) 100%)"></span>
                    </button>
                    <button
                        :class="[
                            'bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200',
                            { 'border-primary': isThemeActive('md', 'deeppurple'), 'hover:border-500 surface-border': !isThemeActive('md', 'deeppurple') }
                        ]"
                        style="border-radius: 30px"
                        @click="changeTheme('md', 'deeppurple')"
                    >
                        <span class="block h-1rem w-full" style="border-radius: 30px; background: linear-gradient(180deg, #702f92 0%, rgba(112, 47, 146, 0.5) 100%)"></span>
                    </button>
                    <div class="w-3"></div>
                    <div class="w-3"></div>
                </div>
            </section>
        </div>
    </Sidebar>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    emits: ['updateConfigActive', 'darkswitch-click'],
    props: {
        configActive: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            visible: false,
            scale: 14,
            scales: [12, 13, 14, 15, 16],
            inputStyles: [
                { label: 'Outlined', value: 'outlined' },
                { label: 'Filled', value: 'filled' }
            ],
            primaryFocusRing: true,
            compactMaterial: false
        };
    },
    watch: {
        configActive(value) {
            this.visible = value;
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
            this.$emit('updateConfigActive', false);
        },
        changeTheme(theme, color) {
            let newTheme, dark;

            newTheme = theme + '-' + (this.$appState.darkTheme ? 'dark' : 'light');

            if (color) {
                newTheme += '-' + color;
            }

            if (newTheme.startsWith('md-') && this.compactMaterial) {
                newTheme = newTheme.replace('md-', 'mdc-');
            }

            dark = this.$appState.darkTheme;

            EventBus.emit('theme-change', { theme: newTheme, dark: dark });
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
            this.$appState.ripple = value;
        },
        onInputStyleChange(value) {
            this.$primevue.config.inputStyle = value;
        },
        onDarkModeChange() {
            this.$emit('darkswitch-click');
        },
        onCompactMaterialChange(value) {
            this.compactMaterial = value;

            if (this.$appState.theme.startsWith('md')) {
                let tokens = this.$appState.theme.split('-');

                this.changeTheme(tokens[0].substring(0, 2), tokens[2]);
            }
        },
        isThemeActive(themeFamily, color) {
            let themeName;
            let themePrefix = themeFamily === 'md' && this.compactMaterial ? 'mdc' : themeFamily;

            themeName = themePrefix + (this.$appState.darkTheme ? '-dark' : '-light');

            if (color) {
                themeName += '-' + color;
            }

            return this.$appState.theme === themeName;
        },
        onFocusRingColorChange(value) {
            this.primaryFocusRing = value;
            let root = document.documentElement;

            if (value) {
                if (this.$appState.darkTheme) root.style.setProperty('--p-focus-ring-color', 'var(--primary-500)');
                else root.style.setProperty('--p-focus-ring-color', 'var(--primary-500)');
            } else {
                if (this.$appState.darkTheme) root.style.setProperty('--p-focus-ring-color', 'var(--surface-500)');
                else root.style.setProperty('--p-focus-ring-color', 'var(--surface-900)');
            }
        }
    },
    computed: {
        darkMode() {
            return this.$appState.darkTheme;
        },
        rippleActive() {
            return this.$appState.ripple;
        },
        inputStyle() {
            return this.$primevue.config.inputStyle || 'outlined';
        },
        containerClass() {
            return [
                'layout-config w-full sm:w-26rem',
                {
                    'layout-dark': this.$appState.darkTheme,
                    'layout-light': !this.$appState.darkTheme
                }
            ];
        }
    }
};
</script>
