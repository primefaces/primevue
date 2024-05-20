<template>
    <DocSectionText v-bind="$attrs">
        <p>Checkboxes can be generated using a list of values.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <div v-for="category of categories" :key="category.key" class="flex items-center">
                <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
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
            selectedCategories: ['Marketing'],
            categories: [
                { name: 'Accounting', key: 'A' },
                { name: 'Marketing', key: 'M' },
                { name: 'Production', key: 'P' },
                { name: 'Research', key: 'R' }
            ],
            code: {
                basic: `
<div v-for="category of categories" :key="category.key" class="flex items-center">
    <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
    <label :for="category.key">{{ category.name }}</label>
</div>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <div v-for="category of categories" :key="category.key" class="flex items-center">
                <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                <label :for="category.key">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCategories: ['Marketing'],
            categories: [
                { name: "Accounting", key: "A" },
                { name: "Marketing", key: "M" },
                { name: "Production", key: "P" },
                { name: "Research", key: "R" }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <div v-for="category of categories" :key="category.key" class="flex items-center">
                <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                <label :for="category.key">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const categories = ref([
    {name: "Accounting", key: "A"},
    {name: "Marketing", key: "M"},
    {name: "Production", key: "P"},
    {name: "Research", key: "R"}
]);
const selectedCategories = ref(['Marketing']);
<\/script>
`
            }
        };
    }
};
</script>
