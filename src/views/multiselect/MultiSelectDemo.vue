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
            <MultiSelect v-model="selectedCars1" :options="cars" optionLabel="brand" placeholder="Select Brands" />

            <h3>Advanced with Templating and Filtering</h3>
            <MultiSelect v-model="selectedCars2" :options="cars" optionLabel="brand" placeholder="Select a Car" :filter="true">
                <template #value="slotProps">
                    <div class="p-multiselect-car-token" v-for="option of slotProps.value" :key="option.brand">
                        <img :alt="option.brand" :src="'demo/images/car/' + option.brand + '.png'" />
                        <span>{{option.brand}}</span>
                    </div>
                    <div class="p-multiselect-empty-car-token" v-if="!slotProps.value || slotProps.value.length === 0">
                        Select Brands
                    </div>
                </template>
                <template #option="slotProps">
                    <div class="p-multiselect-car-option">
                        <img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" />
                        <span>{{slotProps.option.brand}}</span>
                    </div>
                </template>
            </MultiSelect>
        </div>

        <MultiSelectDoc/>
    </div>
</template>

<script>
import MultiSelectDoc from './MultiSelectDoc';

export default {
    data() {
        return {
            selectedCars1: null,
            selectedCars2: null,
            cars: [
                {brand: 'Audi', value: 'Audi'},
                {brand: 'BMW', value: 'BMW'},
                {brand: 'Fiat', value: 'Fiat'},
                {brand: 'Honda', value: 'Honda'},
                {brand: 'Jaguar', value: 'Jaguar'},
                {brand: 'Mercedes', value: 'Mercedes'},
                {brand: 'Renault', value: 'Renault'},
                {brand: 'Volkswagen', value: 'Volkswagen'},
                {brand: 'Volvo', value: 'Volvo'}
            ]
        }
    },
    components: {
        'MultiSelectDoc': MultiSelectDoc
    }
}
</script>

<style lang="scss" scoped>
.p-multiselect {
    min-width: 15em;
}

.p-multiselect-car-option {
    display: inline-block;
    vertical-align: middle;

    img {
        vertical-align: middle;
        margin-right: .5em;
        width: 24px;
    }

    span {
        margin-top: .125em;
    }
}

.p-multiselect-car-token,
.p-multiselect-empty-car-token {
    padding: 2px 4px;
    margin: 0 0.286em 0 0;
    display: inline-block;
    vertical-align: middle;
    height: 1.857em;
    border-radius: 3px;
}

.p-multiselect-car-token img {
    width: 20px;
    vertical-align: middle;
    margin-right: .5em
}

.p-multiselect-car-token {
    background: #007ad9;
    color: #ffffff;
}

.p-multiselect-empty-car-token {
    background: #d95f00;
    color: #ffffff;
}
</style>
