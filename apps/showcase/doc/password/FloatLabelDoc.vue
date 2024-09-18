<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <Password v-model="value1" inputId="over_label" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <Password v-model="value2" inputId="in_label" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <Password v-model="value3" inputId="on_label" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            code: {
                basic: `
<FloatLabel>
    <Password v-model="value1" inputId="over_label" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <Password v-model="value2" inputId="in_label" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <Password v-model="value3" inputId="on_label" />
    <label for="on_label">On Label</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <Password v-model="value1" inputId="over_label" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <Password v-model="value2" inputId="in_label" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <Password v-model="value3" inputId="on_label" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
        }
    }
};
<\/script>
`,
                composition: `
<template>
   <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <Password v-model="value1" inputId="over_label" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <Password v-model="value2" inputId="in_label" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <Password v-model="value3" inputId="on_label" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
