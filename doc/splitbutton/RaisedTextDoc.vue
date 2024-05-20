<template>
    <DocSectionText v-bind="$attrs">
        <p>Text buttons can be displayed as raised as well for elevation.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <SplitButton label="Save" :model="items" @click="save" raised text></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="danger"></SplitButton>
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
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', to: '/fileupload' }
            ],
            code: {
                basic: `
<SplitButton label="Save" :model="items" @click="save" raised text></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="secondary"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="success"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="info"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="warn"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="help"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" raised text severity="danger"></SplitButton>
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" @click="save" raised text></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="danger"></SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" @click="save" raised text></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" raised text severity="danger"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        command: () => {
            this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        command: () => {
            this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', to: '/fileupload' }
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
