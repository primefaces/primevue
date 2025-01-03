<template>
    <section class="mb-6">
        <span class="block text-lg font-semibold mb-2">Theme Name</span>
        <input v-model="themeName" type="text" autocomplete="off" class="px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 flex-1" maxlength="25" />
    </section>

    <section class="mb-6">
        <div class="text-lg font-semibold mb-2">Foundation</div>
        <span class="block text-muted-color leading-6 mb-4">Start by choosing a built-in theme as a foundation, or import your own design by uploading a tokens.json file created with the Prime UI Kit and Tokens Studio.</span>
        <div class="flex flex-col">
            <div class="flex flex-col gap-4 border border-surface-200 dark:border-surface-700 rounded-md p-4">
                <span class="font-semibold">Base Theme</span>
                <span class="text-muted-color">Variety of built-in themes with distinct characteristics.</span>
                <div class="flex justify-between">
                    <SelectButton v-model="basePreset" :options="presetOptions" optionLabel="label" optionValue="value" :allowEmpty="false" />
                    <button
                        type="button"
                        @click="createThemeFromPreset"
                        class="btn-design"
                    >
                        Create
                    </button>
                </div>
            </div>

            <Divider>OR</Divider>

            <div class="flex flex-col gap-4 border border-surface-200 dark:border-surface-700 rounded-md p-4">
                <span class="font-semibold">Import Figma Tokens </span>
                <span class="text-muted-color leading-6">Export the token.json file from Figma Token Studio and import to the Visual Editor.</span>
                <div class="flex justify-between">
                    <FileUpload mode="basic" pt:root:class="!justify-start" @select="onFileSelect($event)" />
                    <button
                        type="button"
                        @click="createThemeFromFigma"
                        class="btn-design"
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { usePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara';
import Material from '@primevue/themes/material';
import Nora from '@primevue/themes/nora';

const presets = {
    Aura,
    Material,
    Lara,
    Nora
};

export default {
    setup() {
        const runtimeConfig = useRuntimeConfig();

        return {
            designerApiBase: runtimeConfig.public.designerApiBase
        };
    },
    inject: ['designerService'],
    data() {
        return {
            themeName: null,
            basePreset: 'Aura',
            figmaData: null,
            presetOptions: [
                { label: 'Aura', value: 'Aura' },
                { label: 'Material', value: 'Material' },
                { label: 'Lara', value: 'Lara' },
                { label: 'Nora', value: 'Nora' }
            ]
        };
    },
    methods: {
        async createThemeFromPreset() {
            const newPreset = presets[this.basePreset];

            if (this.basePreset === 'Material') {
                document.body.classList.add('material');
                this.$primevue.config.ripple = true;
            } else {
                document.body.classList.remove('material');
            }

            if (this.$appState.designer.licenseKey) {
                const { data, error } = await $fetch(this.designerApiBase + '/theme/create', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${this.$appState.designer.ticket}`,
                        'X-License-Key': this.$appState.designer.licenseKey
                    },
                    body: {
                        name: this.themeName,
                        preset: newPreset,
                        config: {
                            fontSize: '14px',
                            fontFamily: 'Inter var'
                        }
                    }
                });

                if (error) {
                    this.$toast.add({ severity: 'error', summary: 'An error occured', detail: error.message, life: 3000 });
                } else {
                    this.loadThemeEditor(data.t_key, newPreset);
                }
            } else {
                this.loadThemeEditor('trial', newPreset);
            }
        },
        async createThemeFromFigma() {
            if (this.figmaData) {
                if (this.$appState.designer.licenseKey) {
                    const { data, error } = await $fetch(this.designerApiBase + '/theme/figma', {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${this.$appState.designer.ticket}`,
                            'X-License-Key': this.$appState.designer.licenseKey
                        },
                        body: {
                            name: this.themeName,
                            figma_tokens: this.figmaData,
                            config: {
                                fontSize: '14px',
                                fontFamily: 'Inter var'
                            }
                        }
                    });

                    if (error) {
                        this.$toast.add({ severity: 'error', summary: 'An error occured', detail: error.message, life: 3000 });
                    } else {
                        this.loadThemeEditor(data.t_key, data.t_preset);

                        if (data.lostAndFound?.length) {
                            this.$toast.add({ severity: 'warn', summary: 'Warning', detail: 'There are missing tokens. An update is recommended using the "Migration Assistant" in the settings section.' });
                        }
                    }
                } else {
                    this.$toast.add({ severity: 'error', summary: 'An error occured', detail: 'A valid license required', life: 3000 });
                }
            } else {
                this.$toast.add({ severity: 'error', summary: 'An error occured', detail: 'File is required', life: 3000 });
            }
        },
        onFileSelect(event) {
            const file = event.files[0];

            if (!file) {
                return;
            }

            const reader = new FileReader();

            reader.onload = (e) => {
                this.figmaData = e.target.result;
            };

            reader.onerror = (e) => {
                this.$toast.add({ severity: 'error', summary: 'An error occured', detail: 'Unable to read file', life: 3000 });
            };

            reader.readAsText(file);
        },
        loadThemeEditor(t_key, preset) {
            this.$appState.designer.theme = {
                name: this.themeName,
                key: t_key,
                preset: preset,
                config: {
                    fontSize: '14px',
                    fontFamily: 'Inter var'
                }
            };
            this.designerService.replaceColorPalette();
            usePreset(preset);
            this.designerService.refreshACTokens();

            this.$appState.designer.activeView = 'editor';
        }
    }
};
</script>
