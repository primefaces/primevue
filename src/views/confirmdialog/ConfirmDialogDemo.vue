<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ConfirmDialog</h1>
                <p>ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <ConfirmDialog></ConfirmDialog>
            <ConfirmDialog group="positionDialog"></ConfirmDialog>

            <div class="card">
                <h5>Basic</h5>
                <Button @click="confirm1()" icon="pi pi-check" label="Confirm" class="mr-2"></Button>
                <Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>

                <h5>Position</h5>
                <div class="grid flex-column">
                    <div class="col">
                        <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" class="p-button-help mr-2"></Button>
                        <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></Button>
                    </div>
                    <div class="col">
                        <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning mr-2"></Button>
                        <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" class="p-button-warning mr-2"></Button>
                        <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></Button>
                    </div>
                    <div class="col">
                        <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success mr-2"></Button>
                        <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success mr-2"></Button>
                        <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></Button>
                    </div>
                </div>
            </div>
        </div>

        <ConfirmDialogDoc />
    </div>
</template>

<script>
import ConfirmDialogDoc from './ConfirmDialogDoc';

export default {
    methods: {
        confirm1() {
            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
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
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        },
        confirmPosition(position) {
            this.$confirm.require({
                group: 'positionDialog',
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                position: position,
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }
    },
    components: {
        'ConfirmDialogDoc': ConfirmDialogDoc
    }
}
</script>
