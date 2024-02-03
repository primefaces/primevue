<template>
    <DocSectionText v-bind="$attrs">
        <p><i>value</i> property accepts multiple meter group objects.</p>
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
            value: [
                { color: '#239EF0', label: 'Mortgage', value: 25 },
                { color: '#FAA419', label: 'Loan', value: 15 },
                { color: '#EE5879', label: 'Credit Card', value: 20 }
            ],
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
            value: [
                { color: '#239EF0', label: 'Mortgage', value: 25 },
                { color: '#FAA419', label: 'Loan', value: 15 },
                { color: '#EE5879', label: 'Credit Card', value: 20 }
            ]
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

const value = ref([
    { color: '#239EF0', label: 'Mortgage', value: 25 },
    { color: '#FAA419', label: 'Loan', value: 15 },
    { color: '#EE5879', label: 'Credit Card', value: 20 }
]);
<\/script>
`
            }
        };
    }
};
</script>
