<template>
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
            type="button"
            @click="apply"
            icon="pi pi-download"
            class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white"
        >
            Apply
        </button>
    </div>
</template>

<script>
import EventBus from '@/app/AppEventBus';
import { updatePreset } from '@primevue/themes';

export default {
    setup() {
        const runtimeConfig = useRuntimeConfig();

        return {
            designerApiBase: runtimeConfig.public.designerApiBase
        };
    },
    inject: ['designerService'],
    methods: {
        download() {
            this.designerService.downloadTheme(this.$appState.desiger.theme);
        },
        apply() {
            this.updateTheme();
            updatePreset(this.$appState.designer.theme.preset);
            EventBus.emit('theme-palette-change');
        },
        async updateTheme() {
            const { error } = await $fetch(this.designerApiBase + '/theme/update', {
                method: 'POST',
                body: {
                    key: this.$appState.designer.theme.key,
                    preset: this.$appState.designer.theme.preset,
                    config: this.$appState.designer.theme.config,
                    license_key: this.$appState.designer.licenseKey
                }
            });

            if (error) {
                this.$toast.add({ severity: 'error', summary: 'An error occured', detail: error.message, life: 3000 });
            }
        }
    }
};
</script>
