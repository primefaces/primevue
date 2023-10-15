<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <InputNumber
            v-model="value"
            showButtons
            buttonLayout="horizontal"
            :step="0.25"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="currency"
            currency="EUR"
            :pt="{
                incrementButton: { class: 'bg-teal-500 border-teal-500' },
                decrementButton: { class: 'bg-orange-500 border-orange-500' }
            }"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 20,
            code: {
                basic: `
<InputNumber
    v-model="value"
    showButtons
    buttonLayout="horizontal"
    :step="0.25"
    incrementButtonIcon="pi pi-plus"
    decrementButtonIcon="pi pi-minus"
    mode="currency"
    currency="EUR"
    :pt="{
        incrementButton: { class: 'bg-teal-500 border-teal-500' },
        decrementButton: { class: 'bg-orange-500 border-orange-500' }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <InputNumber
            v-model="value"
            showButtons
            buttonLayout="horizontal"
            :step="0.25"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="currency"
            currency="EUR"
            :pt="{
                incrementButton: { class: 'bg-teal-500 border-teal-500' },
                decrementButton: { class: 'bg-orange-500 border-orange-500' }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 20
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <InputNumber
            v-model="value"
            showButtons
            buttonLayout="horizontal"
            :step="0.25"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="currency"
            currency="EUR"
            :pt="{
                incrementButton: { class: 'bg-teal-500 border-teal-500' },
                decrementButton: { class: 'bg-orange-500 border-orange-500' }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(20);
<\/script>
`
            }
        };
    }
};
</script>
