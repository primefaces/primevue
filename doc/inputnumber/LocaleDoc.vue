<template>
    <DocSectionText v-bind="$attrs">
        <p>Localization information such as grouping and decimal symbols are defined with the <i>locale</i> property which defaults to the user locale.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="locale-user" class="font-bold block mb-2"> User Locale </label>
            <InputNumber v-model="value1" inputId="locale-user" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-us" class="font-bold block mb-2"> United States Locale </label>
            <InputNumber v-model="value2" inputId="locale-us" locale="en-US" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-german" class="font-bold block mb-2"> German Locale </label>
            <InputNumber v-model="value3" inputId="locale-german" locale="de-DE" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-indian" class="font-bold block mb-2"> Indian Locale </label>
            <InputNumber v-model="value4" inputId="locale-indian" locale="en-IN" :minFractionDigits="2" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: 151351,
            value2: 115744,
            value3: 635524,
            value4: 732762,
            code: {
                basic: `
<InputNumber v-model="value1" inputId="locale-user" :minFractionDigits="2" />
<InputNumber v-model="value2" inputId="locale-us" locale="en-US" :minFractionDigits="2" />
<InputNumber v-model="value3" inputId="locale-german" locale="de-DE" :minFractionDigits="2" />
<InputNumber v-model="value4" inputId="locale-indian" locale="en-IN" :minFractionDigits="2" />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="locale-user" class="font-bold block mb-2"> User Locale </label>
            <InputNumber v-model="value1" inputId="locale-user" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-us" class="font-bold block mb-2"> United States Locale </label>
            <InputNumber v-model="value2" inputId="locale-us" locale="en-US" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-german" class="font-bold block mb-2"> German Locale </label>
            <InputNumber v-model="value3" inputId="locale-german" locale="de-DE" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-indian" class="font-bold block mb-2"> Indian Locale </label>
            <InputNumber v-model="value4" inputId="locale-indian" locale="en-IN" :minFractionDigits="2" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 151351,
            value2: 115744,
            value3: 635524,
            value4: 732762
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="locale-user" class="font-bold block mb-2"> User Locale </label>
            <InputNumber v-model="value1" inputId="locale-user" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-us" class="font-bold block mb-2"> United States Locale </label>
            <InputNumber v-model="value2" inputId="locale-us" locale="en-US" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-german" class="font-bold block mb-2"> German Locale </label>
            <InputNumber v-model="value3" inputId="locale-german" locale="de-DE" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-indian" class="font-bold block mb-2"> Indian Locale </label>
            <InputNumber v-model="value4" inputId="locale-indian" locale="en-IN" :minFractionDigits="2" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(151351);
const value2 = ref(115744);
const value3 = ref(635524);
const value4 = ref(732762);
<\/script>
`
            }
        };
    }
};
</script>
