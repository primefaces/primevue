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
export default {
    inject: ['designerService'],
    methods: {
        download() {
            this.designerService.downloadTheme({
                t_key: this.$appState.designer.theme.key,
                t_name: this.$appState.designer.theme.name
            });
        },
        apply() {
            this.designerService.applyTheme(this.$appState.designer.theme);
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Theme saved', life: 3000 });
        }
    }
};
</script>
