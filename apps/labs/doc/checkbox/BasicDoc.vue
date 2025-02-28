<template>
    <DocSectionText v-bind="$attrs">
        <p>Binary checkbox is used with the <i>v-model</i> for two-way value binding and the <i>binary</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary />
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
<Checkbox v-model="checked" binary />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary />
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
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary />
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
