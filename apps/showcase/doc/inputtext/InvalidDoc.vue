<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputText v-model="value" :invalid="value === ''" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: '',
            code: {
                basic: `
<InputText v-model="value" :invalid="value === null"  />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputText v-model="value" :invalid="value === null"  />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InputText v-model="value" :invalid="value === null"  />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
`
            }
        };
    }
};
</script>
