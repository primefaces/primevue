<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom texts e.g. units can be placed before or after the input section with the <i>prefix</i> and <i>suffix</i> properties.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="mile" class="font-bold block mb-2"> Mile </label>
            <InputNumber v-model="value1" inputId="mile" suffix=" mi" />
        </div>
        <div class="flex-auto">
            <label for="percent" class="font-bold block mb-2"> Percent </label>
            <InputNumber v-model="value2" inputId="percent" prefix="%" />
        </div>
        <div class="flex-auto">
            <label for="expiry" class="font-bold block mb-2"> Expiry </label>
            <InputNumber v-model="value3" inputId="expiry" prefix="Expires in " suffix=" days" />
        </div>
        <div class="flex-auto">
            <label for="temperature" class="font-bold block mb-2"> Temperature </label>
            <InputNumber v-model="value4" inputId="temperature" prefix="&uarr; " suffix="℃" :min="0" :max="40" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: 20,
            value2: 50,
            value3: 10,
            value4: 20,
            code: {
                basic: `
<InputNumber v-model="value1" inputId="mile" suffix=" mi" />
<InputNumber v-model="value2" inputId="percent" prefix="%" />
<InputNumber v-model="value3" inputId="expiry" prefix="Expires in " suffix=" days" />
<InputNumber v-model="value4" inputId="temperature" prefix="&uarr; " suffix="℃" :min="0" :max="40" />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="mile" class="font-bold block mb-2"> Mile </label>
            <InputNumber v-model="value1" inputId="mile" suffix=" mi" />
        </div>
        <div class="flex-auto">
            <label for="percent" class="font-bold block mb-2"> Percent </label>
            <InputNumber v-model="value2" inputId="percent" prefix="%" />
        </div>
        <div class="flex-auto">
            <label for="expiry" class="font-bold block mb-2"> Expiry </label>
            <InputNumber v-model="value3" inputId="expiry" prefix="Expires in " suffix=" days" />
        </div>
        <div class="flex-auto">
            <label for="temperature" class="font-bold block mb-2"> Temperature </label>
            <InputNumber v-model="value4" inputId="temperature" prefix="&uarr; " suffix="℃" :min="0" :max="40" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 20,
            value2: 50,
            value3: 10,
            value4: 20
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-4 p-fluid">
        <div class="flex-auto">
            <label for="mile" class="font-bold block mb-2"> Mile </label>
            <InputNumber v-model="value1" inputId="mile" suffix=" mi" />
        </div>
        <div class="flex-auto">
            <label for="percent" class="font-bold block mb-2"> Percent </label>
            <InputNumber v-model="value2" inputId="percent" prefix="%" />
        </div>
        <div class="flex-auto">
            <label for="expiry" class="font-bold block mb-2"> Expiry </label>
            <InputNumber v-model="value3" inputId="expiry" prefix="Expires in " suffix=" days" />
        </div>
        <div class="flex-auto">
            <label for="temperature" class="font-bold block mb-2"> Temperature </label>
            <InputNumber v-model="value4" inputId="temperature" prefix="&uarr; " suffix="℃" :min="0" :max="40" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(20);
const value2 = ref(50);
const value3 = ref(10);
const value4 = ref(20);
<\/script>
`
            }
        };
    }
};
</script>
