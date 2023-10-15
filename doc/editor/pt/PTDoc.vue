<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card">
        <Editor
            v-model="value"
            :pt="{
                content: { style: { height: '320px' } },
                toolbar: { class: 'surface-ground' }
            }"
        />
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
<Editor
    v-model="value"
    :pt="{
        content: { style: { height: '320px' } },
        toolbar: { class: 'surface-ground' }
    }"
/>
`,
                options: `
<template>
    <div class="card">
        <Editor
            v-model="value"
            :pt="{
                content: { style: { height: '320px' } },
                toolbar: { class: 'surface-ground' }
            }"
        />
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
        <Editor
            v-model="value"
            :pt="{
                content: { style: { height: '320px' } },
                toolbar: { class: 'surface-ground' }
            }"
        />
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
