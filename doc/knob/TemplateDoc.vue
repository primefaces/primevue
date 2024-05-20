<template>
    <DocSectionText v-bind="$attrs">
        <p>The label can be customized with the <i>valueTemplate</i> property using either a template string or a function.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Knob v-model="value" valueTemplate="{value}%" />
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
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Knob v-model="value" valueTemplate="{value}%" />
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
    <div class="card flex justify-center">
        <Knob v-model="value" valueTemplate="{value}%" />
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
