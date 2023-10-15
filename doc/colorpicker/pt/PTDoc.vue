<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card flex justify-content-center">
        <ColorPicker
            v-model="color"
            inline
            :pt="{
                colorHandler: { class: 'w-1rem h-1rem' }
            }"
        />
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
<ColorPicker
    v-model="color"
    inline
    :pt="{
        colorHandler: { class: 'w-1rem h-1rem' }
    }"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <ColorPicker
            v-model="color"
            inline
            :pt="{
                colorHandler: { class: 'w-1rem h-1rem' }
            }"
        />
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
    <div class="card flex justify-content-center">
        <ColorPicker
            v-model="color"
            inline
            :pt="{
                colorHandler: { class: 'w-1rem h-1rem' }
            }"
        />
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
