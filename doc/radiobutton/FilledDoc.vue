<template>
    <DocSectionText v-bind="$attrs">
        <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <RadioButton v-model="checked" variant="filled" binary />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
<RadioButton v-model="checked" variant="filled" binary />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <RadioButton v-model="checked" variant="filled" binary />
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
    <div class="card flex justify-content-center">
        <RadioButton v-model="checked" variant="filled" binary />
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
