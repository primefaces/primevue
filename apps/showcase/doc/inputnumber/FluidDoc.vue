<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>fluid</i> prop makes the component take up the full width of its container when set to true.</p>
    </DocSectionText>
    <div class="card">
        <InputNumber v-model="value" fluid mode="currency" currency="USD" locale="en-US" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<InputNumber v-model="value" fluid mode="currency" currency="USD" locale="en-US" />
`,
                options: `
<template>
    <div class="card">
        <InputNumber v-model="value" fluid mode="currency" currency="USD" locale="en-US" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <InputNumber v-model="value" fluid mode="currency" currency="USD" locale="en-US" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>
`
            }
        };
    }
};
</script>
