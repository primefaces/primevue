<template>
    <Drawer
        v-model:visible="$appState.designer.active"
        header="Theme Designer"
        position="right"
        class="designer !w-screen md:!w-[48rem]"
        :modal="false"
        :dismissable="false"
        @after-show="onShow"
        @after-hide="onHide"
        :pt="{
            header: 'p-5',
            content: '!p-5',
            footer: '!p-5'
        }"
    >
        <Tabs v-model:value="$appState.designer.activeTab" :lazy="deferredTabs">
            <TabList>
                <Tab value="0">Base</Tab>
                <Tab value="1">Primitive</Tab>
                <Tab value="2">Semantic</Tab>
                <Tab value="3">Component</Tab>
                <Tab value="4">Custom</Tab>
            </TabList>
            <TabPanels class="!px-0">
                <TabPanel value="0">
                    <div class="text-lg font-semibold mb-2">Choose a Theme to Get Started</div>
                    <span class="block text-muted-color leading-6 mb-4">Begin by selecting a built-in theme as a foundation, continue editing your current theme, or import a Figma tokens file.</span>
                    <div class="flex flex-col">
                        <div class="flex flex-col gap-4 border border-surface-200 dark:border-surface-700 rounded-md p-4">
                            <span class="font-semibold">Base Theme</span>
                            <span class="text-muted-color">Variety of built-in themes with distinct characteristics.</span>
                            <SelectButton v-model="$appState.preset" @update:modelValue="onPresetChange" :options="presetOptions" optionLabel="label" optionValue="value" :allowEmpty="false" />
                        </div>
                        <Divider>OR</Divider>
                        <div class="flex flex-col gap-4 border border-surface-200 dark:border-surface-700 rounded-md p-4 items-start">
                            <span class="font-semibold">Load Theme</span>
                            <span class="text-muted-color">Continue editing the theme files stored locally.</span>
                            <Button label="Restore from local storage" class="!px-3 !py-2" severity="secondary" @click="loadFromLocalStorage" />
                        </div>
                        <Divider>OR</Divider>
                        <div class="flex flex-col gap-4 border border-surface-200 dark:border-surface-700 rounded-md p-4">
                            <div class="flex items-center gap-4">
                                <span class="font-semibold">Import Figma Tokens </span>
                                <Tag value="PRO" severity="contrast"></Tag>
                            </div>
                            <span class="text-muted-color leading-6">Export the token studio json file and import to the Visual Editor. This feature is currently under development.</span>
                            <FileUpload mode="basic" disabled pt:root:class="!justify-start" />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="1">
                    <div class="flex flex-col gap-3">
                        <form @keydown="onKeyDown" class="flex flex-col gap-3">
                            <DesignBorderRadius />
                            <DesignColors />
                        </form>
                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <Accordion :value="['0', '1']" multiple>
                        <AccordionPanel value="0">
                            <AccordionHeader>Common</AccordionHeader>
                            <AccordionContent>
                                <div class="flex flex-col gap-3">
                                    <form @keydown="onKeyDown" class="flex flex-col gap-3">
                                        <DesignGeneral />
                                        <DesignFormField />
                                        <DesignList />
                                        <DesignNavigation />
                                        <DesignOverlay />
                                    </form>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel value="1">
                            <AccordionHeader>Color Scheme</AccordionHeader>
                            <AccordionContent>
                                <Tabs value="cs-0">
                                    <TabList>
                                        <Tab value="cs-0">Light</Tab>
                                        <Tab value="cs-1">Dark</Tab>
                                    </TabList>
                                    <TabPanels class="!px-0">
                                        <TabPanel value="cs-0">
                                            <form @keydown="onKeyDown">
                                                <DesignCS :value="$appState.designer.preset.semantic.colorScheme.light" />
                                            </form>
                                        </TabPanel>
                                        <TabPanel value="cs-1">
                                            <form @keydown="onKeyDown">
                                                <DesignCS :value="$appState.designer.preset.semantic.colorScheme.dark" />
                                            </form>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </TabPanel>
                <TabPanel value="3">
                    <span class="leading-6 text-muted-color">Component tokens are not supported by the Visual Editor at the moment and will be available with a future update. </span>
                </TabPanel>
                <TabPanel value="4">
                    <span class="leading-6 text-muted-color">Extend the theming system with your own design tokens e.g. <span class="font-medium">accent.color</span>. Do not use curly braces in the name field.</span>
                    <ul class="flex flex-col gap-4 list-none p-0 mx-0 my-4">
                        <li v-for="(token, index) of $appState.designer.customTokens" :key="index" class="first:border-t border-b border-surface-200 dark:border-surface-300 py-2">
                            <div class="flex items-center gap-4">
                                <label class="flex items-center gap-2 flex-auto">
                                    <span class="text-sm">Name</span>
                                    <input v-model="token['name']" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg py-2 px-2 w-full" />
                                </label>
                                <label class="flex items-center gap-2 flex-auto">
                                    <span class="text-sm">Value</span>
                                    <input v-model="token['value']" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg py-2 px-2 w-full" />
                                </label>
                                <button
                                    type="button"
                                    @click="removeToken(index)"
                                    class="cursor-pointer inline-flex items-center justify-center ms-auto w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-400/10 dark:hover:bg-red-400/20 dark:text-red-400 transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-red-600 focus:dark:outline-red-400"
                                >
                                    <i class="pi pi-times" />
                                </button>
                            </div>
                        </li>
                    </ul>
                    <div class="flex justify-between">
                        <button
                            type="button"
                            @click="addToken"
                            class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white"
                        >
                            Add New
                        </button>
                        <button
                            v-if="$appState.designer.customTokens.length"
                            type="button"
                            @click="saveTokens"
                            class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white"
                        >
                            Save
                        </button>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>

        <template #footer>
            <div class="flex justify-between gap-2">
                <button
                    type="button"
                    @click="download"
                    icon="pi pi-download"
                    class="px-3 py-2 bg-transparent border border-gray-200 dark:border-gray-700 hover:border-gray-800 dark:hover:border-gray-500 text-black dark:text-white rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white"
                >
                    Download
                </button>
                <button
                    v-if="$appState.designer.activeTab !== '0'"
                    type="button"
                    @click="apply"
                    class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white"
                >
                    Apply
                </button>
            </div>
        </template>
    </Drawer>
</template>

<script>
import EventBus from '@/app/AppEventBus';
import { $dt, updatePreset, usePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara';
import Material from '@primevue/themes/material';
import Nora from '@primevue/themes/nora';
import { computed } from 'vue';

const presets = {
    Aura,
    Material,
    Lara,
    Nora
};

export default {
    provide() {
        return {
            $preset: computed(() => this.$appState.designer.preset)
        };
    },
    data() {
        return {
            deferredTabs: true,
            presetOptions: [
                { label: 'Aura', value: 'Aura' },
                { label: 'Material', value: 'Material' },
                { label: 'Lara', value: 'Lara' },
                { label: 'Nora', value: 'Nora' }
            ]
        };
    },
    mounted() {
        if (!this.$appState.designer.preset) {
            const defaultPreset = presets.Aura;

            this.$appState.designer.preset = {
                primitive: defaultPreset.primitive,
                semantic: defaultPreset.semantic
            };

            this.replaceColorPalette();
            this.generateACTokens(null, this.$appState.designer.preset);
        }
    },
    methods: {
        apply() {
            this.saveTheme();
            updatePreset(this.$appState.designer.preset);
            EventBus.emit('theme-palette-change');
        },
        download() {
            const basePreset = this.$appState.preset;
            const theme = JSON.stringify(this.$appState.designer.preset, null, 4).replace(/"([^"]+)":/g, '$1:');
            const textContent = `import { createApp } from "vue";
import PrimeVue from "primevue/config";
import ${basePreset} from "@primevue/themes/${basePreset.toLowerCase()}";
import { definePreset } from "@primevue/themes";

const app = createApp(App);

const MyPreset = definePreset(${basePreset}, ${theme});

app.use(PrimeVue, {
    theme: {
        preset: MyPreset
    },
});
app.mount("#app");
`;
            const blob = new Blob([textContent], { type: 'text/plain' });

            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');

            a.href = url;
            a.download = 'mytheme.js';
            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },
        onPresetChange(value) {
            this.$appState.preset = value;
            const newPreset = presets[value];

            if (value === 'Material') {
                document.body.classList.add('material');
                this.$primevue.config.ripple = true;
            } else {
                document.body.classList.remove('material');
            }

            this.$appState.designer.preset = {
                primitive: newPreset.primitive,
                semantic: newPreset.semantic
            };

            this.replaceColorPalette();

            usePreset(this.$appState.designer.preset);
        },
        saveTheme() {
            const localState = {
                themes: {
                    defaultTheme: {
                        preset: this.$appState.designer.preset,
                        customTokens: this.$appState.designer.customTokens
                    }
                }
            };

            localStorage.setItem(this.$appState.designer.key, JSON.stringify(localState));
        },
        loadFromLocalStorage() {
            const localState = localStorage.getItem(this.$appState.designer.key);

            if (localState) {
                const parsedLocalState = JSON.parse(localState);

                if (parsedLocalState?.themes?.defaultTheme) {
                    const defaultTheme = parsedLocalState.themes.defaultTheme;

                    if (defaultTheme.preset) {
                        this.$appState.designer.preset = defaultTheme.preset;
                        usePreset(this.$appState.designer.preset);
                    }

                    if (defaultTheme.customTokens) {
                        this.$appState.designer.customTokens = defaultTheme.customTokens;
                        this.refreshACTokens();
                    }

                    this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Theme loaded to Designer.', life: 3000 });
                }
            } else {
                this.$toast.add({ severity: 'warn', summary: 'Error', detail: 'No saved theme found.', life: 3000 });
            }
        },
        addToken() {
            this.$appState.designer.customTokens = [...this.$appState.designer.customTokens, ...[{}]];
        },
        removeToken(index) {
            this.$appState.designer.customTokens.splice(index, 1);
        },
        saveTokens() {
            this.$appState.designer.preset.extend = {};
            this.$appState.designer.customTokens.forEach((token) => {
                this.$appState.designer.preset.extend[this.transformTokenName(token.name)] = token.value;
            });

            this.refreshACTokens();
            this.saveTheme();
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Tokens saved', life: 3000 });
        },
        replaceColorPalette() {
            this.$appState.designer.preset.semantic.primary = this.$appState.designer.preset.primitive.emerald;
            this.$appState.designer.preset.semantic.colorScheme.light.surface = { ...{ 0: '#ffffff' }, ...this.$appState.designer.preset.primitive.slate };
            this.$appState.designer.preset.semantic.colorScheme.dark.surface = { ...{ 0: '#ffffff' }, ...this.$appState.designer.preset.primitive.zinc };
        },
        transformTokenName(name) {
            if (name && name.trim().length) {
                let tokenNameSections = name.split('.');
                let transformedName = '';

                tokenNameSections.forEach((section, index) => {
                    transformedName += index === 0 ? section : section.charAt(0).toUpperCase() + section.substring(1);
                });

                return transformedName;
            } else {
                return name;
            }
        },
        camelCaseToDotCase(name) {
            return name.replace(/([a-z])([A-Z])/g, '$1.$2').toLowerCase();
        },
        generateACTokens(parentPath, obj) {
            for (let key in obj) {
                if (key === 'dark') {
                    continue;
                }

                if (key === 'primitive' || key === 'semantic' || key === 'colorScheme' || key === 'light' || key === 'extend') {
                    this.generateACTokens(null, obj[key]);
                } else {
                    if (typeof obj[key] === 'object') {
                        this.generateACTokens(parentPath ? parentPath + '.' + key : key, obj[key]);
                    } else {
                        const regex = /\.\d+$/;
                        const tokenName = this.camelCaseToDotCase(parentPath ? parentPath + '.' + key : key);
                        const tokenValue = $dt(tokenName).value;
                        const isColor = tokenName.includes('color') || tokenName.includes('background') || regex.test(tokenName);

                        this.$appState.designer.acTokens.push({ token: tokenName, label: '{' + tokenName + '}', variable: $dt(tokenName).variable, value: tokenValue, isColor: isColor });
                    }
                }
            }
        },
        refreshACTokens() {
            this.$appState.designer.acTokens = [];
            this.generateACTokens(null, this.$appState.designer.preset);
        },
        onKeyDown(event) {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                this.apply();
                event.preventDefault();
            }
        },
        onShow() {
            this.deferredTabs = false;
        },
        onHide() {
            this.deferredTabs = true;
        }
    }
};
</script>
