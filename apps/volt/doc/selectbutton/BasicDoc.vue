<template>
    <DocSectionText v-bind="$attrs">
        <p>
            SelectButton is used with the <i>v-model</i> property for two-way value binding along with the <i>options</i> collection. Label and value of an option are defined with the <i>optionLabel</i> and <i>optionValue</i> properties respectively.
            Note that, when options are simple primitive values such as a string array, no <i>optionLabel</i> and <i>optionValue</i> would be necessary.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import SelectButton from '@/volt/selectbutton';
import { ref } from 'vue';

const value = ref('One Way');
const options = ref(['One-Way', 'Return']);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" />
    </div>
</template>

<script setup>
import SelectButton from '@/volt/selectbutton';
import { ref } from 'vue';

const value = ref('One Way');
const options = ref(['One-Way', 'Return']);
<\/script>
`);
</script>
