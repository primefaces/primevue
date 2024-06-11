<template>
    <DocSectionText v-bind="$attrs">
        <p>RadioButtons can be generated using a list of values.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <div v-for="category in categories" :key="category.key" class="flex items-center">
                <RadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic" :value="category.name" />
                <label :for="category.key" class="ml-2">{{ category.name }}</label>
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            categories: [
                { name: 'Accounting', key: 'A' },
                { name: 'Marketing', key: 'M' },
                { name: 'Production', key: 'P' },
                { name: 'Research', key: 'R' }
            ],
            selectedCategory: 'Production',
            code: {
                basic: `
<div v-for="category in categories" :key="category.key" class="flex items-center">
    <RadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic" :value="category.name" />
    <label :for="category.key" class="ml-2">{{ category.name }}</label>
</div>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <div v-for="category in categories" :key="category.key" class="flex items-center">
                <RadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic" :value="category.name" />
                <label :for="category.key" class="ml-2">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCategory: 'Production',
            categories: [
                { name: 'Accounting', key: 'A' },
                { name: 'Marketing', key: 'M' },
                { name: 'Production', key: 'P' },
                { name: 'Research', key: 'R' }
            ]
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <div v-for="category in categories" :key="category.key" class="flex items-center">
                <RadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic" :value="category.name" />
                <label :for="category.key" class="ml-2">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedCategory = ref('Production');
const categories = ref([
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
]);
<\/script>
`
            }
        };
    }
};
</script>
