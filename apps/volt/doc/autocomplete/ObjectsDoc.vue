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
    <DocSectionCode :code="code" />
</template>

<script setup>
import { CountryService } from '@/service/CountryService';
import AutoComplete from '@/volt/AutoComplete.vue';
import { onMounted, ref } from 'vue';

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
};

const code = ref(`
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
    </div>
</template>

<script setup>
import AutoComplete from '@/volt/AutoComplete.vue';
import { CountryService } from '@/service/CountryService';
import { onMounted, ref } from 'vue';

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
};
<\/script>
`);
</script>
