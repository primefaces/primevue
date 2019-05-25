<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>SelectButton</h1>
                <p>SelectButton is a form component to choose a value from a list of options using button elements.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Single</h3>
            <SelectButton v-model="selectedCity" :options="cities" optionLabel="name" />
            <p>Selected City: <span style="font-weight: bold">{{selectedCity}}</span></p>

            <h3>Multiple</h3>
            <SelectButton v-model="selectedCars" :options="cars" optionLabel="brand" :multiple="true" />
            <p>Selected Cars: <span style="font-weight: bold">{{selectedCars}}</span></p>

            <h3>Custom Content</h3>
            <SelectButton v-model="selectedCar" :options="cars" optionLabel="brand">
                <template #option="slotProps">
                    <div style="text-align: center; padding: 1em; width: 125px">
                        <img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" style="width:48px" />
                        <div style="margin-top: 1em">{{slotProps.option.brand}}</div>
                    </div>
                </template>
            </SelectButton>
            <p>Selected Car: <span style="font-weight: bold">{{selectedCar}}</span></p>
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
                {brand: 'Bmw', key: 'B'},
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