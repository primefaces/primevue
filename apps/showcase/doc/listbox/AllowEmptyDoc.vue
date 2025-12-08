<template>
    <DocSectionText v-bind="$attrs">
        <p>Use the <i>allowEmpty</i> prop to control whether the selection can be cleared. Set <i>:allowEmpty="false"</i> to prevent clearing the current selection.</p>
    </DocSectionText>
    <div class="card flex flex-col md:flex-row gap-4 justify-center">
        <div class="flex justify-center">
            <Listbox v-model="selectedCity" :options="cities" optionLabel="name" :allowEmpty="false" class="w-full md:w-56" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedCity: { name: 'Rome', code: 'RM' },
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            code: {
                basic: `
<Listbox v-model="selectedCity" :options="cities" optionLabel="name" :allowEmpty="false" class="w-full md:w-56" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" :allowEmpty="false" class="w-full md:w-56" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: { name: 'Rome', code: 'RM' },
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
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" :allowEmpty="false" class="w-full md:w-56" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedCity = ref({ name: 'Rome', code: 'RM' });
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
