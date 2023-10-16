<template>
    <DocSectionText v-bind="$attrs">
        <p>A model can be bound using the standard <i>v-model</i> directive.</p>
    </DocSectionText>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" />
    </div>
    <DocSectionCode :code="code" :dependencies="{ quill: '1.3.7' }" component="Editor" />
</template>

<script>
export default {
    data() {
        return {
            value: '',
            code: {
                basic: `
<Editor v-model="value" editorStyle="height: 320px" />
`,
                options: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('');
<\/script>
`
            }
        };
    }
};
</script>
