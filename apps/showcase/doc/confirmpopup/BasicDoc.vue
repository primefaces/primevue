<template>
    <DocSectionText v-bind="$attrs">
        <p>ConfirmPopup is displayed by calling the <i>require</i> method of the <i>$confirm</i> instance by passing the options to customize the Popup. The <i>target</i> attribute is mandatory to align the popup to its referrer.</p>
    </DocSectionText>
    <ConfirmPopup></ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="confirm1($event)" label="Save" outlined></Button>
        <Button @click="confirm2($event)" label="Delete" severity="danger" outlined></Button>
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
<Button @click="confirm1($event)" label="Save" outlined></Button>
<Button @click="confirm2($event)" label="Delete" severity="danger" outlined></Button>
`,
                options: `
<template>
    <Toast />
    <ConfirmPopup></ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="confirm1($event)" label="Save" outlined></Button>
        <Button @click="confirm2($event)" label="Delete" severity="danger" outlined></Button>
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
        confirm2(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
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
        },
    }
};
<\/script>
`,
                composition: `
<template>
    <Toast />
    <ConfirmPopup></ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="confirm1($event)" label="Save" outlined></Button>
        <Button @click="confirm2($event)" label="Delete" severity="danger" outlined></Button>
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

const confirm2 = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Do you want to delete this record?',
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
        confirm1(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
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
        confirm2(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
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
