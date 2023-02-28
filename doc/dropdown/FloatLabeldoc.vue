<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <div class="p-float-label">
            <Dropdown v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
            <label for="dd-city">Select a City</label>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            code: {
                basic: `
<div class="p-float-label">
    <Dropdown v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
    <label for="dd-city">Select a City</label>
</div>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <div class="p-float-label">
            <Dropdown v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
            <label for="dd-city">Select a City</label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
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
        <div class="p-float-label">
            <Dropdown v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
            <label for="dd-city">Select a City</label>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
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
