<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>SelectButton</h1>
                <p>SelectButton is a form component to choose a value from a list of options using button elements.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Single</h5>
                <SelectButton v-model="selectedCity" :options="cities" optionLabel="name" />
                <p>Selected City: <span style="font-weight: bold">{{selectedCity}}</span></p>

                <h5>Multiple</h5>
                <SelectButton v-model="selectedCars" :options="cars" optionLabel="brand" :multiple="true" />
                <p>Selected Cars: <span style="font-weight: bold">{{selectedCars}}</span></p>

                <h5>Custom Content</h5>
                <SelectButton v-model="selectedCar" :options="cars" optionLabel="brand">
                    <template #option="slotProps">
                        <div class="car-option">
                            <img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" />
                            <div>{{slotProps.option.brand}}</div>
                        </div>
                    </template>
                </SelectButton>
                <p>Selected Car: <span style="font-weight: bold">{{selectedCar}}</span></p>
            </div>
        </div>

        <SelectButtonDoc/>
    </div>
</template>

<script>
import SelectButtonDoc from './SelectButtonDoc';

export default {
    data() {
        return {
            selectedCity: null,
            selectedCar: null,
            selectedCars: null,
            cities: [
                {name: 'London', code: 'LND'},
                {name: 'Paris', code: 'PRS'},
                {name: 'Rome', code: 'RM'}
            ],
            cars: [
                {brand: 'Audi', key: 'A'},
                {brand: 'BMW', key: 'B'},
                {brand: 'Mercedes', key: 'M'}
            ]
        }
    },
    created() {
        this.selectedCar = this.cars[1];
    },
    components: {
        'SelectButtonDoc': SelectButtonDoc
    }
}
</script>

<style lang="scss" scoped>
/deep/ .car-option {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 24px;
        margin-right: .5rem;
    }
}
</style>