<template>
    <DocSectionText v-bind="$attrs">
        <p>AutoComplete offers multiple slots for customization through templating.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
            <template #option="slotProps">
                <div class="flex items-center gap-2">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #header>
                <div class="font-medium px-3 py-2">Available Countries</div>
            </template>
            <template #footer>
                <div class="px-3 py-2">
                    <SecondaryButton label="Add New" fluid text size="small" icon="pi pi-plus" />
                </div>
            </template>
        </AutoComplete>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import AutoComplete from '@/volt/AutoComplete.vue';
import SecondaryButton from '@/volt/SecondaryButton';
import { onMounted, ref } from 'vue';
import { CountryService } from '~/service/CountryService';

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
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
            <template #option="slotProps">
                <div class="flex items-center gap-2">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #header>
                <div class="font-medium px-3 py-2">Available Countries</div>
            </template>
            <template #footer>
                <div class="px-3 py-2">
                    <SecondaryButton label="Add New" fluid text size="small" icon="pi pi-plus" />
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script setup lang="ts">
import { CountryService } from '@/service/CountryService';
import AutoComplete from '@/volt/AutoComplete.vue';
import SecondaryButton from '@/volt/SecondaryButton';
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
