<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <NuxtLink to="/tailwind">Tailwind Customization</NuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    splitbutton: {
        root: ({ props }) => ({
            class: ['inline-flex relative', 'rounded-md', { 'shadow-lg': props.raised }]
        }),
        button: {
            root: ({ parent }) => ({
                class: ['rounded-r-none border-r-0', { 'rounded-l-full': parent.props.rounded }]
            }),
            icon: 'mr-2'
        },
        menubutton: {
            root: ({ parent }) => ({
                class: ['rounded-l-none', { 'rounded-r-full': parent.props.rounded }]
            }),
            label: 'hidden'
        }
    }
}
`
            },
            code2: {
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
