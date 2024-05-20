<template>
    <DocSectionText v-bind="$attrs">
        <p>Image filter implementation using multiple sliders.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="flex flex-col items-center">
            <img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" :style="filterStyle" />
            <SelectButton v-model="filter" :options="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
            <Slider v-model="filterValues[filter]" class="w-56" :min="0" :max="200" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            filter: 0,
            filterValues: [100, 100, 0],
            filterOptions: [
                { label: 'Contrast', value: 0 },
                { label: 'Brightness', value: 1 },
                { label: 'Sepia', value: 2 }
            ],
            code: {
                basic: `
<img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" :style="filterStyle" />
<SelectButton v-model="filter" :options="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
<Slider v-model="filterValues[filter]" class="w-56" :min="0" :max="200" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col items-center">
            <img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" :style="filterStyle" />
            <SelectButton v-model="filter" :options="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
            <Slider v-model="filterValues[filter]" class="w-56" :min="0" :max="200" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filter: 0,
            filterValues: [100, 100, 0],
            filterOptions: [
                { label: 'Contrast', value: 0 },
                { label: 'Brightness', value: 1 },
                { label: 'Sepia', value: 2 }
            ]
        }
    },
    computed: {
        filterStyle() {
            return {
                filter: \`contrast(\${this.filterValues[0]}%) brightness(\${this.filterValues[1]}%) sepia(\${this.filterValues[2]}%)\`
            };
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col items-center">
            <img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" :style="filterStyle" />
            <SelectButton v-model="filter" :options="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
            <Slider v-model="filterValues[filter]" class="w-56" :min="0" :max="200" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const filter = ref(0);
const filterValues = ref([100, 100, 0]);
const filterOptions = ref([
    { label: 'Contrast', value: 0 },
    { label: 'Brightness', value: 1 },
    { label: 'Sepia', value: 2 }
]);
const filterStyle = computed(() => {
    return {
        filter: \`contrast(\${this.filterValues[0]}%) brightness(\${this.filterValues[1]}%) sepia(\${this.filterValues[2]}%)\`
    };
})
<\/script>
`
            }
        };
    },
    computed: {
        filterStyle() {
            return {
                filter: `contrast(${this.filterValues[0]}%) brightness(${this.filterValues[1]}%) sepia(${this.filterValues[2]}%)`
            };
        }
    }
};
</script>
