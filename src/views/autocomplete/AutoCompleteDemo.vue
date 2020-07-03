<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>AutoComplete</h1>
                <p>AutoComplete is an input component that provides real-time suggestions when being typed.</p>
            </div>
            <AppInputStyleSwitch />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />
                
                <h5>Dropdown and Templating</h5>
                <AutoComplete v-model="selectedCountry2" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" field="name">
                    <template #item="slotProps">
                        <div class="country-item">
                            <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.item.code.toLowerCase()" />
                            <div>{{slotProps.item.name}}</div>
                        </div>
                    </template>
                </AutoComplete>

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

export default {
    data() {
        return {
            countries: null,
            selectedCountry1: null,
            selectedCountry2: null,
            filteredCountries: null,
            selectedCountries: []
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
        }
    },
    components: {
		'AutoCompleteDoc': AutoCompleteDoc
    }
}
</script>