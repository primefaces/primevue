<template>
    <DocSectionText v-bind="$attrs">
        <p>SplitButton provides <i>small</i> and <i>large</i> sizes as alternatives to the standard.</p>
    </DocSectionText>
    <div class="card flex items-center justify-center flex-wrap gap-4">
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="small"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="large"></SplitButton>
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
<SplitButton label="Save" :model="items" icon="pi pi-plus" size="small"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" size="large"></SplitButton>
`,
                options: `
<template>
    <div class="card flex items-center justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="small"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="large"></SplitButton>
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
    <div class="card flex items-center justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="small"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="large"></SplitButton>
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
{ label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }];

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
