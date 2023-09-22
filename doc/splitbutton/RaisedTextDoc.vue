<template>
    <DocSectionText v-bind="$attrs">
        <p>Text buttons can be displayed as raised as well for elevation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="danger" class="mb-2"></SplitButton>
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
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="secondary" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="success" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="info" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="warning" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="help" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="danger" class="mb-2"></SplitButton>`,
                options: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="danger" class="mb-2"></SplitButton>
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
}
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="danger" class="mb-2"></SplitButton>
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
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
</script>
