<template>
    <DocSectionText v-bind="$attrs">
        <p>An alternative way to highlight the selected option is displaying a checkmark instead.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" checkmark :highlightOnSelect="false" class="w-full md:w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Listbox from '@/volt/Listbox.vue';
import { ref } from 'vue';

const selectedCity = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" checkmark :highlightOnSelect="false" class="w-full md:w-56" />
    </div>
</template>

<script setup lang="ts">
import Listbox from '@/volt/Listbox.vue';
import { ref } from 'vue';

const selectedCity = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>
`);
</script>
