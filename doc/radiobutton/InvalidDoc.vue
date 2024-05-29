<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <RadioButton v-model="value" value="1" :invalid="value === null" />
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
<RadioButton v-model="value" value="1" :invalid="value === null" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <RadioButton v-model="value" value="1" :invalid="value === null" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            val: null
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <RadioButton v-model="value" value="1" :invalid="value === null" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const val = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
