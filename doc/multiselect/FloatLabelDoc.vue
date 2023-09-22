<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-20rem" />
            <label for="ms-cities">MultiSelect</label>
        </span>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            code: {
                basic: `
<span class="p-float-label">
    <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-20rem" />
    <label for="ms-cities">MultiSelect</label>
</span>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-20rem" />
            <label for="ms-cities">MultiSelect</label>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        };
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-20rem" />
            <label for="ms-cities">MultiSelect</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`
            }
        };
    }
};
</script>
