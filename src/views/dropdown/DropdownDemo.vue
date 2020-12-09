<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Dropdown</h1>
                <p>Dropdown is used to select an item from a list of options.</p>
            </div>
            <AppInputStyleSwitch />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" />

                <h5>Editable</h5>
                <Dropdown v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/>

                <h5>Advanced with Templating, Filtering and Clear Icon</h5>
                <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :showClear="true">
                    <template #value="slotProps">
                        <div class="country-item country-item-value" v-if="slotProps.value">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.value.code.toLowerCase()" />
                            <div>{{slotProps.value.name}}</div>
                        </div>
                        <span v-else>
                            {{slotProps.placeholder}}
                        </span>
                    </template>
                    <template #option="slotProps">
                        <div class="country-item">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
                            <div>{{slotProps.option.name}}</div>
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
            selectedCountry: null,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            countries: [
                {name: 'Australia', code: 'AU'},
                {name: 'Brazil', code: 'BR'},
                {name: 'China', code: 'CN'},
                {name: 'Egypt', code: 'EG'},
                {name: 'France', code: 'FR'},
                {name: 'Germany', code: 'DE'},
                {name: 'India', code: 'IN'},
                {name: 'Japan', code: 'JP'},
                {name: 'Spain', code: 'ES'},
                {name: 'United States', code: 'US'}
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
    width: 14rem;
}

.country-item-value {
    img.flag {
        width: 17px;
    }
}
</style>
