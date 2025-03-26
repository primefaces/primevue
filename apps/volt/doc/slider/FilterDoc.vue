<template>
    <DocSectionText v-bind="$attrs">
        <p>Image filter implementation using multiple sliders.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center justify-center">
        <img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" :style="filterStyle" />
        <SelectButton v-model="filter" :options="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
        <Slider v-model="filterValues[filter]" class="w-56" :min="0" :max="200" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import SelectButton from '@/volt/SelectButton.vue';
import Slider from '@/volt/Slider.vue';
import { computed, ref } from 'vue';

const filter = ref(0);
const filterValues = ref([100, 100, 0]);
const filterOptions = ref([
    { label: 'Contrast', value: 0 },
    { label: 'Brightness', value: 1 },
    { label: 'Sepia', value: 2 }
]);
const filterStyle = computed(() => {
    return {
        filter: `contrast(${filterValues.value[0]}%) brightness(${filterValues.value[1]}%) sepia(${filterValues.value[2]}%)`
    };
});

const code = ref(`
<template>
    <div class="card flex flex-col items-center justify-center">
        <img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" :style="filterStyle" />
        <SelectButton v-model="filter" :options="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
        <Slider v-model="filterValues[filter]" class="w-56" :min="0" :max="200" />
    </div>
</template>

<script setup>
import SelectButton from '@/volt/SelectButton.vue';
import Slider from '@/volt/Slider.vue';
import { computed, ref } from 'vue';

const filter = ref(0);
const filterValues = ref([100, 100, 0]);
const filterOptions = ref([
    { label: 'Contrast', value: 0 },
    { label: 'Brightness', value: 1 },
    { label: 'Sepia', value: 2 }
]);
const filterStyle = computed(() => {
    return {
        filter: \`contrast(\${filterValues.value[0]}%) brightness(\${filterValues.value[1]}%) sepia(\${filterValues.value[2]}%)\`
    };
});
<\/script>
`);
</script>
