<template>
    <DocSectionText v-bind="$attrs">
        <p>IftaLabel is used to create infield top aligned labels. Visit <PrimeVueNuxtLink to="/iftalabel">IftaLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <IftaLabel>
            <InputNumber v-model="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" variant="filled" />
            <label for="price_input">Price</label>
        </IftaLabel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 1,
            code: {
                basic: `
<IftaLabel>
    <InputNumber v-model="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" variant="filled" />
    <label for="price_input">Price</label>
</IftaLabel>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <InputNumber v-model="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" variant="filled" />
            <label for="price_input">Price</label>
        </IftaLabel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 1
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <IftaLabel>
            <InputNumber v-model="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" variant="filled" />
            <label for="price_input">Price</label>
        </IftaLabel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(1);
<\/script>
`
            }
        };
    }
};
</script>
