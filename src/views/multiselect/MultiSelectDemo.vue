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
            <MultiSelect v-model="selectedCars2" :options="cars" optionLabel="brand" placeholder="Select a Car" :filter="true" class="multiselect-custom">
                <template #value="slotProps">
                    <div class="p-multiselect-car-token" v-for="option of slotProps.value" :key="option.brand">
                        <img :alt="option.brand" :src="'demo/images/car/' + option.brand + '.png'" />
                        <span>{{option.brand}}</span>
                    </div>
                    <template v-if="!slotProps.value || slotProps.value.length === 0">
                        Select Brands
                    </template>
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
    min-width: 15rem;
}

/deep/ .multiselect-custom {
    .p-multiselect-label:not(.p-placeholder) {
        padding-top: .25rem;
        padding-bottom: .25rem;
    }

    .p-multiselect-car-option {
        display: flex;
        align-items: center;

        img {
            margin-right: .5rem;
            width: 24px;
        }
    }

    .p-multiselect-car-token {
        padding: .25rem .5rem;
        margin: 0 0.286rem 0 0;
        border-radius: 3px;
        display: inline-flex;
    }

    .p-multiselect-car-token img {
        width: 17px;
        margin-right: .5rem;
        align-items: center;
    }

    .p-multiselect-car-token {
        background: #2196f3;
        color: #ffffff;
    }
}
</style>
