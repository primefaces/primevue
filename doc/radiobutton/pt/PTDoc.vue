<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div v-for="(category, index) in categories" :key="category.key" class="flex align-items-center">
                <RadioButton
                    v-model="selectedCategory"
                    :inputId="category.key"
                    name="pizza"
                    :value="category.name"
                    :pt="{
                        input: ({ props }) => ({
                            class: props.modelValue === categories[index].name ? 'bg-orange-500 border-orange-500' : undefined
                        })
                    }"
                />
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
<div v-for="(category, index) in categories" :key="category.key" class="flex align-items-center">
    <RadioButton
        v-model="selectedCategory"
        :inputId="category.key"
        name="pizza"
        :value="category.name"
        :pt="{
            input: ({ props }) => ({
                class: props.modelValue === categories[index].name ? 'bg-orange-500 border-orange-500' : undefined
            })
        }"
    />
    <label :for="category.key" class="ml-2">{{ category.name }}</label>
</div>

`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div v-for="(category, index) in categories" :key="category.key" class="flex align-items-center">
                <RadioButton
                    v-model="selectedCategory"
                    :inputId="category.key"
                    name="pizza"
                    :value="category.name"
                    :pt="{
                        input: ({ props }) => ({
                            class: props.modelValue === categories[index].name ? 'bg-orange-500 border-orange-500' : undefined
                        })
                    }"
                />
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
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div v-for="(category, index) in categories" :key="category.key" class="flex align-items-center">
                <RadioButton
                    v-model="selectedCategory"
                    :inputId="category.key"
                    name="pizza"
                    :value="category.name"
                    :pt="{
                        input: ({ props }) => ({
                            class: props.modelValue === categories[index].name ? 'bg-orange-500 border-orange-500' : undefined
                        })
                    }"
                />
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
