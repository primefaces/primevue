<template>
    <DocSectionText v-bind="$attrs">
        <p>IftaLabel is used to create infield top aligned labels. Visit <PrimeVueNuxtLink to="/iftalabel">IftaLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <IftaLabel class="w-full md:w-56">
            <Select v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" class="w-full" variant="filled" />
            <label for="dd-city">City</label>
        </IftaLabel>
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
<IftaLabel>
    <Select v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" class="w-full" variant="filled" />
    <label for="dd-city">City</label>
</IftaLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <IftaLabel class="w-full md:w-56">
            <Select v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" class="w-full" variant="filled" />
            <label for="dd-city">City</label>
        </IftaLabel>
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
        <IftaLabel class="w-full md:w-56">
            <Select v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" class="w-full" variant="filled" />
            <label for="dd-city">City</label>
        </IftaLabel>
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
