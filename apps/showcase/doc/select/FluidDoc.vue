<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>fluid</i> prop makes the component take up the full width of its container when set to true.</p>
    </DocSectionText>
    <div class="card">
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" fluid />
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
<Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" fluid />
`,
                options: `
<template>
    <div class="card">
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" fluid />
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
    <div class="card">
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" fluid />
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
