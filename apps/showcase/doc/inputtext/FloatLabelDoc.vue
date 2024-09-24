<template>
    <DocSectionText v-bind="$attrs">
        <p>FloatLabel visually integrates a label with its form element. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <InputText id="over_label" v-model="value1" autocomplete="off" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputText id="in_label" v-model="value2" autocomplete="off" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputText id="on_label" v-model="value3" autocomplete="off" />
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
    <InputText id="over_label" v-model="value1" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <InputText id="in_label" v-model="value2" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputText id="on_label" v-model="value3" />
    <label for="on_label">On Label</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <InputText id="over_label" v-model="value1" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputText id="in_label" v-model="value2" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputText id="on_label" v-model="value3" />
            <label for="on_label">On Label</label>
        </FloatLabel>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <InputText id="over_label" v-model="value1" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <InputText id="in_label" v-model="value2" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputText id="on_label" v-model="value3" />
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
