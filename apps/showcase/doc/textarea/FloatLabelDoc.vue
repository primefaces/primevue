<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center items-stretch gap-4">
        <FloatLabel>
            <Textarea id="over_label" v-model="value1" rows="5" cols="30" style="resize: none" class="h-full" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <Textarea id="in_label" v-model="value2" rows="5" cols="30" style="resize: none" class="h-full" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <Textarea id="on_label" v-model="value3" rows="5" cols="30" style="resize: none" class="h-full" />
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
    <Textarea id="over_label" v-model="value1" rows="5" cols="30" style="resize: none" />
    <label for="over_label">Over Label</label>
</FloatLabel>

<FloatLabel variant="in">
    <Textarea id="in_label" v-model="value2" rows="5" cols="30" style="resize: none" />
    <label for="in_label">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <Textarea id="on_label" v-model="value3" rows="5" cols="30" style="resize: none" />
    <label for="on_label">On Label</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <Textarea id="over_label" v-model="value1" rows="5" cols="30" style="resize: none" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <Textarea id="in_label" v-model="value2" rows="5" cols="30" style="resize: none" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <Textarea id="on_label" v-model="value3" rows="5" cols="30" style="resize: none" />
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
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center items-end gap-4">
        <FloatLabel>
            <Textarea id="over_label" v-model="value1" rows="5" cols="30" style="resize: none" />
            <label for="over_label">Over Label</label>
        </FloatLabel>

        <FloatLabel variant="in">
            <Textarea id="in_label" v-model="value2" rows="5" cols="30" style="resize: none" />
            <label for="in_label">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <Textarea id="on_label" v-model="value3" rows="5" cols="30" style="resize: none" />
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
