<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-2">
        <Checkbox v-model="checked1" binary disabled />
        <Checkbox v-model="checked2" binary disabled />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: true,
            code: {
                basic: `
<Checkbox v-model="checked1" binary disabled />
<Checkbox v-model="checked2" binary disabled />
`,
                options: `
<template>
    <div class="card flex justify-center gap-2">
        <Checkbox v-model="checked1" binary disabled />
        <Checkbox v-model="checked2" binary disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: true,
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center gap-2">
        <Checkbox v-model="checked1" binary disabled />
        <Checkbox v-model="checked2" binary disabled />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(true);
<\/script>
`
            }
        };
    }
};
</script>
