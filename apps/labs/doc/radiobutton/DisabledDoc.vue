<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-2">
        <RadioButton v-model="value" :value="1" disabled />
        <RadioButton v-model="value" :value="2" disabled />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 2,
            code: {
                basic: `
<RadioButton v-model="value" :value="1" disabled />
<RadioButton v-model="value" :value="2" disabled />
`,
                options: `
<template>
    <div class="card flex justify-center gap-2">
        <RadioButton v-model="value" :value="1" disabled />
        <RadioButton v-model="value" :value="2" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 2
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center gap-2">
        <RadioButton v-model="value" :value="1" disabled />
        <RadioButton v-model="value" :value="2" disabled />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(2);
<\/script>
`
            }
        };
    }
};
</script>
