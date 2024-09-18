<template>
    <DocSectionText v-bind="$attrs">
        <p>When the form element is invalid, the label is also highlighted.</p>
    </DocSectionText>
    <div class="card flex justify-center items-center gap-4">
        <FloatLabel>
            <InputText id="value1" v-model="value1" autocomplete="off" :invalid="!value1" />
            <label for="value1">Username</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputText id="value2" v-model="value2" autocomplete="off" :invalid="!value2" />
            <label for="value2">Username</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputText id="value3" v-model="value3" autocomplete="off" :invalid="!value3" />
            <label for="value3">Username</label>
        </FloatLabel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
            code: {
                basic: `
<FloatLabel>
    <InputText id="value1" v-model="value1" :invalid="!value1" />
    <label for="value1">Username</label>
</FloatLabel>

<FloatLabel variant="in">
    <InputText id="value2" v-model="value2" :invalid="!value2" />
    <label for="value2">Username</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputText id="value3" v-model="value3" :invalid="!value3" />
    <label for="value3">Username</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex justify-center items-center gap-4">
        <FloatLabel>
            <InputText id="value1" v-model="value1" :invalid="!value1" />
            <label for="value1">Username</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputText id="value2" v-model="value2" :invalid="!value2" />
            <label for="value2">Username</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputText id="value3" v-model="value3" :invalid="!value3" />
            <label for="value3">Username</label>
        </FloatLabel>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: ''
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center items-center gap-4">
        <FloatLabel>
            <InputText id="value1" v-model="value1" :invalid="!value1" />
            <label for="value1">Username</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputText id="value2" v-model="value2" :invalid="!value2" />
            <label for="value2">Username</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputText id="value3" v-model="value3" :invalid="!value3" />
            <label for="value3">Username</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
