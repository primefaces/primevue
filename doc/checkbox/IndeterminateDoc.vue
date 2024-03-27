<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>indeterminate</i> is present, the checkbox state specified as indeterminate.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" indeterminate binary />
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
<Checkbox v-model="checked" indeterminate binary />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" indeterminate binary />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" indeterminate binary />
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
