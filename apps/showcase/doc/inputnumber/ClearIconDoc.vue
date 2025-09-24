<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>showClear</i> is enabled, a clear icon is added to reset the InputNumber.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputNumber v-model="value" showClear />
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
<InputNumber v-model="value" showClear />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputNumber v-model="value" showClear />
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
    <div class="card flex justify-center">
        <InputNumber v-model="value" showClear />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
