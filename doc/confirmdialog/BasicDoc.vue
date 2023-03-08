<template>
    <DocSectionText v-bind="$attrs">
        <p>ConfirmDialog is displayed by calling the <i>require</i> method of the <i>$confirm</i> instance by passing the options to customize the Dialog. <i>target</i> attribute is mandatory to align the popup to its caller.</p>
    </DocSectionText>
    <ConfirmDialog></ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm1()" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmDialog></ConfirmDialog>>
<Button @click="confirm1()" icon="pi pi-check" label="Confirm"></Button>
<Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>`,
                options: `
<template>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm1()" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        confirm1() {
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
        },
        confirm2() {
            this.$confirm.require({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
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
<\/script>`,
                composition: `
<template>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm1()" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm1 = () => {
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

const confirm2 = () => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
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
        confirm1() {
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
        },
        confirm2() {
            this.$confirm.require({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
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
