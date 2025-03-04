<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" allowEmpty :invalid="value === null" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import SelectButton from '@/volt/selectbutton';
import { ref } from 'vue';

const value = ref(null);
const options = ref(['One-Way', 'Return']);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" allowEmpty :invalid="value === null" />
    </div>
</template>

<script setup>
import SelectButton from '@/volt/selectbutton';
import { ref } from 'vue';

const value = ref(null);
const options = ref(['One-Way', 'Return']);
<\/script>
`);
</script>
