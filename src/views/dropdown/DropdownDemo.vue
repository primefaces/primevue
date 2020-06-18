<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Dropdown</h1>
                <p>Dropdown is used to select an item from a list of options.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" />

                <h5>Editable</h5>
                <Dropdown v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/>

                <h5>Advanced with Templating, Filtering and Clear Icon</h5>
                <Dropdown v-model="selectedCar" :options="cars" optionLabel="brand" :filter="true" placeholder="Select a Car" :showClear="true">
                    <template #value="slotProps">
                        <div class="p-dropdown-car-value" v-if="slotProps.value">
                            <img :alt="slotProps.value.brand" :src="'demo/images/car/' + slotProps.value.brand + '.png'" />
                            <span>{{slotProps.value.brand}}</span>
                        </div>
                        <span v-else>
                            {{slotProps.placeholder}}
                        </span>
                    </template>
                    <template #option="slotProps">
                        <div class="p-dropdown-car-option">
                            <img :alt="slotProps.option.brand" :src="'demo/images/car/' + slotProps.option.brand + '.png'" />
                            <span>{{slotProps.option.brand}}</span>
                        </div>
                    </template>
                </Dropdown>
            </div>
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
    width: 12rem;
}

.p-dropdown-car-option,
.p-dropdown-car-value {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin-right: .5rem;
        width: 24px;
    }

    span {
        line-height: 1;
    }
}

.p-dropdown-car-value {
    justify-content: flex-start;

    img {
        width: 17px;
    }
}
</style>
