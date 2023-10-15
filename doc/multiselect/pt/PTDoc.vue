<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <MultiSelect
            v-model="selectedCities"
            :options="cities"
            optionLabel="name"
            placeholder="Select Cities"
            :maxSelectedLabels="3"
            :pt="{
                root: { class: 'w-full md:w-14rem' },
                item: ({ props, state, context }) => ({
                    class: context.selected ? 'bg-blue-300' : context.focused ? 'bg-blue-100' : undefined
                })
            }"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            code: {
                basic: `
<MultiSelect
    v-model="selectedCities"
    :options="cities"
    optionLabel="name"
    placeholder="Select Cities"
    :maxSelectedLabels="3"
    :pt="{
        root: { class: 'w-full md:w-14rem' },
        item: ({ props, state, context }) => ({
            class: context.selected ? 'bg-blue-300' : context.focused ? 'bg-blue-100' : undefined
        })
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <MultiSelect
            v-model="selectedCities"
            :options="cities"
            optionLabel="name"
            placeholder="Select Cities"
            :maxSelectedLabels="3"
            :pt="{
                root: { class: 'w-full md:w-14rem' },
                item: ({ props, state, context }) => ({
                    class: context.selected ? 'bg-blue-300' : context.focused ? 'bg-blue-100' : undefined
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
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
    <div class="card flex justify-content-center">
        <MultiSelect
            v-model="selectedCities"
            :options="cities"
            optionLabel="name"
            placeholder="Select Cities"
            :maxSelectedLabels="3"
            :pt="{
                root: { class: 'w-full md:w-14rem' },
                item: ({ props, state, context }) => ({
                    class: context.selected ? 'bg-blue-300' : context.focused ? 'bg-blue-100' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
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
