<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Listbox</h1>
                <p>Listbox is used to select one or more values from a list of items.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Single</h3>
            <Listbox v-model="selectedCity" :options="cities" optionLabel="name" />

            <h3>Advanced with Templating, Filtering and Multiple Selection</h3>
            <Listbox v-model="selectedCars" :options="cars" :multiple="true" :filter="true" optionLabel="brand" listStyle="max-height:250px" style="width:15em">
                <template #option="slotProps">
                    <div class="p-clearfix">
                        <img :alt="slotProps.option.brand" :src="'/demo/images/car/' + slotProps.option.brand + '.png'" style="display:inline-block;margin:5px 0 0 5px;width:48px" />
                        <span style="float:right;margin:1.25em .5em 0 0">{{slotProps.option.brand}}</span>
                    </div>
                </template>
            </Listbox>
        </div>
    </div>
</template>

<script>
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