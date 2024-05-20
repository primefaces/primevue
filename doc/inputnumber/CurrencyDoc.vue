<template>
    <DocSectionText v-bind="$attrs">
        <p>Monetary values are enabled by setting <i>mode</i> property as <i>currency</i>. In this setting, <i>currency</i> property also needs to be defined using ISO 4217 standard such as "USD" for the US dollar.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="currency-us" class="font-bold block mb-2"> United States </label>
            <InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
        </div>
        <div class="flex-auto">
            <label for="currency-germany" class="font-bold block mb-2"> Germany </label>
            <InputNumber v-model="value2" inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" />
        </div>
        <div class="flex-auto">
            <label for="currency-india" class="font-bold block mb-2"> India </label>
            <InputNumber v-model="value3" inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
        </div>
        <div class="flex-auto">
            <label for="currency-japan" class="font-bold block mb-2"> Japan </label>
            <InputNumber v-model="value4" inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: 1500,
            value2: 2500,
            value3: 4250,
            value4: 5002,
            code: {
                basic: `
<InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
<InputNumber v-model="value2" inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" />
<InputNumber v-model="value3" inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
<InputNumber v-model="value4" inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="currency-us" class="font-bold block mb-2"> United States </label>
            <InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
        </div>
        <div class="flex-auto">
            <label for="currency-germany" class="font-bold block mb-2"> Germany </label>
            <InputNumber v-model="value2" inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" />
        </div>
        <div class="flex-auto">
            <label for="currency-india" class="font-bold block mb-2"> India </label>
            <InputNumber v-model="value3" inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
        </div>
        <div class="flex-auto">
            <label for="currency-japan" class="font-bold block mb-2"> Japan </label>
            <InputNumber v-model="value4" inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 1500,
            value2: 2500,
            value3: 4250,
            value4: 5002
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="currency-us" class="font-bold block mb-2"> United States </label>
            <InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
        </div>
        <div class="flex-auto">
            <label for="currency-germany" class="font-bold block mb-2"> Germany </label>
            <InputNumber v-model="value2" inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" />
        </div>
        <div class="flex-auto">
            <label for="currency-india" class="font-bold block mb-2"> India </label>
            <InputNumber v-model="value3" inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
        </div>
        <div class="flex-auto">
            <label for="currency-japan" class="font-bold block mb-2"> Japan </label>
            <InputNumber v-model="value4" inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(1500);
const value2 = ref(2500);
const value3 = ref(4250);
const value4 = ref(5002);
<\/script>
`
            }
        };
    }
};
</script>
