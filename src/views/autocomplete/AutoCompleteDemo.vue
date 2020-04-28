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
            <AutoComplete v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountryBasic($event)" field="name" />
            <span style="marginLeft: .5em">Country: {{selectedCountry || 'none'}}</span>

            <h3>Dropdown and Templating</h3>
            <AutoComplete v-model="brand" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Search car brands" :dropdown="true">
                <template #item="slotProps">
                    <div class="p-clearfix p-autocomplete-brand-item">
                        <img :alt="slotProps.item" :src="'demo/images/car/' + slotProps.item + '.png'" />
                        <div>{{slotProps.item}}</div>
                    </div>
                </template>
            </AutoComplete>
            <span style="marginLeft: .5em">Brand: {{brand || 'none'}}</span>

            <h3>Multiple</h3>
            <span class="p-fluid">
                <AutoComplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountriesMultiple" @complete="searchCountryMultiple($event)" field="name" />
            </span>
            <ul>
                <li v-for="(c,i) of selectedCountries" :key="i">{{c}}</li>
            </ul>
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
            selectedCountry: null,
            filteredCountriesBasic: null,
            selectedCountries: [],
            filteredCountriesMultiple: null,
            brands: null,
            brand: null,
            filteredBrands: null
        }
    },
    countryService: null,
    created() {
        this.countryService = new CountryService();
    },
    mounted() {
        this.countryService.getCountries().then(data => this.countries = data);
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];
    },
    methods: {
        searchCountry(query) {
            return this.countries.filter((country) => {
                return country.name.toLowerCase().startsWith(query.toLowerCase());
            });
        },
        searchCountryBasic(event) {
            setTimeout(() => {
                this.filteredCountriesBasic = this.searchCountry(event.query);
            }, 250);
        },
        searchCountryMultiple(event) {
            setTimeout(() => {
               this.filteredCountriesMultiple = this.searchCountry(event.query);
            }, 250);
        },
        searchBrand(event) {
            setTimeout(() => {
                let results;

                if (event.query.length === 0) {
                    results = [...this.brands];
                }
                else {
                    results = this.brands.filter((brand) => {
                        return brand.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }

                this.filteredBrands = results;
            }, 250);
        }
    },
    components: {
		'AutoCompleteDoc': AutoCompleteDoc
    }
}
</script>

<style lang="scss">
.p-autocomplete-brand-item {
    img {
        width: 32px;
        display: inline-block;
        margin: 5px 0 2px 5px;
    }

    div {
        font-size: 16px;
        float: right;
        margin: 10px 10px 0 0;
    }
}
</style>
