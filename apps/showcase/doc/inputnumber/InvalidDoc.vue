<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputNumber v-model="value" :invalid="value === null" mode="decimal" :minFractionDigits="2" />
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
<InputNumber v-model="value" :invalid="value === null"  mode="decimal" :minFractionDigits="2" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputNumber v-model="value" :invalid="value === null"  mode="decimal" :minFractionDigits="2" />
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
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InputNumber v-model="value" :invalid="value === null"  mode="decimal" :minFractionDigits="2" />
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
