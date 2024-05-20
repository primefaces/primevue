<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content inside a button is defined as children.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <SplitButton :model="items" @click="save" severity="contrast">
            <span class="flex items-center font-bold">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" style="height: 1rem; margin-right: 0.5rem" />
                <span>PrimeVue</span>
            </span>
        </SplitButton>
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
<SplitButton :model="items" @click="save" severity="contrast">
    <span class="flex items-center font-bold">
        <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" style="height: 1rem; margin-right: 0.5rem" />
        <span>PrimeVue</span>
    </span>
</SplitButton>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <SplitButton :model="items" @click="save" severity="contrast">
            <span class="flex items-center font-bold">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" style="height: 1rem; margin-right: 0.5rem" />
                <span>PrimeVue</span>
            </span>
        </SplitButton>
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
        <SplitButton :model="items" @click="save" severity="contrast">
            <span class="flex items-center font-bold">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" style="height: 1rem; margin-right: 0.5rem" />
                <span>PrimeVue</span>
            </span>
        </SplitButton>
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
