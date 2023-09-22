<template>
    <DocSectionText v-bind="$attrs">
        <p>Icons can be placed inside an input element by wrapping both the input and the icon with an element that has either <i>.p-input-icon-left</i> or <i>.p-input-icon-right</i> class.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-3">
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" />
        </span>

        <span class="p-input-icon-right">
            <i class="pi pi-spin pi-spinner" />
            <InputText v-model="value2" />
        </span>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            code: {
                basic: `
<span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText v-model="value1" placeholder="Search" />
</span>

<span class="p-input-icon-right">
    <i class="pi pi-spin pi-spinner" />
    <InputText v-model="value2" />
</span>`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-3">
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" />
        </span>
            
        <span class="p-input-icon-right">
            <i class="pi pi-spin pi-spinner" />
            <InputText v-model="value2" />
        </span>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value1: null,
            value2: null
        }
    }
}
<\/script>`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-3">
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" />
            </span>
            
            <span class="p-input-icon-right">
                <i class="pi pi-spin pi-spinner" />
            <InputText v-model="value2" />
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
<\/script>`
            }
        };
    }
};
</script>
