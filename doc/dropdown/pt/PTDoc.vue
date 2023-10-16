<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <Dropdown
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            placeholder="Select a City"
            :pt="{
                root: { class: 'w-full md:w-14rem' },
                item: ({ props, state, context }) => ({
                    class: context.selected ? 'bg-primary' : context.focused ? 'bg-blue-100' : undefined
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
<Dropdown
    v-model="selectedCity"
    :options="cities"
    optionLabel="name"
    placeholder="Select a City"
    :pt="{
        root: { class: 'w-full md:w-14rem' },
        item: ({ props, state, context }) => ({
            class: context.selected ? 'bg-primary' : context.focused ? 'bg-blue-100' : undefined
        })
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Dropdown
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            placeholder="Select a City"
            :pt="{
                root: { class: 'w-full md:w-14rem' },
                item: ({ props, state, context }) => ({
                    class: context.selected ? 'bg-primary' : context.focused ? 'bg-blue-100' : undefined
                })
            }"
        />
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
    <div class="card flex justify-content-center">
        <Dropdown
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            placeholder="Select a City"
            :pt="{
                root: { class: 'w-full md:w-14rem' },
                item: ({ props, state, context }) => ({
                    class: context.selected ? 'bg-primary' : context.focused ? 'bg-blue-100' : undefined
                })
            }"
        />
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
