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
                <template #option="slotProps">
                    <div class="p-clearfix p-dropdown-car-option">
                        <img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" />
                        <span>{{slotProps.option.brand}}</span>
                    </div>
                </template>
            </Dropdown>
        </div>

        <DropdownDoc/>
    </div>
</template>

<script>
import DropdownDoc from './DropdownDoc';

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
        'DropdownDoc': DropdownDoc
    }
}
</script>

<style lang="scss" scoped>
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
