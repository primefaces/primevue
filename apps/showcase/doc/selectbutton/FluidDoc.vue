<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>fluid</i> prop makes the component take up the full width of its container when set to true.</p>
    </DocSectionText>
    <div class="card">
        <SelectButton v-model="value" :options="options" fluid />
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
<SelectButton v-model="value" :options="options" fluid />
`,
                options: `
<template>
    <div class="card">
        <SelectButton v-model="value" :options="options" fluid />
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
    <div class="card">
        <SelectButton v-model="value" :options="options" fluid />
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
