<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>AutoComplete</h1>
                <p>AutoComplete is an input component that provides real-time suggestions when being typed.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <AutoComplete v-model="country" :suggestions="countriesBasic" @complete="searchCountryBasic($event)" field="name" />
            <span style="marginLeft: .5em">Country: {{country || 'none'}}</span>
        </div>
    </div>
</template>

<script>
import CountryService from '../../service/CountryService';

export default {
    data() {
        return {
            countries: null,
            country: null,
            countriesBasic: null
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
        searchCountryBasic(event) {
            setTimeout(() => {
                let results = this.countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
                this.countriesBasic = results;
            }, 250);
        }
    }
}
</script>

<style>

</style>
