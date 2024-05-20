<template>
    <DocSectionText v-bind="$attrs">
        <p>Knob is an input component and used with the standard <i>v-model</i> directive.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Knob v-model="value" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 0,
            code: {
                basic: `
<Knob v-model="value" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Knob v-model="value" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 0
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Knob v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>
`
            }
        };
    }
};
</script>
