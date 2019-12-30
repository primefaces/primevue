<template>
    <div class="stepsdemo-content">
        <Card>
            <template slot="title">
                <div class="p-grid p-fluid p-justify-between wizard-header">
                    <div class="p-col-8 wizard-header-content">
                        <p class="card-header-message">Payment Information</p>
                    </div>
                    <div class="p-col-2 wizard-header-steps">
                        <p class="card-header-message">Step 3/4</p>
                    </div>
                </div>
            </template>
            <template slot="content">
                <div class="p-grid p-fluid wizard-content-summary">
                    <div class="p-col-12">
                        <p>Complete your registration with Payment</p>
                    </div>
                </div>
                <div class="p-grid p-fluid wizard-content">
                    <div class="p-col-12 p-md-8" style="max-width: 391px;">
                        <p class="wizard-input-header">Cardholder Name</p>
                        <InputText type="text" v-model="cardholderName" />
                    </div>
                </div>
                <div class="p-grid p-fluid wizard-content">
                    <div class="p-col-12 p-md-5" style="max-width: 252px">
                        <p class="wizard-input-header">Cardholder Number</p>
                        <InputMask mask="9999-9999-9999-9999" v-model="cardholderNumber" />
                    </div>
                    <div class="p-col-12 p-md-2" style="max-width: 69px">
                        <p class="wizard-input-header">Date</p>
                        <InputMask mask="99/99" v-model="date" />
                    </div>
                    <div class="p-col-12 p-md-2" style="max-width: 69px">
                        <p class="wizard-input-header">CVV</p>
                        <InputMask mask="999" v-model="cvv" />
                    </div>
                </div>
                <div class="p-grid p-fluid wizard-content" style="margin-top: .3em">
                    <div class="p-col-12">
                            <Checkbox id="remember" v-model="remember" :binary="true" />
                            <label for="remember" class="p-checkbox-label">Save credit card information for future usage</label>
                    </div>
                </div>
            </template>
            <template slot="footer">
                <div class="p-grid p-fluid p-justify-between wizard-footer" style="margin-top: .5em">
                    <div class="p-col-4 wizard-footer-back-button">
                        <Button label="Back" class="disabled-button" @click="prevPage()" icon="pi pi-angle-left" />
                    </div>
                    <div class="p-col-4 wizard-footer-next-button">
                        <Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right"/>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cardholderName:'',
            cardholderNumber:'',
            date:'',
            cvv:'',
            remember:false
        }
    },
    methods: {
        nextPage() {
            this.$emit('nextPage', {formData: {cardholderName: this.cardholderName, cardholderNumber: this.cardholderNumber, date: this.date, cvv: this.cvv}, pageIndex: 2});
        },
        prevPage() {
            this.$emit('prevPage', {pageIndex: 2});
        }
    }
}
</script>