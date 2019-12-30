<template>
    <div class="stepsdemo-content">
        <Card>
            <template slot="title">
                <div class="p-grid p-fluid p-justify-between wizard-header">
                    <div class="p-col-8 wizard-header-content">
                        <p class="card-header-message">Seat Information</p>
                    </div>
                    <div class="p-col-2 wizard-header-steps">
                        <p class="card-header-message">Step 2/4</p>
                    </div>
                </div>
            </template>
            <template slot="content">
                <div class="p-grid p-fluid wizard-content-summary">
                    <div class="p-col-12">
                        <p>Please pick your seat and proceed to the payment</p>
                    </div>
                </div>
                <div class="p-grid p-fluid wizard-content">
                    <div class="p-col-12 p-md-4" style="padding-bottom: 0px; max-width: 235px;">
                        <p>Class and Vagon</p>
                    </div>
                </div>
                <div class="p-grid p-fluid wizard-content">
                    <div class="p-col-12 p-md-3" style="max-width: 176px;">
                        <Dropdown v-model="selectedClass" :options="classes" @change="setVagons($event)" optionLabel="name" placeholder="Select a Class" />
                    </div>
                    <div class="p-col-12 p-md-3" style="max-width: 176px;">
                        <Dropdown v-model="selectedVagon" :options="vagons" @change="setSeats($event)" optionLabel="vagon" placeholder="Select a Vagon" />
                    </div>
                </div>
                <div class="p-grid p-fluid wizard-content">
                    <div class="p-col-12 p-md-3" style="max-width: 176px;">
                        <p class="wizard-input-header">Seat</p>
                        <Dropdown v-model="selectedSeat" :options="seats" optionLabel="seat" placeholder="Select a Seat" />
                    </div>
                </div>
            </template>
            <template slot="footer">
                <div class="p-grid p-fluid p-justify-between wizard-footer demo-footer">
                    <div class="p-col-4 wizard-footer-back-button">
                        <Button label="Back" class="disabled-button" @click="prevPage()" icon="pi pi-angle-left" />
                    </div>
                    <div class="p-col-4 wizard-footer-next-button">
                        <Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" />
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
            selectedClass: '',
            classes: [
                {name: 'First Class', code: 'A', factor: 1},
                {name: 'Second Class', code: 'B', factor: 2},
                {name: 'Third Class', code: 'C', factor: 3}
            ],
            vagons: [],
            selectedVagon: '',
            seats: [],
            selectedSeat: ''
        }
    },
    methods: {
        setVagons(event) {
            if (this.selectedClass && event.value) {
                this.vagons = [];
                this.seats = [];
                for (let i = 1; i < 3 * event.value.factor; i++) {
                    this.vagons.push({vagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
                }
            }
        },
        setSeats(event) {
            if (this.selectedVagon && event.value) {
                this.seats = [];
                for (let i = 1; i < 10 * event.value.factor; i++) {
                    this.seats.push({seat: i, type: event.value.type});
                }
            }
        },
        nextPage() {
            this.$emit('nextPage', {formData: {class: this.selectedClass.name, vagon: this.selectedVagon.vagon, seat: this.selectedSeat.seat}, pageIndex: 1});
        },
        prevPage() {
            this.$emit('prevPage', {pageIndex: 1});
        }
    }
}
</script>