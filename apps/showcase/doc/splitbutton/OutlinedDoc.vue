<template>
    <DocSectionText v-bind="$attrs">
        <p>Outlined buttons display a border without a background initially.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <SplitButton label="Save" :model="items" @click="save" outlined></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="danger"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="contrast"></SplitButton>
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
                    separator: true
                },
                {
                    label: 'Quit',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ],
            code: {
                basic: `
<SplitButton label="Save" :model="items" @click="save" outlined></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="secondary"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="success"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="info"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="warn"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="help"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="danger"></SplitButton>
<SplitButton label="Save" :model="items" @click="save" outlined severity="contrast"></SplitButton>
`,
                options: `
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Toast />
        <SplitButton label="Save" :model="items" @click="save" outlined></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="danger"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="contrast"></SplitButton>
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
                    separator: true
                },
                {
                    label: 'Quit',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ]
        }
    },
    methods: {
        toast() {
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
        <SplitButton label="Save" :model="items" @click="save" outlined></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="secondary"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="success"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="info"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="warn"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="help"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="danger"></SplitButton>
        <SplitButton label="Save" :model="items" @click="save" outlined severity="contrast"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    }
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
