<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <SelectButton
            v-model="value"
            :options="options"
            aria-labelledby="basic"
            :pt="{
                button: { class: 'bg-primary ' }
            }"
        />
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
<SelectButton v-model="value" :options="options" aria-labelledby="basic" />`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
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
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
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
