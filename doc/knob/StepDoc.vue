<template>
    <DocSectionText v-bind="$attrs">
        <p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Knob v-model="value" :step="10" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 40,
            code: {
                basic: `
<Knob v-model="value5" :step="10" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Knob v-model="value" :step="10" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 40
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Knob v-model="value" :step="10" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(40);
<\/script>
`
            }
        };
    }
};
</script>
