<template>
    <DocSectionText v-bind="$attrs">
        <p>ColorPicker is used as a controlled input with <i>v-model</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ColorPicker v-model="color" />
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
<ColorPicker v-model="color" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ColorPicker v-model="color" />
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
        <ColorPicker v-model="color" />
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
