<template>
    <Drawer v-model:visible="$appState.designerActive" header="Theme Designer" position="right" class="designer !w-screen md:!w-[48rem]" :modal="false" :dismissable="false">
        <Tabs value="0">
            <TabList>
                <Tab value="0">Base</Tab>
                <Tab value="1">Primitive</Tab>
                <Tab value="2">Semantic</Tab>
                <Tab value="3">Component</Tab>
                <Tab value="4">Custom</Tab>
            </TabList>
            <TabPanels class="!px-0">
                <TabPanel value="0">
                    <div class="text-lg font-semibold mb-4">Choose a Theme to Get Started</div>
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-4 border border-surface-200 dark:border-surface-700 rounded-md p-4">
                            <span class="font-semibold">Built-in Themes</span>
                            <span class="text-muted-color">Four alternatives to choose from.</span>
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
                        <DesignBorderRadius />
                        <DesignColors />
                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <Accordion :value="['0', '1']" multiple>
                        <AccordionPanel value="0">
                            <AccordionHeader>Common</AccordionHeader>
                            <AccordionContent>
                                <div class="flex flex-col gap-3">
                                    <DesignGeneral />
                                    <DesignFormField />
                                    <DesignList />
                                    <DesignNavigation />
                                    <DesignOverlay />
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
                                            <DesignCS :value="preset.semantic.colorScheme.light" />
                                        </TabPanel>
                                        <TabPanel value="cs-1">
                                            <DesignCS :value="preset.semantic.colorScheme.dark" />
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </TabPanel>
                <TabPanel value="3">Component tokens are not supported by the Visual Editor at the moment.</TabPanel>
                <TabPanel value="4">
                    <span class="leading-6">Extend the theming system with your own design tokens e.g. <span class="font-medium">accent.color</span>. Do not use curly braces in the name field.</span>
                    <ul class="flex flex-col gap-4 list-none p-0 mx-0 my-4">
                        <li v-for="(token, index) of customTokens" :key="index" class="first:border-t border-b border-surface-200 dark:border-surface-300 py-2">
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
                                    class="cursor-pointer inline-flex items-center justify-center ms-auto w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-400/10 dark:hover:bg-red-400/20 dark:text-red-400 transition-colors duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600 focus-visible:dark:outline-red-400"
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
                            class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-zinc-950 focus-visible:dark:outline-white"
                        >
                            Add New
                        </button>
                        <button
                            type="button"
                            @click="saveTokens"
                            class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-zinc-950 focus-visible:dark:outline-white"
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
                    class="px-3 py-2 bg-transparent border border-gray-200 dark:border-gray-700 hover:border-gray-800 dark:hover:border-gray-500 text-black dark:text-white rounded-md font-medium cursor-pointer transition-colors duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-zinc-950 focus-visible:dark:outline-white"
                >
                    Download
                </button>
                <button
                    type="button"
                    @click="apply"
                    class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-zinc-950 focus-visible:dark:outline-white"
                >
                    Apply
                </button>
            </div>
        </template>
    </Drawer>
</template>

<script>
import { updatePreset, usePreset } from '@primevue/themes';
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
            $preset: computed(() => this.preset)
        };
    },
    data() {
        return {
            preset: {
                primitive: Aura.primitive,
                semantic: Aura.semantic
            },
            presetOptions: [
                { label: 'Aura', value: 'Aura' },
                { label: 'Material', value: 'Material' },
                { label: 'Lara', value: 'Lara' },
                { label: 'Nora', value: 'Nora' }
            ],
            customTokens: []
        };
    },
    mounted() {
        this.replaceColorPalette();
    },
    methods: {
        apply() {
            this.saveTheme();
            updatePreset(this.preset);
        },
        download() {
            const theme = JSON.stringify(this.preset, null, 4).replace(/"([^"]+)":/g, '$1:');
            const textContent = `import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

const app = createApp(App);

const MyPreset = definePreset(Aura, ${theme});

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

            this.preset = {
                primitive: newPreset.primitive,
                semantic: newPreset.semantic
            };

            this.preset.semantic.primary = this.preset.primitive.emerald;
            this.preset.semantic.colorScheme.light.surface = { ...{ 0: '#ffffff' }, ...this.preset.primitive.slate };
            this.preset.semantic.colorScheme.dark.surface = { ...{ 0: '#ffffff' }, ...this.preset.primitive.zinc };

            usePreset(this.preset);
        },
        saveTheme() {
            const localState = {
                themes: {
                    defaultTheme: {
                        preset: this.preset,
                        customTokens: this.customTokens
                    }
                }
            };

            localStorage.setItem(this.$appState.designerKey, JSON.stringify(localState));
        },
        loadFromLocalStorage() {
            const localState = localStorage.getItem(this.$appState.designerKey);

            if (localState) {
                const parsedLocalState = JSON.parse(localState);

                if (parsedLocalState?.themes?.defaultTheme) {
                    const defaultTheme = parsedLocalState.themes.defaultTheme;

                    if (defaultTheme.preset) {
                        this.preset = defaultTheme.preset;
                    }

                    if (defaultTheme.customTokens) {
                        this.customTokens = defaultTheme.customTokens;
                    }

                    this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Theme loaded to Designer', life: 3000 });
                }
            }
        },
        addToken() {
            this.customTokens = [...this.customTokens, ...[{}]];
        },
        removeToken(index) {
            this.customTokens.splice(index, 1);
        },
        saveTokens() {
            this.preset.extend = {};
            this.customTokens.forEach((token) => {
                this.preset.extend[this.transformTokenName(token.name)] = token.value;
            });

            this.saveTheme();
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Tokens saved', life: 3000 });
        },
        replaceColorPalette() {
            this.preset.semantic.primary = this.preset.primitive.emerald;
            this.preset.semantic.colorScheme.light.surface = { ...{ 0: '#ffffff' }, ...this.preset.primitive.slate };
            this.preset.semantic.colorScheme.dark.surface = { ...{ 0: '#ffffff' }, ...this.preset.primitive.zinc };
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
        }
    }
};
</script>
