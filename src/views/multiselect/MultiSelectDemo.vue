<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>MultiSelect</h1>
                <p>MultiSelect is used to multiple values from a list of options.</p>
            </div>
            <AppInputStyleSwitch />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <MultiSelect v-model="selectedCities1" :options="cities" optionLabel="name" placeholder="Select a City" />

                <h5>Chips</h5>
                <MultiSelect v-model="selectedCities2" :options="cities" optionLabel="name" placeholder="Select a City" display="chip" />

                <h5>Advanced with Templating and Filtering</h5>
                <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" placeholder="Select Countries" :filter="true" class="multiselect-custom">
                    <template #value="slotProps">
                        <div class="country-item country-item-value" v-for="option of slotProps.value" :key="option.code">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + option.code.toLowerCase()" />
                            <div>{{option.name}}</div>
                        </div>
                        <template v-if="!slotProps.value || slotProps.value.length === 0">
                            Select Countries
                        </template>
                    </template>
                    <template #option="slotProps">
                        <div class="country-item">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
                            <div>{{slotProps.option.name}}</div>
                        </div>
                    </template>
                </MultiSelect>
            </div>
        </div>

        <MultiSelectDoc/>
    </div>
</template>

<script>
import MultiSelectDoc from './MultiSelectDoc';

export default {
    data() {
        return {
            selectedCities1: null,
            selectedCities2: null,
            selectedCountries: null,
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

    .country-item-value {
        padding: .25rem .5rem;
        border-radius: 3px;
        display: inline-flex;
        margin-right: .5rem;
        background-color: var(--primary-color);
        color: var(--primary-color-text);

        img.flag {
            width: 17px;
        }
    }
}
</style>
