<template>
    <DocSectionText v-bind="$attrs">
        <p>
            SelectButton is used as a controlled component with <i>modelValue</i> property along with an <i>options</i> collection. Label and value of an option are defined with the <i>optionLabel</i> and <i>optionValue</i> properties respectively.
            Default property name for the <i>optionLabel</i> is <i>label</i> and <i>value</i> for the <i>optionValue</i>. If <i>optionValue</i> is omitted and the object has no <i>value</i> property, the object itself becomes the value of an option.
            Note that, when options are simple primitive values such as a string array, no <i>optionLabel</i> and <i>optionValue</i> would be necessary.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
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
