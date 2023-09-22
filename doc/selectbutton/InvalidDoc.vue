<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" class="p-invalid" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 'Off',
            options: ['Off', 'On'],
            code: {
                basic: `
<SelectButton v-model="value" :options="options" aria-labelledby="basic" class="p-invalid" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" class="p-invalid" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'off',
            options: ['Off', 'On']
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" class="p-invalid" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('off');
const options = ref(['Off', 'On']);
<\/script>`
            }
        };
    }
};
</script>
