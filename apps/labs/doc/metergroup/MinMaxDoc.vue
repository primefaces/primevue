<template>
    <DocSectionText v-bind="$attrs">
        <p>Boundaries are configured with the <i>min</i> and <i>max</i> values whose defaults are 0 and 100 respectively.</p>
    </DocSectionText>
    <div class="card">
        <MeterGroup :value="value" :max="200" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: [
                { label: 'Apps', color: '#34d399', value: 16 },
                { label: 'Messages', color: '#fbbf24', value: 8 },
                { label: 'Media', color: '#60a5fa', value: 24 },
                { label: 'System', color: '#c084fc', value: 10 }
            ],
            code: {
                basic: `
<MeterGroup :value="value" :max="200"  />
`,
                options: `
<template>
    <div class="card">
        <MeterGroup :value="value" :max="200"  />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: [
                { label: 'Apps', color: '#34d399', value: 16 },
                { label: 'Messages', color: '#fbbf24', value: 8 },
                { label: 'Media', color: '#60a5fa', value: 24 },
                { label: 'System', color: '#c084fc', value: 10 }
            ],
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <MeterGroup :value="value" :max="200"  />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { label: 'Apps', color: '#34d399', value: 16 },
    { label: 'Messages', color: '#fbbf24', value: 8 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 10 }
]);
<\/script>
`
            }
        };
    }
};
</script>
