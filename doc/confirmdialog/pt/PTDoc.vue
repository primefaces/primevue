<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <ConfirmDialog group="pt" :pt="{ headerTitle: { class: 'text-primary' } }" />
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm()" icon="pi pi-check" label="Confirm"></Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmDialog
    group="pt"
    :pt="{
        headerTitle: { class: 'text-primary' }
    }"
/>
`,
                options: `
<template>
    <ConfirmDialog
        group="pt"
        :pt="{
            headerTitle: { class: 'text-primary' }
        }"
    />
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm()" icon="pi pi-check" label="Confirm"></Button>
    </div>
    <Toast />
</template>

<script>
export default {
    methods: {
        confirm() {
            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <ConfirmDialog
        group="pt"
        :pt="{
            headerTitle: { class: 'text-primary' }
        }"
    />
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm()" icon="pi pi-check" label="Confirm"></Button>
    </div>
    <Toast />
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>
`
            }
        };
    },
    methods: {
        confirm() {
            this.$confirm.require({
                group: 'pt',
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        }
    }
};
</script>
