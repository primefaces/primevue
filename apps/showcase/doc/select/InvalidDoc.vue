<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <Select v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" :invalid="!selectedCity1" class="w-full md:w-56" />
        <Select v-model="selectedCity2" :options="cities" optionLabel="name" placeholder="Select a City" :invalid="!selectedCity2" class="w-full md:w-56" variant="filled" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            code: {
                basic: `
<Select v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" :invalid="!selectedCity1" class="w-full md:w-56" />
<Select v-model="selectedCity2" :options="cities" optionLabel="name" placeholder="Select a City" :invalid="!selectedCity2" class="w-full md:w-56" variant="filled" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <Select v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" :invalid="!selectedCity1" class="w-full md:w-56" />
        <Select v-model="selectedCity2" :options="cities" optionLabel="name" placeholder="Select a City" :invalid="!selectedCity2" class="w-full md:w-56" variant="filled" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity1: null,
            selectedCity2: null,
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
    <div class="card flex flex-wrap justify-center gap-4">
        <Select v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" :invalid="!selectedCity1" class="w-full md:w-56" />
        <Select v-model="selectedCity2" :options="cities" optionLabel="name" placeholder="Select a City" :invalid="!selectedCity2" class="w-full md:w-56" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity1 = ref(null);
const selectedCity2 = ref(null);
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
