<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel class="w-full md:w-56">
            <Select v-model="value1" inputId="over_label" :options="cities" optionLabel="name" class="w-full" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel class="w-full md:w-56" variant="in">
            <Select v-model="value2" inputId="in_label" :options="cities" optionLabel="name" class="w-full" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel class="w-full md:w-56" variant="on">
            <Select v-model="value3" inputId="on_label" :options="cities" optionLabel="name" class="w-full" />
            <label for="on_label">On Label</label>
        </FloatLabel>
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
<FloatLabel class="w-full md:w-56">
    <Select v-model="value1" inputId="over_label" :options="cities" optionLabel="name" class="w-full" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel class="w-full md:w-56" variant="in">
    <Select v-model="value2" inputId="in_label" :options="cities" optionLabel="name" class="w-full" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel class="w-full md:w-56" variant="on">
    <Select v-model="value3" inputId="on_label" :options="cities" optionLabel="name" class="w-full" />
    <label for="on_label">On Label</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center items-stretch gap-4">
        <FloatLabel class="w-full md:w-56">
            <Select v-model="value1" inputId="over_label" :options="cities" optionLabel="name" class="w-full" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel class="w-full md:w-56" variant="in">
            <Select v-model="value2" inputId="in_label" :options="cities" optionLabel="name" class="w-full" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel class="w-full md:w-56" variant="on">
            <Select v-model="value3" inputId="on_label" :options="cities" optionLabel="name" class="w-full" />
            <label for="on_label">On Label</label>
        </FloatLabel>
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
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center items-stretch gap-4">
        <FloatLabel class="w-full md:w-56">
            <Select v-model="value1" inputId="over_label" :options="cities" optionLabel="name" class="w-full" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel class="w-full md:w-56" variant="in">
            <Select v-model="value2" inputId="in_label" :options="cities" optionLabel="name" class="w-full" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel class="w-full md:w-56" variant="on">
            <Select v-model="value3" inputId="on_label" :options="cities" optionLabel="name" class="w-full" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from "vue";

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
