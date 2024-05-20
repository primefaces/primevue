<template>
    <DocSectionText v-bind="$attrs">
        <p>SelectButton allows selecting only one item by default and setting <i>multiple</i> option enables choosing more than one item. In multiple case, model property should be an array.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            options: [
                { name: 'Option 1', value: 1 },
                { name: 'Option 2', value: 2 },
                { name: 'Option 3', value: 3 }
            ],
            code: {
                basic: `
<SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null,
            options: [
                { name: 'Option 1', value: 1 },
                { name: 'Option 2', value: 2 },
                { name: 'Option 3', value: 3 }
            ]
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = ref([
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 }
]);
<\/script>
`
            }
        };
    }
};
</script>
