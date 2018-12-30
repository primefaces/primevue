<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>MultiSelect</h1>
                <p>MultiSelect is used to multiple values from a list of options.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <p-multiSelect v-model="selectedCars1" :options="cars" optionLabel="brand" placeholder="Select Brands" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCars1: null,
            selectedCars2: null,
            cars: [
                {brand: 'Audi', value: 'Audi'},
                {brand: 'Bmw', value: 'Bmw'},
                {brand: 'Fiat', value: 'Fiat'},
                {brand: 'Honda', value: 'Honda'},
                {brand: 'Jaguar', value: 'Jaguar'},
                {brand: 'Mercedes', value: 'Mercedes'},
                {brand: 'Renault', value: 'Renault'},
                {brand: 'Volkswagen', value: 'Volkswagen'},
                {brand: 'Volvo', value: 'Volvo'}
            ]
        }
    }
}
</script>

<style lang="scss">
.p-multiselect {
    min-width: 12em;
}

.p-multiselect-car-option {
    img {
        vertical-align: middle;
        margin-right: .5em;
        width: 24px;
    }

    span {
        margin-top: .125em;
    }
}
</style>
