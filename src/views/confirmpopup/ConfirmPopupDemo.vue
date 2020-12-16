<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>ConfirmPopup</h1>
                <p>ConfirmPopup displays a confirmation overlay displayed relatively to its target.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <ConfirmPopup></ConfirmPopup>

            <div class="card">
                <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm" class="p-mr-2"></Button>
                <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" class="p-button-danger p-button-outlined"></Button>
            </div>
        </div>

        <ConfirmPopupDoc />
    </div>
</template>

<script>
import ConfirmPopupDoc from './ConfirmPopupDoc';
export default {
    methods: {
        confirm1(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
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
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }
    },
    components: {
        'ConfirmPopupDoc': ConfirmPopupDoc
    }
}
</script>
