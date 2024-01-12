<template>
    <DocSectionText v-bind="$attrs">
        <p>Boundaries are configured with the <i>min</i> and <i>max</i> values whose defaults are 0 and 100 respectively.</p>
    </DocSectionText>
    <div class="card">
        <MeterGroup :value="value" :min="-50" :max="50" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: [{ label: 'Space used', value: 15, color: '#FDBB74' }],
            code: {
                basic: `
<MeterGroup :value="value" :min="-50" :max="50" />
`,
                options: `
<template>
    <div class="card">
        <MeterGroup :value="value" :min="-50" :max="50" />
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
        <MeterGroup :value="value" :min="-50" :max="50" />
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
