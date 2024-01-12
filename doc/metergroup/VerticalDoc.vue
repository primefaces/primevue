<template>
    <DocSectionText v-bind="$attrs">
        <p>Layout of the MeterGroup is configured with the <i>orientation</i> property that accepts <i>horizontal</i> and <i>vertical</i> as options.</p>
    </DocSectionText>
    <div class="card flex justify-content-center" style="height: 350px">
        <MeterGroup :value="value" orientation="vertical" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: [
                { color: '#4ADE81', label: 'E-mails', value: 17 },
                { color: '#FB923C', label: 'Messages', value: 36 },
                { color: '#C084FC', label: 'Other', value: 24 }
            ],
            code: {
                basic: `
<MeterGroup :value="value" orientation="vertical" />
`,
                options: `
<template>
    <div class="card flex justify-content-center" style="height: 350px">
        <MeterGroup :value="value" orientation="vertical" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: [
                { color: '#4ADE81', label: 'E-mails', value: 17 },
                { color: '#FB923C', label: 'Messages', value: 36 },
                { color: '#C084FC', label: 'Other', value: 24 }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center" style="height: 350px">
        <MeterGroup :value="value" orientation="vertical" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { color: '#4ADE81', label: 'E-mails', value: 17 },
    { color: '#FB923C', label: 'Messages', value: 36 },
    { color: '#C084FC', label: 'Other', value: 24 }
]);
<\/script>
`
            }
        };
    }
};
</script>
