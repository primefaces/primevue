<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>position</i> property of the confirm options is used to display a Dialog at all edges and corners of the screen.</p>
    </DocSectionText>
    <ConfirmDialog group="positionDialog"></ConfirmDialog>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" class="p-button-help mr-2"></Button>
            <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning mr-2"></Button>
            <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" class="p-button-warning mr-2"></Button>
            <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success mr-2"></Button>
            <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success mr-2"></Button>
            <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></Button>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ConfirmDialog group="positionDialog"></ConfirmDialog>
<div class="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" class="p-button-help mr-2"></Button>
    <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></Button>
</div>
<div class="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning mr-2"></Button>
    <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" class="p-button-warning mr-2"></Button>
    <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></Button>
</div>
<div class="flex flex-wrap justify-content-center gap-2">
    <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success mr-2"></Button>
    <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success mr-2"></Button>
    <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></Button>
</div>`,
                options: `
<template>
    <Toast />
    <ConfirmDialog group="positionDialog"></ConfirmDialog>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" class="p-button-help mr-2"></Button>
            <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning mr-2"></Button>
            <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" class="p-button-warning mr-2"></Button>
            <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success mr-2"></Button>
            <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success mr-2"></Button>
            <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></Button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        confirmPosition(position) {
            this.$confirm.require({
                group: 'positionDialog',
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                position: position,
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
    <ConfirmDialog group="positionDialog"></ConfirmDialog>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" class="p-button-help mr-2"></Button>
            <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning mr-2"></Button>
            <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" class="p-button-warning mr-2"></Button>
            <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success mr-2"></Button>
            <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success mr-2"></Button>
            <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></Button>
        </div>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirmPosition = (position) => {
    confirm.require({
        group: 'positionDialog',
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        position: position,
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
        confirmPosition(position) {
            this.$confirm.require({
                group: 'positionDialog',
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                position: position,
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
