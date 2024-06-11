<template>
    <DocSectionText v-bind="$attrs">
        <p>ConfirmDialog is displayed by calling the <i>require</i> method of the <i>$confirm</i> instance by passing the options to customize the Dialog. The <i>target</i> attribute is mandatory to align the popup to its referrer.</p>
    </DocSectionText>
    <ConfirmDialog></ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="confirm1()" label="Save" outlined></Button>
        <Button @click="confirm2()" label="Delete" severity="danger" outlined></Button>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmDialog></ConfirmDialog>
<Button @click="confirm1()" label="Save" outlined></Button>
<Button @click="confirm2()" label="Delete" severity="danger" outlined></Button>
`,
                options: `
<template>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="confirm1()" label="Save" outlined></Button>
        <Button @click="confirm2()" label="Delete" severity="danger" outlined></Button>
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
                rejectProps: {
                    label: 'Cancel',
                    severity: 'secondary',
                    outlined: true
                },
                acceptProps: {
                    label: 'Save'
                },
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
                header: 'Danger Zone',
                icon: 'pi pi-info-circle',
                rejectProps: {
                    label: 'Cancel',
                    severity: 'secondary',
                    outlined: true
                },
                acceptProps: {
                    label: 'Delete',
                    severity: 'danger'
                },
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
<\/script>
`,
                composition: `
<template>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="confirm1()" label="Save" outlined></Button>
        <Button @click="confirm2()" label="Delete" severity="danger" outlined></Button>
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
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Save'
        },
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
        header: 'Danger Zone',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancel',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Delete',
            severity: 'danger'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
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
        confirm1() {
            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                rejectProps: {
                    label: 'Cancel',
                    severity: 'secondary',
                    outlined: true
                },
                acceptProps: {
                    label: 'Save'
                },
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
                header: 'Danger Zone',
                icon: 'pi pi-info-circle',
                rejectProps: {
                    label: 'Cancel',
                    severity: 'secondary',
                    outlined: true
                },
                acceptProps: {
                    label: 'Delete',
                    severity: 'danger'
                },
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
