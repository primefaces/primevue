<template>
    <div class="stepsdemo-content">
        <Card>
           <template v-slot:title>
                Seat Information
            </template>
            <template v-slot:subtitle>
                Choose your seat
            </template>
            <template v-slot:content>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="class">Class</label>
                        <Dropdown inputId="class" v-model="selectedClass" :options="classes" @change="setWagons($event)" optionLabel="name" placeholder="Select a Class" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Wagon</label>
                        <Dropdown inputId="wagon" v-model="selectedWagon" :options="wagons" @change="setSeats($event)" optionLabel="wagon" placeholder="Select a Wagon" />
                    </div>
                    <div class="p-field p-col-12">
                        <label for="seat">Seat</label>
                        <Dropdown inputId="seat" v-model="selectedSeat" :options="seats" optionLabel="seat" placeholder="Select a Seat" />
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <div class="p-grid p-nogutter p-justify-between">
                    <Button label="Back" @click="prevPage()" icon="pi pi-angle-left" />
                    <Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" />
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
            wagons: [],
            selectedWagon: '',
            seats: [],
            selectedSeat: ''
        }
    },
    methods: {
        setWagons(event) {
            if (this.selectedClass && event.value) {
                this.wagons = [];
                this.seats = [];
                for (let i = 1; i < 3 * event.value.factor; i++) {
                    this.wagons.push({wagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
                }
            }
        },
        setSeats(event) {
            if (this.selectedWagon && event.value) {
                this.seats = [];
                for (let i = 1; i < 10 * event.value.factor; i++) {
                    this.seats.push({seat: i, type: event.value.type});
                }
            }
        },
        nextPage() {
            this.$emit('next-page', {formData: {class: this.selectedClass.name, wagon: this.selectedWagon.wagon, seat: this.selectedSeat.seat}, pageIndex: 1});
        },
        prevPage() {
            this.$emit('prev-page', {pageIndex: 1});
        }
    }
}
</script>
