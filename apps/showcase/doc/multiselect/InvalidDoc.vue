<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <MultiSelect v-model="selectedCities1" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" :invalid="selectedCities1?.length === 0" class="w-full md:w-80" />
        <MultiSelect v-model="selectedCities2" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" :invalid="selectedCities2?.length === 0" class="w-full md:w-80" variant="filled" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedCities1: [],
            selectedCities2: [],
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            code: {
                basic: `
<MultiSelect v-model="selectedCities1" :options="cities" optionLabel="name" filter placeholder="Select Cities" 
        :maxSelectedLabels="3" :invalid="selectedCities1?.length === 0" class="w-full md:w-80" />
<MultiSelect v-model="selectedCities2" :options="cities" optionLabel="name" filter placeholder="Select Cities" 
        :maxSelectedLabels="3" :invalid="selectedCities2?.length === 0" class="w-full md:w-80" variant="filled" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <MultiSelect v-model="selectedCities1" :options="cities" optionLabel="name" filter placeholder="Select Cities" 
                :maxSelectedLabels="3" :invalid="selectedCities1?.length === 0" class="w-full md:w-80" />
        <MultiSelect v-model="selectedCities2" :options="cities" optionLabel="name" filter placeholder="Select Cities" 
                :maxSelectedLabels="3" :invalid="selectedCities2?.length === 0" class="w-full md:w-80" variant="filled" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities1: [],
            selectedCities2: [],
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
        <MultiSelect v-model="selectedCities1" :options="cities" optionLabel="name" filter placeholder="Select Cities" 
                :maxSelectedLabels="3" :invalid="selectedCities1?.length === 0" class="w-full md:w-80" />
        <MultiSelect v-model="selectedCities2" :options="cities" optionLabel="name" filter placeholder="Select Cities" 
                :maxSelectedLabels="3" :invalid="selectedCities2?.length === 0" class="w-full md:w-80" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities1 = ref([]);
const selectedCities2 = ref([]);
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
