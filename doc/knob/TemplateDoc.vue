<template>
    <DocSectionText v-bind="$attrs">
        <p>The label can be customized with the <i>valueTemplate</i> property using either a template string or a function.</p>
    </DocSectionText>
    <div class="card flex justify-content-center gap-4">
        <Knob v-model="value" valueTemplate="{value}%" />
        <Knob v-model="value" :valueTemplate="(val) => val / 100" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 60,
            code: {
                basic: `
<Knob v-model="value" valueTemplate="{value}%" />
<Knob v-model="value" :valueTemplate="val => val / 100" />
`,
                options: `
<template>
    <div class="card flex justify-content-center gap-4">
        <Knob v-model="value" valueTemplate="{value}%" />
        <Knob v-model="value" :valueTemplate="val => val / 100" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 60
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center gap-4">
        <Knob v-model="value" valueTemplate="{value}%" />
        <Knob v-model="value" :valueTemplate="val => val / 100" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(60);
<\/script>
`
            }
        };
    }
};
</script>
