<template>
    <DocSectionText v-bind="$attrs">
        <p>ColorPicker is displayed as a popup by default, add <i>inline</i> property to customize this behavior.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ColorPicker v-model="color" inline />
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
<ColorPicker v-model="color" inline />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ColorPicker v-model="color" inline />
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
        <ColorPicker v-model="color" inline />
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
