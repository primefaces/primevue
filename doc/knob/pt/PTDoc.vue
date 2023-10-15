<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <Knob
            v-model="value"
            :pt="{
                value: { style: { stroke: 'var(--cyan-500)' } }
            }"
        />
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
<Knob
    v-model="value"
    :pt="{
        value: { style: { stroke: 'var(--cyan-500)' } }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Knob
            v-model="value"
            :pt="{
                value: { style: { stroke: 'var(--cyan-500)' } }
            }"
        />
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
    <div class="card flex justify-content-center">
        <Knob
            v-model="value"
            :pt="{
                value: { style: { stroke: 'var(--cyan-500)' } }
            }"
        />
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
