<template>
    <DocSectionText v-bind="$attrs">
        <p>InputNumber is used as a controlled input with <i>v-model</i> property.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="integeronly" class="font-bold block mb-2"> Integer Only </label>
            <InputNumber v-model="value1" inputId="integeronly" fluid />
        </div>
        <div class="flex-auto">
            <label for="withoutgrouping" class="font-bold block mb-2"> Without Grouping </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" fluid />
        </div>
        <div class="flex-auto">
            <label for="minmaxfraction" class="font-bold block mb-2"> Min-Max Fraction Digits </label>
            <InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" fluid />
        </div>
        <div class="flex-auto">
            <label for="minmax" class="font-bold block mb-2"> Min-Max Boundaries </label>
            <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" fluid />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: 42723,
            value2: 58151,
            value3: 2351.35,
            value4: 50,
            code: {
                basic: `
<InputNumber v-model="value1" inputId="integeronly" fluid />
<InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" fluid />
<InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" fluid />
<InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" fluid />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="integeronly" class="font-bold block mb-2"> Integer Only </label>
            <InputNumber v-model="value1" inputId="integeronly" fluid />
        </div>
        <div class="flex-auto">
            <label for="withoutgrouping" class="font-bold block mb-2"> Without Grouping </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" fluid />
        </div>
        <div class="flex-auto">
            <label for="minmaxfraction" class="font-bold block mb-2"> Min-Max Fraction Digits </label>
            <InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" fluid />
        </div>
        <div class="flex-auto">
            <label for="minmax" class="font-bold block mb-2"> Min-Max Boundaries </label>
            <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" fluid />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 42723,
            value2: 58151,
            value3: 2351.35,
            value4: 50
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="integeronly" class="font-bold block mb-2"> Integer Only </label>
            <InputNumber v-model="value1" inputId="integeronly" fluid />
        </div>
        <div class="flex-auto">
            <label for="withoutgrouping" class="font-bold block mb-2"> Without Grouping </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" fluid />
        </div>
        <div class="flex-auto">
            <label for="minmaxfraction" class="font-bold block mb-2"> Min-Max Fraction Digits </label>
            <InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" fluid />
        </div>
        <div class="flex-auto">
            <label for="minmax" class="font-bold block mb-2"> Min-Max Boundaries </label>
            <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" fluid />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(42723);
const value2 = ref(58151);
const value3 = ref(2351.35);
const value4 = ref(50);
<\/script>
`
            }
        };
    }
};
</script>
