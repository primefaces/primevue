<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Listbox</h1>
                <p>Listbox is used to select one or more values from a list of items.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Single</h5>
                <Listbox v-model="selectedCity" :options="cities" optionLabel="name" style="width:15em" />

                <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
                <Listbox v-model="selectedCars" :options="cars" :multiple="true" :filter="true" optionLabel="brand" listStyle="max-height:250px" style="width:15em">
                    <template #option="slotProps">
                        <div class="car-item">
                            <img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" />
                            <span>{{slotProps.option.brand}}</span>
                        </div>
                    </template>
                </Listbox>
            </div>
        </div>

        <ListboxDoc/>
    </div>
</template>

<script>
import ListboxDoc from './ListboxDoc';

export default {
    data() {
        return {
            selectedCity: null,
            selectedCars: null,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
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
        'ListboxDoc': ListboxDoc
    }
}
</script>

<style lang="scss" scoped>
/deep/ .car-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width:32px;
    }
}
</style>