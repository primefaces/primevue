<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" :dependencies="{ quill: '1.3.7' }" component="Editor" embedded />
</template>

<script>
export default {
    data() {
        return {
            code: {
                composition: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('');
<\/script>`
            }
        };
    }
};
</script>
