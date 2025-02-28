<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the <i>optionDisabled</i> property.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center flex-wrap gap-4">
        <SelectButton v-model="value" :options="options1" disabled />
        <SelectButton v-model="value2" :options="options2" optionDisabled="constant" optionLabel="name" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 'Off',
            value2: null,
            options1: ['Off', 'On'],
            options2: [
                { name: 'Option 1', value: 1, constant: false },
                { name: 'Option 2', value: 2, constant: true }
            ],
            code: {
                basic: `
<SelectButton v-model="value" :options="options" disabled />
<SelectButton v-model="value" :options="options2" optionDisabled="constant" optionLabel="name" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center flex-wrap gap-4">
        <SelectButton v-model="value" :options="options" disabled />
        <SelectButton v-model="value" :options="options2" optionDisabled="constant" optionLabel="name" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'Off',
            value2: null,
            options1: ['Off', 'On'],
            options2: [
                { name: 'Option 1', value: 1, constant: false },
                { name: 'Option 2', value: 2, constant: true }
            ]
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center flex-wrap gap-4">
        <SelectButton v-model="value" :options="options" disabled />
        <SelectButton v-model="value" :options="options2" optionDisabled="constant" optionLabel="name" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('Off');
const value2 = ref();
const options1 = ref(['Off', 'On']);
const options2 = ref([
    { name: 'Option 1', value: 1, constant: false },
    { name: 'Option 2', value: 2, constant: true }
]);
<\/script>
`
            }
        };
    }
};
</script>
