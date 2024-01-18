<template>
    <DocSectionText v-bind="$attrs">
        <p>MeterGroup requires <i>value</i> as the data to display.</p>
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
            value: [{ label: 'Space used', value: 15 }],
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
            value: [{ label: 'Space used', value: 15 }],
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

const value = ref([{ label: 'Space used', value: 15 }]);
<\/script>
`
            }
        };
    }
};
</script>
