<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>AutoComplete</h1>
                <p>AutoComplete is an input component that provides real-time suggestions when being typed.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />

                <h5>Grouped</h5>
                <AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="searchCity($event)" field="label" optionGroupLabel="label" optionGroupChildren="items">
                    <template #optiongroup="slotProps">
                        <div class="p-d-flex p-ai-center country-item">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.item.code.toLowerCase()" width="18" />
                            <div>{{slotProps.item.label}}</div>
                        </div>
                    </template>
                </AutoComplete>

                <h5>Dropdown, Templating and Force Selection</h5>
                <AutoComplete v-model="selectedCountry2" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" field="name" forceSelection>
                    <template #item="slotProps">
                        <div class="country-item">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.item.code.toLowerCase()" />
                            <div>{{slotProps.item.name}}</div>
                        </div>
                    </template>
                </AutoComplete>

                <h5>Virtual Scroll (1000 Items)</h5>
                <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 31 }" field="label" dropdown />

                <h5>Multiple</h5>
                <span class="p-fluid">
                    <AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />
                </span>
            </div>
        </div>

        <AutoCompleteDoc />
    </div>
</template>

<script>
import CountryService from '../../service/CountryService';
import AutoCompleteDoc from './AutoCompleteDoc';
import {FilterService,FilterMatchMode} from 'primevue/api';

export default {
    data() {
        return {
            countries: null,
            selectedCountry1: null,
            selectedCountry2: null,
            selectedCity: null,
            filteredCities: null,
            filteredCountries: null,
            selectedCountries: [],
            selectedItem: null,
            filteredItems: null,
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
            items: Array.from({ length: 1000 }, (_, i) => ({ label: `Item #${i}`, value: i }))
        }
    },
    countryService: null,
    created() {
        this.countryService = new CountryService();
    },
    mounted() {
        this.countryService.getCountries().then(data => this.countries = data);
    },
    methods: {
        searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                }
                else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        },
        searchCity(event) {
            let query = event.query;
            let filteredCities = [];

            for (let country of this.groupedCities) {
                let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS);
                if (filteredItems && filteredItems.length) {
                    filteredCities.push({...country, ...{items: filteredItems}});
                }
            }

            this.filteredCities = filteredCities;
        },
        searchItems(event) {
            //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
            let query = event.query;
            let filteredItems = [];

            for(let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    filteredItems.push(item);
                }
            }

            this.filteredItems = filteredItems;
        }
    },
    components: {
		'AutoCompleteDoc': AutoCompleteDoc
    }
}
</script>
