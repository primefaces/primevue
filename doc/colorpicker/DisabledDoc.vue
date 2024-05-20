<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ColorPicker v-model="color" disabled />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            color: null,
            code: {
                basic: `
<ColorPicker v-model="color" disabled />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ColorPicker v-model="color" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <ColorPicker v-model="color" disabled />
    </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref();
<\/script>
`
            }
        };
    }
};
</script>
