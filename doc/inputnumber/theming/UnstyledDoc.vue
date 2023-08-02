<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
</template>

<script>
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card flex flex-wrap">
        <div class="flex-auto">
            <label for="integeronly" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Integer Only </label>
            <InputNumber v-model="value1" inputId="integeronly" />
        </div>
        <div class="flex-auto">
            <label for="withoutgrouping" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Without Grouping </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" />
        </div>
        <div class="flex-auto">
            <label for="minmaxfraction" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Min-Max Fraction Digits </label>
            <InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" />
        </div>
        <div class="flex-auto">
            <label for="minmax" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Min-Max Boundaries </label>
            <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(42723);
const value2 = ref(58151);
const value3 = ref(2351.35);
const value4 = ref(50);
<\/script>`
            }
        };
    }
};
</script>
