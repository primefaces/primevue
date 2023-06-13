<template>
    <DocSectionText v-bind="$attrs">
        <p>Apply <i>.p-inputtext-sm</i> to reduce the size of the input element or <i>.p-inputtext-lg</i> to enlarge it.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center gap-3">
        <InputText v-model="value1" type="text" class="p-inputtext-sm" placeholder="Small" />
        <InputText v-model="value2" type="text" placeholder="Normal" />
        <InputText v-model="value3" type="text" class="p-inputtext-lg" placeholder="Large" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            code: {
                basic: `
<InputText v-model="value1" type="text" class="p-inputtext-sm" placeholder="Small" />
<InputText v-model="value2" type="text" placeholder="Normal" />
<InputText v-model="value3" type="text" class="p-inputtext-lg" placeholder="Large" />`,
                options: `
<template>
    <div class="card flex flex-column align-items-center gap-3">
        <InputText v-model="value1" type="text" class="p-inputtext-sm" placeholder="Small" />
        <InputText v-model="value2" type="text" placeholder="Normal" />
        <InputText v-model="value3" type="text" class="p-inputtext-lg" placeholder="Large" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null
        }
    }
}
<\/script>`,
                composition: `
<template>
    <div class="card flex flex-column align-items-center gap-3">
        <InputText v-model="value1" type="text" class="p-inputtext-sm" placeholder="Small" />
        <InputText v-model="value2" type="text" placeholder="Normal" />
        <InputText v-model="value3" type="text" class="p-inputtext-lg" placeholder="Large" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>`
            }
        };
    }
};
</script>
