<template>
    <DocSectionText v-bind="$attrs">
        <p>Loading state can be used <i>loading</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <MultiSelect placeholder="Loading..." loading class="w-full md:w-80"></MultiSelect>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import MultiSelect from '@/volt/MultiSelect.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
    </div>
</template>

<script setup>
import MultiSelect from '@/volt/MultiSelect.vue';
<\/script>
`);
</script>
