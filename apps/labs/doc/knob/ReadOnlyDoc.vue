<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>readonly</i> present, value cannot be edited.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Knob v-model="value" readonly />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: 50,
            code: {
                basic: `
<Knob v-model="value" readonly />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Knob v-model="value" readonly />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 50
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Knob v-model="value" readonly />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
<\/script>
`
            }
        };
    }
};
</script>
