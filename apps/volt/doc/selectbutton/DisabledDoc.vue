<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the <i>optionDisabled</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center flex-wrap gap-4">
        <SelectButton v-model="value1" :options="options1" disabled />
        <SelectButton v-model="value2" :options="options2" optionDisabled="constant" optionLabel="name" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import SelectButton from '@/volt/selectbutton';
import { ref } from 'vue';

const value1 = ref('One Way');
const value2 = ref('One Way');
const options1 = ref(['Off', 'On']);
const options2 = ref([
    { name: 'Option 1', value: 1, constant: false },
    { name: 'Option 2', value: 2, constant: true }
]);

const code = ref(`
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <SelectButton v-model="value1" :options="options1" disabled />
        <SelectButton v-model="value2" :options="options2" optionDisabled="constant" optionLabel="name" />
    </div>
</template>

<script setup>
import SelectButton from '@/volt/selectbutton';
import { ref } from 'vue';

const value1 = ref('One Way');
const value2 = ref('One Way');
const options1 = ref(['Off', 'On']);
const options2 = ref([
    { name: 'Option 1', value: 1, constant: false },
    { name: 'Option 2', value: 2, constant: true }
]);
<\/script>
`);
</script>
