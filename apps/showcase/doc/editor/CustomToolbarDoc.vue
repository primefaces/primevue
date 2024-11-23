<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>modules</i> is present, it's possible to customize the <i>Toolbar</i>.</p>
    </DocSectionText>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" :modules="{toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', { align: [] }, 'clean'],
        ]}" />
    </div>
    <DocSectionCode :code="code" :dependencies="{ quill: '2.0.2' }" component="Editor" />
</template>

<script>
export default {
    data() {
        return {
            value: '',
            code: {
                basic: `
<Editor v-model="value" editorStyle="height: 320px" :modules="{toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', { align: [] }, 'clean'],
        ]}" />
`,
                options: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" :modules="{toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', { align: [] }, 'clean'],
        ]}" />
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
        <Editor v-model="value" editorStyle="height: 320px" :modules="{toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', { align: [] }, 'clean'],
        ]}" />
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
