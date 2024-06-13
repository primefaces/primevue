<template>
    <DocSectionText v-bind="$attrs">
        <p>Binary checkbox is used as a controlled input with <i>v-model</i> and <i>binary</i> properties.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" :binary="true" />
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
<Checkbox v-model="checked" :binary="true" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" :binary="true" />
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
        <Checkbox v-model="checked" :binary="true" />
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
