<template>
    <DocSectionText v-bind="$attrs">
        <p>FloatLabel visually integrates a label with its form element. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <InputMask id="over_label" v-model="value1" mask="999-99-9999" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputMask id="in_label" v-model="value2" mask="999-99-9999" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputMask id="on_label" v-model="value3" mask="999-99-9999" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
            code: {
                basic: `
<FloatLabel>
    <InputMask id="over_label" v-model="value1" mask="999-99-9999" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <InputMask id="in_label" v-model="value2" mask="999-99-9999" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputMask id="on_label" v-model="value3" mask="999-99-9999" />
    <label for="on_label">On Label</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <InputMask id="over_label" v-model="value1" mask="999-99-9999" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputMask id="in_label" v-model="value2" mask="999-99-9999" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputMask id="on_label" v-model="value3" mask="999-99-9999" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: ''
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <InputMask id="over_label" v-model="value1" mask="999-99-9999" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputMask id="in_label" v-model="value2" mask="999-99-9999" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputMask id="on_label" v-model="value3" mask="999-99-9999" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
<\/script>
        `
            }
        };
    }
};
</script>
