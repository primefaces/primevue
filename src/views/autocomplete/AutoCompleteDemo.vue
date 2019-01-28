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
            <AutoComplete v-model="country" :suggestions="filteredCountriesBasic" @complete="searchCountryBasic($event)" field="name" />
            <span style="marginLeft: .5em">Country: {{country || 'none'}}</span>

            <h3>Dropdown and Templating</h3>
            <AutoComplete v-model="brand" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Hint: type 'v' or 'f'" :dropdown="true">
                <template slot="item" slot-scope="{item}">
                    <div class="p-clearfix p-autocomplete-brand-item">
                        <img :alt="item" :src="'/demo/images/car/' + item + '.png'" />
                        <div>{{item}}</div>
                    </div>
                </template>
            </AutoComplete>
            <span style="marginLeft: .5em">Brand: {{brand || 'none'}}</span>
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
            filteredCountriesBasic: null,
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
        searchCountryBasic(event) {
            setTimeout(() => {
                let results = this.countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
                this.filteredCountriesBasic = results;
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
