<template>
    <DocSectionText v-bind="$attrs">
        <p>Select provides <i>small</i> and <i>large</i> sizes as alternatives to the base.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <Select v-model="value1" :options="cities" optionLabel="name" size="small" placeholder="Small" class="w-full md:w-56" />
        <Select v-model="value2" :options="cities" optionLabel="name" placeholder="Normal" class="w-full md:w-56" />
        <Select v-model="value3" :options="cities" optionLabel="name" size="large" placeholder="Large" class="w-full md:w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            code: {
                basic: `
<Select v-model="value1" :options="cities" optionLabel="name" size="small" placeholder="Small" class="w-full md:w-56" />
<Select v-model="value2" :options="cities" optionLabel="name" placeholder="Normal" class="w-full md:w-56" />
<Select v-model="value3" :options="cities" optionLabel="name" size="large" placeholder="Large" class="w-full md:w-56" />
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <Select v-model="value1" :options="cities" optionLabel="name" size="small" placeholder="Small" class="w-full md:w-56" />
        <Select v-model="value2" :options="cities" optionLabel="name" placeholder="Normal" class="w-full md:w-56" />
        <Select v-model="value3" :options="cities" optionLabel="name" size="large" placeholder="Large" class="w-full md:w-56" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <Select v-model="value1" :options="cities" optionLabel="name" size="small" placeholder="Small" class="w-full md:w-56" />
        <Select v-model="value2" :options="cities" optionLabel="name" placeholder="Normal" class="w-full md:w-56" />
        <Select v-model="value3" :options="cities" optionLabel="name" size="large" placeholder="Large" class="w-full md:w-56" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
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
