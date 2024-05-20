<template>
    <DocSectionText v-bind="$attrs">
        <p>
            AutoComplete can work with objects using the <i>optionLabel</i> property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a
            Country object that has name and code fields such as <i>&#123;name: "United States", code:"USA"&#125;</i>.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
    </div>
    <DocSectionCode :code="code" :service="['CountryService']" />
</template>

<script>
import { CountryService } from '@/service/CountryService';

export default {
    data() {
        return {
            countries: null,
            selectedCountry: null,
            filteredCountries: null,
            code: {
                basic: `
<AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
    </div>
</template>

<script>
import { CountryService } from '@/service/CountryService';

export default {
    data() {
        return {
            countries: null,
            selectedCountry: null,
            filteredCountries: null
        };
    },
    mounted() {
        CountryService.getCountries().then((data) => (this.countries = data));
    },
    methods: {
        search(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                } else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();


const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}
<\/script>
`
            }
        };
    },
    mounted() {
        CountryService.getCountries().then((data) => (this.countries = data));
    },
    methods: {
        search(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                } else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        }
    }
};
</script>
