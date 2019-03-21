<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Dropdown</h1>
                <p>Dropdown is used to select an item from a list of options.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" />

            <h3>Editable</h3>
            <Dropdown v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/>

            <h3>Advanced with Templating, Filtering and Clear Icon</h3>
            <Dropdown v-model="selectedCar" :options="cars" optionLabel="brand" placeholder="Select a Car" :filter="true" :showClear="true">
                <template v-slot:option={props}>
                    <div class="p-clearfix p-dropdown-car-option">
                        <img :alt="props.option.brand" :src="'/demo/images/car/' + props.option.brand + '.png'" />
                        <span>{{props.option.brand}}</span>
                    </div>
                </template>
                <template #option="slotProps">
                    <div class="p-clearfix p-dropdown-car-option">
                        <img :alt="slotProps.option.brand" :src="'/demo/images/car/' + slotProps.option.brand + '.png'" />
                        <span>{{slotProps.option.brand}}</span>
                    </div>
                </template>
            </Dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            selectedCar: null,
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

<style lang="scss">
.p-dropdown {
    width: 12em;
}

.p-dropdown-car-option {
    img {
        vertical-align: middle;
        margin-right: .5em;
        width: 24px;
    }

    span {
        float: right;
        margin-top: .125em;
    }
}
</style>
