<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons can also placed vertically by setting <i>buttonLayout</i> as <i>vertical</i>.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 4rem" decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary">
            <template #incrementbuttonicon>
                <span class="pi pi-plus" />
            </template>
            <template #decrementbuttonicon>
                <span class="pi pi-minus" />
            </template>
        </InputNumber>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 50,
            code: {
                basic: `
<InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 4rem" decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary">
    <template #incrementbuttonicon>
        <span class="pi pi-plus" />
    </template>
    <template #decrementbuttonicon>
        <span class="pi pi-minus" />
    </template>
</InputNumber>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 4rem" decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary">
            <template #incrementbuttonicon>
                <span class="pi pi-plus" />
            </template>
            <template #decrementbuttonicon>
                <span class="pi pi-minus" />
            </template>
        </InputNumber>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 50
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 4rem" decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary">
            <template #incrementbuttonicon>
                <span class="pi pi-plus" />
            </template>
            <template #decrementbuttonicon>
                <span class="pi pi-minus" />
            </template>
        </InputNumber>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(50);
<\/script>
`
            }
        };
    }
};
</script>
