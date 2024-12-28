<template>
    <section class="mb-6">
        <div class="text-lg font-semibold mb-4">Font</div>

        <div class="flex gap-4">
            <div class="mb-4">
                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Base</div>
                <select v-model="$appState.designer.theme.config.baseFontSize" @change="changeBaseFontSize" class="appearance-none px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 w-20">
                    <option v-for="fontSize of fontSizes" :key="fontSize" :value="fontSize">{{ fontSize }}</option>
                </select>
            </div>

            <div>
                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Family</div>
                <select v-model="$appState.designer.theme.config.fontFamily" @change="changeFont" class="appearance-none px-3 py-2 rounded-md border border-surface-300 dark:border-surface-700 w-48">
                    <option v-for="font of fonts" :key="font" :value="font">{{ font }}</option>
                </select>
            </div>
        </div>
    </section>
    <section class="mb-6">
        <div class="block text-lg font-semibold mb-2">Migration Assistant</div>
        <span class="block text-muted-color leading-6 mb-4">Automatically update your themes to the latest version by adding any missing tokens.</span>
        <div>
            <button
                type="button"
                @click="checkForUpdates"
                class="px-3 py-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-md font-medium cursor-pointer transition-colors duration-200 focus:outline focus:outline-offset-2 focus:outline-zinc-950 focus:dark:outline-white"
            >
                Check for Updates
            </button>
        </div>
    </section>
</template>

<script>
export default {
    inject: ['designerService'],
    data() {
        return {
            fontSizes: ['12px', '13px', '14px', '15px', '16px', '17px', '18px'],
            fonts: ['DM Sans', 'Inter var', 'Lato', 'Poppins', 'Public Sans', 'Roboto', 'Open Sans', 'Quicksand']
        };
    },
    methods: {
        changeFont() {
            this.designerService.applyFont(this.$appState.designer.theme.config.fontFamily);
            this.designerService.saveTheme(this.$appState.designer.theme);
        },
        changeBaseFontSize() {
            document.documentElement.style.fontSize = this.$appState.designer.theme.config.baseFontSize;
            this.designerService.saveTheme(this.$appState.designer.theme);
        }
    }
};
</script>
