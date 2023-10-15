<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <Menu
            :model="items"
            :pt="{
                submenuHeader: { class: 'text-surface-900' },
                action: ({ props, state, context }) => ({
                    class: context.focused ? 'bg-primary-400' : undefined
                })
            }"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Options',
                    items: [
                        {
                            label: 'Update',
                            icon: 'pi pi-refresh',
                            command: () => {
                                this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                            }
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-times',
                            command: () => {
                                this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                            }
                        }
                    ]
                },
                {
                    label: 'Navigate',
                    items: [
                        {
                            label: 'Vue Website',
                            icon: 'pi pi-external-link',
                            url: 'https://vuejs.org/'
                        },
                        {
                            label: 'Router',
                            icon: 'pi pi-upload',
                            to: '/fileupload'
                        }
                    ]
                }
            ],
            code: {
                basic: `
<Menu
    :model="items"
    :pt="{
        submenuHeader: { class: 'text-surface-900' },
        action: ({ props, state, context }) => ({
            class: context.focused ? 'bg-primary-400' : undefined
        })
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Menu
            :model="items"
            :pt="{
                submenuHeader: { class: 'text-surface-900' },
                action: ({ props, state, context }) => ({
                    class: context.focused ? 'bg-primary-400' : undefined
                })
            }"
        />
        <Toast />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Options',
                    items: [
                        {
                            label: 'Update',
                            icon: 'pi pi-refresh',
                            command: () => {
                                this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                            }
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-times',
                            command: () => {
                                this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                            }
                        }
                    ]
                },
                {
                    label: 'Navigate',
                    items: [
                        {
                            label: 'Vue Website',
                            icon: 'pi pi-external-link',
                            url: 'https://vuejs.org/'
                        },
                        {
                            label: 'Router',
                            icon: 'pi pi-upload',
                            to: '/fileupload'
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
    <div class="card flex justify-content-center">
        <Menu
            :model="items"
            :pt="{
                submenuHeader: { class: 'text-surface-900' },
                action: ({ props, state, context }) => ({
                    class: context.focused ? 'bg-primary-400' : undefined
                })
            }"
        />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                }
            }
        ]
    },
    {
        label: 'Navigate',
        items: [
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                url: 'https://vuejs.org/'
            },
            {
                label: 'Router',
                icon: 'pi pi-upload',
                to: '/fileupload'
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
