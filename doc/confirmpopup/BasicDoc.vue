<template>
    <DocSectionText v-bind="$attrs">
        <p>ConfirmDialog is displayed by calling the <i>require</i> method of the <i>$confirm</i> instance by passing the options to customize the Popup. <i>target</i> attribute is mandatory to align the popup to its caller.</p>
    </DocSectionText>
    <ConfirmPopup></ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" outlined severity="danger"></Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmPopup></ConfirmPopup>
<div class="card flex flex-wrap gap-2 justify-content-center">
    <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm"></Button>
    <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" outlined severity="danger"></Button>
</div>`,
                options: `
<template>
    <Toast />
    <ConfirmPopup></ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" outlined severity="danger"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        confirm1(event) {
            this.$confirm.require({
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
        },
        confirm2(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        },
    }
};
<\/script>`,
                composition: `
<template>
    <Toast />
    <ConfirmPopup></ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" outlined severity="danger"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm1 = (event) => {
    confirm.require({
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

const confirm2 = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Do you want to delete this record?',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>`
            }
        };
    },
    methods: {
        confirm1(event) {
            this.$confirm.require({
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
        },
        confirm2(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        }
    }
};
</script>
