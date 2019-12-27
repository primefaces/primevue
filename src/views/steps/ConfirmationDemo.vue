<template>
    <div class="stepsdemo-content">
        <Card>
            <template slot="title">
                <div class="p-grid p-fluid p-justify-between wizard-header">
                    <div class="p-col-8 wizard-header-content">
                        <p class="card-header-message">Confirmation</p>
                    </div>
                    <div class="p-col-2 wizard-header-steps">
                        <p class="card-header-message">Step 4/4</p>
                    </div>
                </div>
            </template>
            <template slot="content">
                <div class="p-grid p-fluid wizard-content wizard-confirmation">
                    <div class="p-col-12 p-md-3" style="max-width: 170px;">
                        <label class="wizard-input-label">Your Name</label>
                        <p>{{formData.firstname ? formData.firstname : '-'}} {{formData.lastname ? formData.lastname : '-'}}</p>
                    </div>
                    <div class="p-col-12 p-md-3" style="max-width: 75px;">
                        <label class="wizard-input-label">Your Age</label>
                        <p>{{formData.age ? formData.age : '-'}}</p>
                    </div>
                </div>
                <div class="p-grid p-fluid wizard-content wizard-confirmation">
                    <div class="p-col-12 p-md-3" style="max-width: 170px;">
                        <label class="wizard-input-label">Seat Class</label>
                        <p>{{formData.class ? formData.class : '-'}}</p>
                    </div>
                    <div class="p-col-12 p-md-3" style="max-width: 130px;">
                        <label class="wizard-input-label">Vagon Number</label>
                        <p>{{formData.vagon ? formData.vagon : '-'}}</p>
                    </div>
                    <div class="p-col-12 p-md-2" style="max-width: 53px;">
                        <label class="wizard-input-label">Seat</label>
                        <p>{{formData.seat ? formData.seat : '-'}}</p>
                    </div>
                </div>
                <div class="p-grid p-fluid wizard-content wizard-confirmation">
                    <div class="p-col-12 p-md-4" style="max-width: 170px;">
                        <label class="wizard-input-label">Cardholder Name</label>
                        <p>{{formData.cardholderName ? formData.cardholderName : '-'}}</p>
                    </div>
                    <div class="p-col-12 p-md-3" style="max-width: 160px;">
                        <label class="wizard-input-label">Cardholder Number</label>
                        <p>{{formData.cardholderNumber ? formData.cardholderNumber : '-'}}</p>
                    </div>
                    <div class="p-col-12 p-md-1" style="max-width: 53px;">
                        <label class="wizard-input-label">Date</label>
                        <p>{{formData.date ? formData.date : '-'}}</p>
                    </div>
                    <div class="p-col-12 p-md-1" style="max-width: 53px;">
                        <label class="wizard-input-label">CVV</label>
                        <p>{{formData.cvv && formData.cvv.length === 3  ? '**' + formData.cvv[2] : '-'}}</p>
                    </div>
                </div>
            </template>
            <template slot="footer">
                <div class="p-grid p-fluid p-justify-between wizard-footer">
                    <div class="p-col-4 wizard-footer-back-button">
                        <Button label="Back" class="disabled-button" @click="prevPage()" />
                    </div>
                    <div class="p-col-6 wizard-footer-complete-button">
                        <Button label="Complete" @click="complete()" />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    props: {
        formData: Object
    },
    data() {
        return {

        }
    },
    methods: {
        prevPage() {
            this.$emit('prevPage', {pageIndex: 3});
        },
        complete() {
            this.$emit('complete');
        }
    },
}
</script>