<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Listbox</h1>
                <p>Listbox is used to select one or more values from a list of items.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Single</h5>
                <Listbox v-model="selectedCity" :options="cities" optionLabel="name" style="width:15rem" />

                <h5>Grouped</h5>
                <Listbox v-model="selectedGroupedCity" :options="groupedCities" optionLabel="label" style="width:15rem" optionGroupLabel="label" optionGroupChildren="items" listStyle="max-height:250px">
                    <template #optiongroup="slotProps">
                        <div class="flex align-items-center country-item">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" width="18" />
                            <div>{{slotProps.option.label}}</div>
                        </div>
                    </template>
                </Listbox>

                <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
                <Listbox v-model="selectedCountries" :options="countries" :multiple="true" :filter="true" optionLabel="name" listStyle="max-height:250px" style="width:15rem" filterPlaceholder="Search">
                    <template #option="slotProps">
                        <div class="country-item">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
                            <div>{{slotProps.option.name}}</div>
                        </div>
                    </template>
                </Listbox>

                <h5>Virtual Scroll (100000 Items)</h5>
                <Listbox v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 31 }" style="width:15rem" listStyle="height:250px" />
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
            selectedGroupedCity: null,
            selectedItem: null,
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
            ],
            groupedCities: [{
                label: 'Germany', code: 'DE',
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', code: 'JP',
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                    {label: 'Osaka', value: 'Osaka'},
                    {label: 'Tokyo', value: 'Tokyo'},
                    {label: 'Yokohama', value: 'Yokohama'}
                ]
            }],
            items: Array.from({ length: 100000 }, (_, i) => ({ label: `Item #${i}`, value: i }))
        }
    },
    components: {
        'ListboxDoc': ListboxDoc
    }
}
</script>
