<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
</template>

<script>
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card flex justify-center flex-wrap">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="danger" class="mb-2"></SplitButton>
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
<\/script>`
            }
        };
    }
};
</script>
