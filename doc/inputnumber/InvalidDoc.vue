<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" class="p-invalid" mode="decimal" :minFractionDigits="2" />
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
<InputNumber v-model="value" class="p-invalid" mode="decimal" :minFractionDigits="2" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" class="p-invalid" mode="decimal" :minFractionDigits="2" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" class="p-invalid" mode="decimal" :minFractionDigits="2" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`
            }
        };
    }
};
</script>
