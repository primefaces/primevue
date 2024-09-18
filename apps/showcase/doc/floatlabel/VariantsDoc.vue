<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>variant</i> property defines the position of the label. Default value is <i>over</i>, whereas <i>in</i> and <i>on</i> are the alternatives.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <FloatLabel variant="in">
            <InputText id="inlabel" v-model="value1" autocomplete="off" />
            <label for="inlabel">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputText id="onlabel" v-model="value2" autocomplete="off" />
            <label for="onlabel">On Label</label>
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
            code: {
                basic: `
<FloatLabel variant="in">
    <InputText id="inlabel" v-model="value1" />
    <label for="inlabel">In Label</label>
</FloatLabel>

<FloatLabel variant="on">
    <InputText id="onlabel" v-model="value2" />
    <label for="onlabel">On Label</label>
</FloatLabel>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <FloatLabel variant="in">
            <InputText id="inlabel" v-model="value1" />
            <label for="inlabel">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputText id="onlabel" v-model="value2" />
            <label for="onlabel">On Label</label>
        </FloatLabel>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value1: null,
            value2: null
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <FloatLabel variant="in">
            <InputText id="inlabel" v-model="value1" />
            <label for="inlabel">In Label</label>
        </FloatLabel>

        <FloatLabel variant="on">
            <InputText id="onlabel" v-model="value2" />
            <label for="onlabel">On Label</label>
        </FloatLabel>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
