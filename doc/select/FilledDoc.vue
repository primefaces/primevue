<template>
    <DocSectionText v-bind="$attrs">
        <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Select v-model="selectedCity" variant="filled" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
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
<Select v-model="selectedCity" variant="filled" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Select v-model="selectedCity" variant="filled" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
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
        <Select v-model="selectedCity" variant="filled" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
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
