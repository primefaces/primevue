<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Default layout of MeterGroup is <i>horizontal</i>, and also <i>orientation</i> property can be set as <i>vertical</i>.In addition, position of the label can be changed using <i>labelPosition</i> property that the default value is
            <i>end</i> and also <i>start</i> option is available.
        </p>
    </DocSectionText>
    <div class="card">
        <MeterGroup :value="value" labelOrientation="vertical" labelPosition="start" />
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
<MeterGroup :value="value" labelOrientation="vertical" labelPosition="start" />
`,
                options: `
<template>
    <div class="card">
        <MeterGroup :value="value" labelOrientation="vertical" labelPosition="start" />
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
        <MeterGroup :value="value" labelOrientation="vertical" labelPosition="start" />
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
