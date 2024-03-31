<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" invalid />
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
<SelectButton v-model="value" :options="options" aria-labelledby="basic" invalid />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" invalid />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'One-Way',
            options: ['One-Way', 'Return'],
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" invalid />
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
