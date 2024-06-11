<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <FloatLabel>
            <InputNumber id="number-input" v-model="value" />
            <label for="number-input">Number</label>
        </FloatLabel>
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
<FloatLabel>
    <InputNumber id="number-input" v-model="value" />
    <label for="number-input">Number</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <FloatLabel>
            <InputNumber id="number-input" v-model="value" />
            <label for="number-input">Number</label>
        </FloatLabel>
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
        <FloatLabel>
            <InputNumber id="number-input" v-model="value" />
            <label for="number-input">Number</label>
        </FloatLabel>
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
