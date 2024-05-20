<template>
    <DocSectionText v-bind="$attrs">
        <p>Rounded buttons have a circular border radius.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <SplitButton label="Save" :model="items" @click="save" rounded></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="danger"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="contrast"></SplitButton>
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
<SplitButton label="Save" :model="items" @click="save" rounded></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="secondary"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="success"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="info"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="warn"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="help"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="danger"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" rounded severity="contrast"></SplitButton>
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" @click="save" rounded></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="danger"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="contrast"></SplitButton>
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
        <SplitButton label="Save" :model="items" @click="save" rounded></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="danger"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" rounded severity="contrast"></SplitButton>
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
