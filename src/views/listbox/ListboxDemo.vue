<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Listbox</h1>
                <p>Listbox is used to select one or more values from a list of items.</p>
            </div>
            <AppInputStyleSwitch />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Single</h5>
                <Listbox v-model="selectedCity" :options="cities" optionLabel="name" style="width:15rem" />

                <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
                <Listbox v-model="selectedCountries" :options="countries" :multiple="true" :filter="true" optionLabel="name" listStyle="max-height:250px" style="width:15rem">
                    <template #option="slotProps">
                        <div class="country-item">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
                            <div>{{slotProps.option.name}}</div>
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
        'ListboxDoc': ListboxDoc
    }
}
</script>