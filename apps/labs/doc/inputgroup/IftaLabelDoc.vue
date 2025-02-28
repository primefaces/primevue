<template>
    <DocSectionText v-bind="$attrs">
        <p>IftaLabel is used to create infield top aligned labels. Visit <PrimeVueNuxtLink to="/iftalabel">IftaLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputGroup class="md:w-80">
            <InputGroupAddon>
                <i class="pi pi-shopping-cart"></i>
            </InputGroupAddon>
            <IftaLabel>
                <InputNumber v-model="value" inputId="price" mode="currency" currency="USD" locale="en-US" />
                <label for="price">Price</label>
            </IftaLabel>
        </InputGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 10,
            code: {
                basic: `
<InputGroup class="md:w-80">
    <InputGroupAddon>
        <i class="pi pi-shopping-cart"></i>
    </InputGroupAddon>
    <IftaLabel>
        <InputNumber v-model="value" inputId="price" mode="currency" currency="USD" locale="en-US" />
        <label for="price">Price</label>
    </IftaLabel>
</InputGroup>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputGroup class="md:w-80">
            <InputGroupAddon>
                <i class="pi pi-shopping-cart"></i>
            </InputGroupAddon>
            <IftaLabel>
                <InputNumber v-model="value" inputId="price" mode="currency" currency="USD" locale="en-US" />
                <label for="price">Price</label>
            </IftaLabel>
        </InputGroup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 10
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InputGroup class="md:w-80">
            <InputGroupAddon>
                <i class="pi pi-shopping-cart"></i>
            </InputGroupAddon>
            <IftaLabel>
                <InputNumber v-model="value" inputId="price" mode="currency" currency="USD" locale="en-US" />
                <label for="price">Price</label>
            </IftaLabel>
        </InputGroup>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(10);
<\/script>
`
            }
        };
    }
};
</script>
