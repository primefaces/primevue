<template>
    <DocSectionText v-bind="$attrs">
        <p>
            SelectButton is used as a controlled component with <i>modelValue</i> property along with an <i>options</i> collection. Label and value of an option are defined with the <i>optionLabel</i> and <i>optionValue</i> properties respectively.
            Note that, when options are simple primitive values such as a string array, no <i>optionLabel</i> and <i>optionValue</i> would be necessary.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 'One-Way',
            options: ['One-Way', 'Return'],
            code: {
                basic: `
<SelectButton v-model="value" :options="options" aria-labelledby="basic" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'One-Way',
            options: ['One-Way', 'Return']
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('One-Way');
const options = ref(['One-Way', 'Return']);
<\/script>
`
            }
        };
    }
};
</script>
