<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <InputText v-model="value1" :invalid="!value1" placeholder="Name" />
        <InputText v-model="value2" :invalid="!value2" variant="filled" placeholder="Name" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            code: {
                basic: `
<InputText v-model="value1" :invalid="!value1" placeholder="Name" />
<InputText v-model="value2" :invalid="!value2" variant="filled" placeholder="Name" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <InputText v-model="value1" :invalid="!value1" placeholder="Name" />
        <InputText v-model="value2" :invalid="!value2" variant="filled" placeholder="Name" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: ''
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <InputText v-model="value1" :invalid="!value1" placeholder="Name" />
        <InputText v-model="value2" :invalid="!value2" variant="filled" placeholder="Name" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
<\/script>
`
            }
        };
    }
};
</script>
