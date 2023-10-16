<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>readonly</i> is present, the value cannot be edited.</p>
    </DocSectionText>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" readonly />
    </div>
    <DocSectionCode :code="code" :dependencies="{ quill: '1.3.7' }" component="Editor" />
</template>

<script>
export default {
    data() {
        return {
            value: 'Always bet on Prime',
            code: {
                basic: `
<Editor v-model="value" editorStyle="height: 320px" readonly />
`,
                options: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" readonly />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'Always bet on Prime'
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" readonly />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('Always bet on Prime');
<\/script>
`
            }
        };
    }
};
</script>
