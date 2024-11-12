<template>
    <Drawer v-model:visible="$appState.designerActive" header="Theme Designer" position="right" class="designer !w-screen md:!w-[48rem]" :modal="false">
        <Tabs value="0">
            <TabList>
                <Tab value="0">Base</Tab>
                <Tab value="1">Primitive</Tab>
                <Tab value="2">Semantic</Tab>
                <Tab value="3">Component</Tab>
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
                <TabPanel value="3"> <div class="p-4">Component tokens are not supported by the Visual Editor at the moment.</div></TabPanel>
            </TabPanels>
        </Tabs>

        <template #footer>
            <div class="flex justify-between gap-2">
                <Button type="button" @click="download" label="Download" variant="outlined" icon="pi pi-download" class="!px-3 !py-2" />
                <Button type="button" @click="apply" label="Apply" class="!px-3 !py-2" />
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
            customThemes: {},
            newThemeName: null
        };
    },
    mounted() {
        this.preset.semantic.primary = this.preset.primitive.emerald;
        this.preset.semantic.colorScheme.light.surface = { ...{ 0: '#ffffff' }, ...this.preset.primitive.slate };
        this.preset.semantic.colorScheme.dark.surface = { ...{ 0: '#ffffff' }, ...this.preset.primitive.zinc };
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

            usePreset(newPreset);

            this.preset = {
                primitive: newPreset.primitive,
                semantic: newPreset.semantic
            };
        },
        saveTheme() {
            const themeRecord = {
                defaultTheme: this.preset
            };

            localStorage.setItem(this.$appState.designerKey, JSON.stringify(themeRecord));
        },
        loadFromLocalStorage() {
            const savedTheme = localStorage.getItem(this.$appState.designerKey);

            if (savedTheme) {
                this.preset = JSON.parse(savedTheme).defaultTheme;
                this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Theme loaded to Designer', life: 3000 });
            }
        }
    }
};
</script>
