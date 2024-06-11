<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <RadioButton v-model="checked" disabled :value="checked" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked: true,
            code: {
                basic: `
<RadioButton v-model="checked" disabled :value="checked" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <RadioButton v-model="checked" disabled :value="checked" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <RadioButton v-model="checked" disabled :value="checked" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
