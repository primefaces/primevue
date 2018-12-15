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
            <p-selectButton v-model="selectedCity" :options="cities" optionLabel="name" />
            <p>Selected City: {{selectedCity}}</p>

            <h3>Multiple</h3>
            <p-selectButton v-model="selectedCars" :options="cars" optionLabel="brand" :multiple="true" />
            <p>Selected Cars: {{selectedCars}}</p>

            <h3>Custom Content</h3>
            <p-selectButton v-model="selectedCar" :options="cars" optionLabel="brand">
                <template slot-scope="{option}">
                    <div style="text-align: center; padding: 1em; width: 125px">
                        <img :alt="option.brand" :src="'/demo/images/car/' + option.brand + '.png'" style="width:48px" />
                        <div style="margin-top: 1em">{{option.brand}}</div>
                    </div>
                </template>
            </p-selectButton>
            <p>Selected Car: {{selectedCar}}</p>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style>

</style>
