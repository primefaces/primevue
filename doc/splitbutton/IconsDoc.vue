<template>
    <DocSectionText v-bind="$attrs">
        <p>The buttons and menuitems have support to display icons.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <SplitButton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" @click="save" :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
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
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ],
            code: {
                basic: `
<SplitButton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" @click="save" :model="items" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <SplitButton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" @click="save" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
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
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <SplitButton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" @click="save" :model="items" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
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
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>
`
            }
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
</script>
