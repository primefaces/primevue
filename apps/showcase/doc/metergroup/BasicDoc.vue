<template>
    <DocSectionText v-bind="$attrs">
        <p>MeterGroup requires a <i>value</i> as the data to display where each item in the collection should be a type of <i>MeterItem</i>.</p>
    </DocSectionText>
    <div class="card">
        <MeterGroup :value="value" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: [{ label: 'Space used', value: 15, color: 'var(--p-primary-color)' }],
            code: {
                basic: `
<MeterGroup :value="value" />
`,
                options: `
<template>
    <div class="card">
        <MeterGroup :value="value" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: [{ label: 'Space used', value: 15, color: 'var(--p-primary-color)' }],
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <MeterGroup :value="value" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([{ label: 'Space used', value: 15, color: 'var(--p-primary-color)' }]);
<\/script>
`
            }
        };
    }
};
</script>
