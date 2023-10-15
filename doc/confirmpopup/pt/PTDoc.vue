<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <ConfirmPopup
        group="pt"
        :pt="{
            root: { class: 'surface-100' }
        }"
    />
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm($event)" icon="pi pi-check" label="Confirm"></Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmPopup
    group="pt"
    :pt="{
        root: { class: 'surface-100' }
    }"
/>
`,
                options: `
<template>
    <ConfirmPopup
        group="pt"
        :pt="{
            root: { class: 'surface-100' }
        }"
    />
    <Toast />
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm($event)" icon="pi pi-check" label="Confirm"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        confirm(event) {
            this.$confirm.require({
                group: 'pt',
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
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
    <ConfirmPopup
        group="pt"
        :pt="{
            root: { class: 'surface-100' }
        }"
    />
    <Toast />
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm($event)" icon="pi pi-check" label="Confirm"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm = (event) => {
    confirm.require({
        group: 'pt',
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
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
        confirm(event) {
            this.$confirm.require({
                group: 'pt',
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
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
