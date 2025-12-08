<template>
    <DocSectionText v-bind="$attrs">
        <p>Use the <i>allowEmpty</i> prop to control if selection can be cleared. Set <i>:allowEmpty="false"</i> to disallow clearing the current selection.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" :allowEmpty="false" class="w-full md:w-56" />
    </div>
    <DocSectionCode :code="code" />
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

const code = {
    basic: `
<Listbox v-model="selectedCity" :options="cities" optionLabel="name" :allowEmpty="false" class="w-full md:w-56" />
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
};
</script>
