<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <FloatLabel class="w-full md:w-56">
            <Select v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" class="w-full" />
            <label for="dd-city">Select a City</label>
        </FloatLabel>
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
<FloatLabel class="w-full md:w-56">
    <Select v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" class="w-full" />
    <label for="dd-city">Select a City</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <FloatLabel class="w-full md:w-56">
            <Select v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" class="w-full" />
            <label for="dd-city">Select a City</label>
        </FloatLabel>
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
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <FloatLabel class="w-full md:w-56">
            <Select v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" class="w-full" />
            <label for="dd-city">Select a City</label>
        </FloatLabel>
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
<\/script>
`
            }
        };
    }
};
</script>
