<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>command</i> property defines the callback to run when an item is activated by click or a key event.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <TieredMenu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    icon: 'pi pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-plus',
                            command: () => {
                                this.$toast.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                            }
                        },
                        {
                            label: 'Print',
                            icon: 'pi pi-print',
                            command: () => {
                                this.$toast.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                            }
                        }
                    ]
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                    }
                },
                {
                    separator: true
                },
                {
                    label: 'Sync',
                    icon: 'pi pi-cloud',
                    items: [
                        {
                            label: 'Import',
                            icon: 'pi pi-cloud-download',
                            command: () => {
                                this.$toast.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                            }
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-cloud-upload',
                            command: () => {
                                this.$toast.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                            }
                        }
                    ]
                }
            ],
            code: {
                basic: `
<TieredMenu :model="items" />
<Toast />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <TieredMenu :model="items" />
        <Toast />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    icon: 'pi pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-plus',
                            command: () => {
                                this.$toast.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                            }
                        },
                        {
                            label: 'Print',
                            icon: 'pi pi-print',
                            command: () => {
                                this.$toast.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                            }
                        }
                    ]
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                    }
                },
                {
                    separator: true
                },
                {
                    label: 'Sync',
                    icon: 'pi pi-cloud',
                    items: [
                        {
                            label: 'Import',
                            icon: 'pi pi-cloud-download',
                            command: () => {
                                this.$toast.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                            }
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-cloud-upload',
                            command: () => {
                                this.$toast.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                            }
                        }
                    ]
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <TieredMenu :model="items" />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const items = ref([
    {
        label: 'File',
        icon: 'pi pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                command: () => {
                    toast.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                }
            },
            {
                label: 'Print',
                icon: 'pi pi-print',
                command: () => {
                    toast.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                }
            }
        ]
    },
    {
        label: 'Search',
        icon: 'pi pi-search',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Sync',
        icon: 'pi pi-cloud',
        items: [
            {
                label: 'Import',
                icon: 'pi pi-cloud-download',
                command: () => {
                    toast.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                }
            },
            {
                label: 'Export',
                icon: 'pi pi-cloud-upload',
                command: () => {
                    toast.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                }
            }
        ]
    }
]);
<\/script>
`
            }
        };
    }
};
</script>
