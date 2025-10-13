<template>
    <div class="flex justify-end gap-2">
        <button type="button" @click="download" icon="pi pi-download" class="btn-design-outlined">Download</button>
        <button type="button" @click="apply" icon="pi pi-download" class="btn-design" :disabled="$appState.designer.theme.origin !== 'web'">Apply</button>
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
