<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <RadioButton v-model="value" :value="1" disabled />
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
<RadioButton v-model="value" :value="1" disabled  />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <RadioButton v-model="value" :value="1" disabled  />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <RadioButton v-model="value" :value="1" disabled  />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
